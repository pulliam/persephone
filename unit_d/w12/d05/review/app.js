// From scratch, create a simple Express server. Once you've got "hello world" working, implement the following features in your app:



var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var ejs = require('ejs');
var fs = require('fs');
var bodyParser = require('body-parser').urlencoded({extended: false})

app.use(bodyParser);
app.use(express.static(__dirname + "/public"));

app.set('view engine', 'ejs');


// When a user visits "/", they should see an index page with an h1 that says "Titanic" and links that says "Manifest" and "ICEBERG!"
app.get('/', function(req, res) {
  res.render('index'); 
});

// When the server receives a GET request to "/passengers", send back the JSON inside "lib/passengers.json" as a response.
app.get('/passengers', function(req, res) {
  fs.readFile('./lib/passengers.json', 'utf8', function(error, passengers){
    res.json(passengers);
  });
});

app.get('/iceberg', function(req, res) {
  res.render('iceberg');
});

app.post('/lost_souls', function(req, res) {
  // TO DO: add this name to lib/lost_souls.json
  console.log(req.body.name);
  res.json({result: 'drowned'});
});
app.post('/rescued', function(req, res) {
  // TO DO: add this name to lib/rescued.json
  console.log(req.body.name);
  res.json({result: 'rescued'});
});
app.listen(port, function() {
  console.log('Connected on port ' + port)
});





