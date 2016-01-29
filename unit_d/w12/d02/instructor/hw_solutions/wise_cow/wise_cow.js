var fs = require('fs'); 
var cowsay = require('cowsay');

var cowWisdom = JSON.parse(fs.readFileSync('./wisdom.json', 'utf8'));
var randomIndex = Math.floor(Math.random() * cowWisdom.length);

var text = cowWisdom[randomIndex];

console.log(cowsay.say({text: text}));