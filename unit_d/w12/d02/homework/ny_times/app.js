var nytimes = require('./nytimes.js');

var callback = function(results){
  console.log(results); 
};

nytimes.articleSearch("new+york", callback);