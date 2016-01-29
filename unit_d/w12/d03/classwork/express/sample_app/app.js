var express = require('express');
var app = express();
var fs = require('fs');
var rhymeBrian = require('./rhyme_brian.js');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

app.use(urlencodedBodyParser);

app.get('/', function (req, res){
	fs.readFile('index_text.json', 'utf8', //fs.readFile reads another file of mine.
		function(error, data){ //it takes the file name, the utf8 and then a function
			if (!error) { //If no error,
				var textObject = JSON.parse(data); //show the data of it. Its important to check the data type. 
				var responseText = textObject.text; //I want the value of the "text" inside my object
				res.send(responseText);
			}	
	});
});

app.get('/randomword', function (req, res) {
	fs.readFile('words.json', 'utf8', 
		function(error, data){
			if (!error){
				var textObject = JSON.parse(data);
				var randomNum = Math.floor(Math.random() * textObject.length);
				var randomWord = textObject[randomNum];
				res.send(randomWord);
			}
		})
});

app.get('/randomword/new', function (req, res){
	res.render('new')
});

app.post('/randomword', function (req, res){
	var body = req.body;

	fs.readFile('words.json', 'utf-8', function(error, data){

		var words = JSON.parse(data);
		var newWord = body.rando;

		words.push(newWord);

		var wordsJson = JSON.stringify(words);

		fs.writeFile('words.json', wordsJson, function(error){
			if (!error){
				res.redirect('/');
			} else {
				console.log(error);
			}
		}); //this is used to send information (oposite of "read")

	});
});

app.get('/user', function (req, res){
	res.render('user', {name: "Austin"});
})

app.get('/perfume', function (req, res){
	res.render('perfume', {variable: "Perfume", color: ["Green", "Pink"], name: "Smelly Roses"})
})

// app.get('/randomrhyme', function (req, res){
// 	fs.readFile('words.json', 'utf8', 
// 		function(error, data){
// 			if (!error){
// 				var textObject = JSON.parse(data);
// 				var randomNum = Math.floor(Math.random() * textObject.length);
// 				var randomWord = textObject[randomNum];
				
// 				callback2 = function(word){
// 					res.send(randomWord + ' rhymes with ' + word);
// 				}

// 				rhymeBrian.rhyme(callback2, randomWord);
// 			}
// 		})
// });


app.listen(3000); //this listens to the server




