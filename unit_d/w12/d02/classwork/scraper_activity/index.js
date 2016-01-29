var request = require('request');
var cheerio = require('cheerio');

var fetch = function(url) {
	request(url, function (error, response, body) {

  	if (!error && response.statusCode == 200) {
  		var $ = cheerio.load(body);
    	var headlines = $('#top-news .story-heading').map(function(index, el) {
    		return $(el).text();
    	}).get();
    	console.log( Array.isArray(headlines ));
  	}
	})
}

fetch('http://www.nytimes.com');

