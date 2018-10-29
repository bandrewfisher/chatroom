var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/chatroom.html'));
});

app.use(express.static(__dirname));
console.log(__dirname);

app.listen(4200);