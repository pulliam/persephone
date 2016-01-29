var request = require('request');

rhymeBrian = {};

rhymeBrian.rhyme = function(callback, word) {

	var url = 'http://rhymebrain.com/talk?function=getRhymes&word=' + word
	
	request(url, function (error, response, body) {
		var data = JSON.parse(body);
    	callback(data[1].word); 
  	});

}

module.exports = rhymeBrian;