var express = require('express');
var app = express();
var fs = require('fs');
var items = require('./lib/items.json');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/items', function (req, res) {
	res.json(items);
});

app.post('/', function (req, res) {
	res.json(items);
});

app.put('/', function (req, res) {
	res.render('index');
});

app.delete('/', function (req, res) {
	res.render('index');
});

// app.post('/new', function (req, res) {
// 	var body = req.body;

// 	fs.readFile('./lib/passengers.json', 'utf-8', 
// 		function(error, data){
// 			var passengersOnList = JSON.parse(data);
// 			var deletePassanger = body.deleteit;
// 			passengersOnList.splice(indexOf(deletePassanger), 1);
// 		})
// });

app.listen(3000); 