var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 3000;

var DATA_FILE = path.join(__dirname, 'data', 'messages.json');

app.use(express.json());
app.use(express.static(__dirname));

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

app.get('/api/messages', function (req, res) {
  var messages = readMessages();
  res.json(messages);
});

app.patch('/api/messages/:id/read', function (req, res) {
  var messages = readMessages();
  var target = messages.find(function (m) { return m.id === req.params.id; });
  if (!target) {
    return res.status(404).json({ error: 'Message not found' });
  }
  target.read = true;
  writeMessages(messages);
  res.json({ success: true });
});

app.delete('/api/messages/:id', function (req, res) {
  var messages = readMessages();
  var idx = messages.findIndex(function (m) { return m.id === req.params.id; });
  if (idx === -1) {
    return res.status(404).json({ error: 'Message not found' });
  }
  messages.splice(idx, 1);
  writeMessages(messages);
  res.json({ success: true });
});

app.listen(PORT, function () {
  console.log('Verdant Studio server running at http://localhost:' + PORT);
  console.log('Admin panel: http://localhost:' + PORT + '/admin.html');
});
