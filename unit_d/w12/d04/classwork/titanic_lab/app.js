var express = require('express');
var app = express();
var fs = require('fs');
var passengers = require('./lib/passengers.json');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/passengers', function (req, res) {
	res.json(passengers);
});

app.get('/iceberg', function (req, res) {
	res.render('iceberg', { iceberg: "info"});
});

app.post('/new', function (req, res) {
	var body = req.body;

	fs.readFile('./lib/passengers.json', 'utf-8', 
		function(error, data){
			var passengersOnList = JSON.parse(data);
			var deletePassanger = body.deleteit;
			passengersOnList.splice(indexOf(deletePassanger), 1);
		})
});

app.listen(3000); 