
// requiring the the exported object defined in the module file
var leet = require('./leet_simp.js');
// var leet = require('./leet_complex.js');

// Grabs our command and saves it to the command variable
var command = process.argv[2];
// Grabbing all words after the first three in the argv array 
// and joining them into a single string
var input = process.argv.slice(3).join(' ');

// Change what the program does based on the command given
switch (command) {
  case "encode":
    console.log(leet.translate(input));
    break;
  case "decode":
    console.log(leet.decode(input));
    break;
  default:
    console.log("Error - please tell me to `encode` or `decode`!");
}