var htmlTagger = require('./html_tagger.js');

// Notice the name of my parameter. How 
// do I know it's going to be data?
htmlTagger.createLis(function(data){
  console.log(data);
  // should log our array of li's! Now 
  // we can do whatever we want with them.
});