//OPTION 1: 
var leetify = require('./leetify.js');
allWords = process.argv.slice(2);  //takes off anything before second index.
allWords.map(leetify.translate);
//This option is tricky because it's still an array so the results will be line by line
//and not an entire sentence. Can be useful though!


//OPTION 2:
var leetify = require('./leetify.js');
allWords = process.argv.slice(2).join(' ');  //takes off anything before second index.
//With the "join", I make what was an array before into a big string! (argv is an array)
//So now I can translate the entire thing!
leetify.translate(allWords);

