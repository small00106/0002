var express = require('express');
var session = require('express-session');
var fs = require('fs');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 6002;

var ADMIN_USER = process.env.ADMIN_USER || 'admin';
var ADMIN_PASS = process.env.ADMIN_PASS || 'admin123';
var SESSION_SECRET = process.env.SESSION_SECRET || 'verdant-studio-admin-secret-key';

var DATA_FILE = path.join(__dirname, 'data', 'messages.json');

var ALLOWED_ORIGINS = ['http://localhost:6001', 'http://127.0.0.1:6001'];

app.use(function (req, res, next) {
  var origin = req.headers.origin;
  if (ALLOWED_ORIGINS.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  }
}));

app.use(express.static(__dirname, {
  setHeaders: function (res, filePath) {
    if (filePath.endsWith('admin.html')) {
      res.setHeader('Cache-Control', 'no-store');
    }
  }
}));

function ensureDataDir() {
  var dir = path.join(__dirname, 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, '[]', 'utf8');
  }
}

function readMessages() {
  ensureDataDir();
  try {
    var raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function writeMessages(messages) {
  ensureDataDir();
  fs.writeFileSync(DATA_FILE, JSON.stringify(messages, null, 2), 'utf8');
}

function requireAuth(req, res, next) {
  if (req.session && req.session.admin) {
    return next();
  }
  res.status(401).json({ error: 'Unauthorized' });
}

app.post('/api/login', function (req, res) {
  var username = (req.body.username || '').trim();
  var password = (req.body.password || '').trim();

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    req.session.admin = true;
    req.session.username = username;
    return res.json({ success: true, username: username });
  }

  res.status(401).json({ error: 'Invalid username or password' });
});

app.post('/api/logout', function (req, res) {
  req.session.destroy(function (err) {
    if (err) {
      return res.status(500).json({ error: 'Logout failed' });
    }
    res.clearCookie('connect.sid');
    res.json({ success: true });
  });
});

app.get('/api/auth/status', function (req, res) {
  if (req.session && req.session.admin) {
    res.json({ authenticated: true, username: req.session.username });
  } else {
    res.json({ authenticated: false });
  }
});

app.post('/api/messages', function (req, res) {
  var name = (req.body.name || '').trim();
  var email = (req.body.email || '').trim();
  var message = (req.body.message || '').trim();

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  var messages = readMessages();
  var newMsg = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
    name: name,
    email: email,
    message: message,
    time: new Date().toISOString(),
    read: false
  };
  messages.unshift(newMsg);
  writeMessages(messages);

  res.json({ success: true, id: newMsg.id });
});

app.get('/api/messages', requireAuth, function (req, res) {
  var messages = readMessages();
  res.json(messages);
});

app.patch('/api/messages/:id/read', requireAuth, function (req, res) {
  var messages = readMessages();
  var target = messages.find(function (m) { return m.id === req.params.id; });
  if (!target) {
    return res.status(404).json({ error: 'Message not found' });
  }
  target.read = true;
  writeMessages(messages);
  res.json({ success: true });
});

app.delete('/api/messages/:id', requireAuth, function (req, res) {
  var messages = readMessages();
  var idx = messages.findIndex(function (m) { return m.id === req.params.id; });
  if (idx === -1) {
    return res.status(404).json({ error: 'Message not found' });
  }
  messages.splice(idx, 1);
  writeMessages(messages);
  res.json({ success: true });
});

app.get('/admin.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

app.listen(PORT, function () {
  console.log('Backend server running at http://localhost:' + PORT);
  console.log('Admin panel: http://localhost:' + PORT + '/admin.html');
  console.log('Admin login: ' + ADMIN_USER + ' / ' + ADMIN_PASS);
  console.log('API endpoint: http://localhost:' + PORT + '/api/messages');
});
