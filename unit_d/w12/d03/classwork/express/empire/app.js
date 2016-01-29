var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.set('view engine', 'ejs');

var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser);

app.get('/', function (req, res) {
	res.send("Welcome to The TIE Squadron Database")
});

app.get('/black', function (req, res) {
	fs.readFile('./squadron_data/black_squadron.json', 'utf8',
		function(error, data){
			if (!error){
				var textObject = JSON.parse(data);
				res.render('index', { givemeanamehere: textObject });
			}
		})
	
});

app.get('/black/:id', function (req, res) {
	fs.readFile('./squadron_data/black_squadron.json', 'utf8',
		function(error, data){
			if (!error){
				var textObject = JSON.parse(data);
				console.log(JSON.parse(data));
				console.log(req.params.id);
				res.render('show', { soldier: textObject[req.params.id] });
			}
		})
	
});

app.get('/soldier/new', function (req, res) {
	res.render('new');
});

app.post('/soldier', function (req, res) {
	var body = req.body;

	fs.readFile('./squadron_data/black_squadron.json', 'utf-8', function(error, data){
		var soldiers = JSON.parse(data); 
		var newSoldier = {name: body.name, squadron: body.squadron, id: parseInt(body.id), callSign: body.callSign}
		soldiers.push(newSoldier);
		var soldiersJson = JSON.stringify(soldiers);
		fs.writeFile('./squadron_data/black_squadron.json', soldiersJson, function(error){
			if (!error){
				res.redirect('/black');
			} else {
				console.log(error);
			}
		});
	});
});

app.listen(3000);