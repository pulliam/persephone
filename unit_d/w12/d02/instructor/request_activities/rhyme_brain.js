var request = require('request');

var rhymeBrain = {};
var url = 'http://rhymebrain.com/talk?function=getRhymes&word='

// using a callback
rhymeBrain.rhyme = function(word, callback) {
  request(url + word, function(error, response, body){
    if (!error && response.statusCode == 200) {
      callback( JSON.parse(body)[0].word );
    }
  })
}

// using a promise
rhymeBrain.rhymeP = function(word) {
  var promise = new Promise(function(resolve, reject){
    request(url + word, function(error, response, body){
      if (!error && response.statusCode == 200) {
        resolve( JSON.parse(body)[0].word );
      }
    })
  });
  return promise;
}


module.exports = rhymeBrain;
