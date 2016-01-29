var nytimes = require('./nytimes.js');

nytimes.fetch('http://www.nytimes.com', function(headlines){
  headlines.forEach(function(line){
    console.log(line);
  });
});
