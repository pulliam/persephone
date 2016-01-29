var horoscope = require('horoscope');
var sillyname = require('sillyname');

var sillifiedName = sillyname();
var response;


if (process.argv.length > 2) {
  var year = process.argv[2];
  var zodiac = horoscope.getZodiac(year);
  response = 'Your spirit name is ' + sillifiedName + ' and your zodiac sign is ' + zodiac;
} else {
  response = 'Your spirit name is ' + sillifiedName;
}

console.log(response);