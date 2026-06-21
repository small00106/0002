var express = require('express');
var path = require('path');

var app = express();
var PORT = process.env.PORT || 6001;

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function () {
  console.log('Frontend server running at http://localhost:' + PORT);
});
