var request = require('request');

randomUser = {};

var url = 'https://randomuser.me/api/'

randomUser.get = function(callback){

	request(url, function (error, response, body) {
		var data = JSON.parse(body);
      callback(data.results[0].user); 
  });

}

module.exports = randomUser;
