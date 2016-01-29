var toPigLatin = require('./to_pig_latin.js');

var string = process.argv.slice(2).join(" ");
var pigLatinString = toPigLatin(string);
console.log(pigLatinString);
