var express = require('express');
var router = express.Router();
var app = express();
var path = require('path');
//var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('entered router.get function')
  res.sendFile(path.join(__dirname, '../public', 'chatroom.html'));
});

var messages = [{
            content: "Message 1",
            time: "9:00 am"
        },
        {
            content: "Message 2",
            time: "10:30 am"
        }
];

router.get('/messages', function(req, res) {
  console.log("In Messages");
  res.send(messages);
});

router.post('/messages', function(req, res) {
   console.log("In message Post");
    console.log(req.body);
    messages.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
