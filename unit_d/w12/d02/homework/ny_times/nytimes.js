var request = require('request');

nytimes = {};

nytimes.articleSearch = function(searchQuery, callback){

var url = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=' 
+ searchQuery + '=&sort=newest&api-key=' + KEY;

	request(url, function (error, response, body) {
		var data = JSON.parse(body);
      	callback(data.response.docs[0].snippet); 
  });

}

module.exports = nytimes;