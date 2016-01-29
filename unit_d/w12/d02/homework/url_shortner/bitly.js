var request = require('request');
bitly = {};

bitly.shorten = function(urlQuery, callback){

	var url = 'https://api-ssl.bitly.com/v3/shorten?access_token=' + KEY + '&longUrl=' + urlQuery;
	
	request(url, function(error, response, body) {
		var data = JSON.parse(body);
		callback(data.data.url);
	});

}

module.exports = bitly;