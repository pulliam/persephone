var spiritName = require('./module.js');
var horoscope = require('horoscope');

if(process.argv.length > 2) {
	console.log('Your spirit name is ' + spiritName.getName() + ' and your zodiac sign is ' + horoscope.getZodiac(parseInt(process.argv[2])));
} else {
	console.log('Your spirit name is ' + spiritName.getName());
}

