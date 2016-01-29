var request = require('request');
var cheerio = require('cheerio');

var nytimes = {};

nytimes.fetch = function(url, callback) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // create a DOM
      var $ = cheerio.load(body);
      // https://github.com/cheeriojs/cheerio#map-functionindex-element-
      // map through nodes to get text
      var headlines = $('#top-news .story-heading').map(function(index, el){
        // get text and remove white space
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
        return $(el).text().trim();
      // get the array
      }).get();
     callback(headlines);
    }
  });
};

module.exports = nytimes;
