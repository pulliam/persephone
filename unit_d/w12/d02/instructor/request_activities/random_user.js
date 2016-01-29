var request = require('request');

var randomUser = {};

var url = 'https://randomuser.me/api/'

randomUser.get = function(callback){
  // make a requst to randomuser api
  request(url, function(error, response, body){
    // parse the response as JSON
    var data = JSON.parse(body);
    callback(data.results[0].user);
  });
}

randomUser.getP = function(){
  var promise = new Promise(function(resolve, reject){
    request(url, function(error, response, body){
      var data = JSON.parse(body);
      resolve(data.results[0].user);
    });
  });
  return promise;
}

module.exports = randomUser;
