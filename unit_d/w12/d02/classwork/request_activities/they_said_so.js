var request = require('request');

theySaidSo = {};

theySaidSo.quoteOfTheDay = function(callback) {

	var url = 'http://api.adviceslip.com/advice'
	
	request(url, function (error, response, body) {
		var data = JSON.parse(body);
    	callback(data.slip); 
  	});

};

module.exports = theySaidSo;