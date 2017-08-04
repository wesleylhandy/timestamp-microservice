// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var moment = require('moment');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/:time", function (req, res) {
  var obj = {
    unix: null,
    natural: null
  }
  var time = decodeURIComponent(req.params.time);
  console.log(time);
  
  if(time.match(/\D/) && !isNaN(Date.parse(time))) {
        updateObj(new Date(time), 'MMM Do, YYYY');
  } else if(!time.match(/\D/)) {
      updateObj(new Date(parseInt(time)), 'HH:mm:ss MMM Do, YYYY');
  }
  
  function updateObj(time, format) {
    obj.unix = moment(time).format('x');
    obj.natural = moment(time).format(format);
  }
  
  res.send(obj);
 
  
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});