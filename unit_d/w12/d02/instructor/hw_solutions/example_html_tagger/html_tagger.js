// We'll need to require the 'fs' module...
var fs = require('fs');
// and the 'path' module.
var path = require('path');

// Our example will read in a JSON file
// and return an array of HTML tags.
var htmlTagger = {};

// Defining our function to take a callback later
htmlTagger.createLis = function(callback) {
  // The method below will give us the right path 
  // to our json file no matter where it's being
  // run from!
  var pathToJsonFile = path.join(__dirname, 'list_items.json');
  // Read in the data
  fs.readFile(pathToJsonFile, 'utf8', function(err, data){
    if (err) { throw err; }
    var parsed = JSON.parse(data);
    var tagged = parsed.map(function(element){
      return '<li>' + element + '</li>';
    })
    // Pass along our array of li's
    callback(tagged);
  });
};

module.exports = htmlTagger;