/*
// Light Functions
*/

// Alows the progam to call command line programs
var spawn = require("child_process").spawn;

// Checks light state
var state = "";
var process = spawn('python3',["getLight.py"]);

process.stdout.on('data', function(data) {
   console.log("Got data from Python");
   console.log(data.toString());
   state = data.toString();
});

// Runs "ledOn.py" which turns on the light
function lightOn () {
    var process = spawn('python3',["ledOn.py"]);
    state = "ON";
}

// Runs "ledOff.py" which turns off the light
function lightOff () {
    var process = spawn('python3',["ledOff.py"]);
    state = "OFF";
}

function getLight () {
    return state;
}

/*
// Web functionality
*/

// Import and set up express
var express = require('express');
var app = express();
app.use(express.static('public'));
app.use(require('body-parser').urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.post("/changeLight", function (req, res) {
  res.sendStatus(200);
  if (req.body.value == "OFF") {
    lightOff();
  } else {
    lightOn();
  }
});

app.post("/getLight", function (req, res) {
  console.log(getLight());
  res.send(getLight());
});

var listener = app.listen(3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
