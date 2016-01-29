var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser);

app.get('/', function (req, res){

	fs.readFile('./lib/burritos.json', 'utf8', 
		function(error, data){ 
			if (!error) { 
				var textObject = JSON.parse(data);
				res.render('index', { burritos: textObject });
			} else {
				console.log(error);
			}
	});
});

app.get('/burrito/new', function (req, res) {
	res.render('new');
});

app.post('/burrito', function (req, res) {
	var body = req.body;

	fs.readFile('./lib/burritos.json', 'utf-8', 
		function(error, data){
		var burritos = JSON.parse(data); 
		var newBurrito = body.burrito
		burritos.push(newBurrito);
		var burritosJson = JSON.stringify(burritos);

		fs.writeFile('./lib/burritos.json', burritosJson, function(error){
			if (!error){
				res.redirect('/');
			} else {
				console.log(error);
			}
		});
	});
});

app.listen(3000);
