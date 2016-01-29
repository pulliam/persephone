var fortune = {};
var request = require('request');

	fortune.fetch = function(){
		request('http://fortunecookieapi.com/v1/cookie', function(error, response, body){
			fortune_message = '- Your Fortune says: "' + JSON.parse(body)[0].fortune.message + '"';
			lesson = '- Here is a Chinese Lesson:  "' + JSON.parse(body)[0].lesson.chinese + '" means "' + 
			JSON.parse(body)[0].lesson.english + '" in English.';
			lucky_numbers = '- Your lucky numbers are ' + JSON.parse(body)[0].lotto.numbers;

			console.log(fortune_message);
			console.log(lesson);
			console.log(lucky_numbers);
		});
	};


module.exports = fortune;