var bitly = require('./bitly.js');

bitly.shorten('http://www.nytimes.com', function(link){
  console.log(link);
})