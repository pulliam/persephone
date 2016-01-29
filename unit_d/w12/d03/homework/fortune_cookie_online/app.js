var fortune = require('./fortune.js');
var express = require('express');
var request = require('request');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.set('view engine', 'ejs');

app.get('/', function (req, res){
	var allFortunes = '.';
	
	request('http://fortunecookieapi.com/v1/cookie', function(error, response, body){
			fortune_message = '- Your Fortune says: "' + JSON.parse(body)[0].fortune.message + '"';
			lesson = '- Here is a Chinese Lesson:  "' + JSON.parse(body)[0].lesson.chinese + '" means "' + 
			JSON.parse(body)[0].lesson.english + '" in English.';
			lucky_numbers = '- Your lucky numbers are ' + JSON.parse(body)[0].lotto.numbers;
			allFortunes = fortune_message + lesson + lucky_numbers;

	console.log(allFortunes);
	res.render('index', { myfortune: allFortunes });

	});
});


app.listen(3000);