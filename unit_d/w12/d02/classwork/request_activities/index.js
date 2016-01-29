var randomUser = require('./random_user.js');
var theySaidSo = require('./they_said_so.js');
var rhymeBrian = require('./rhyme_brian.js')
var randomUser = require('./random_user.js');

///////////////////////////////////////

callback1 = function(user){
  console.log(user.gender);  
};

randomUser.get(callback1);

///////////////////////////////////////

callback2 = function(word){
	console.log(word);
}

rhymeBrian.rhyme(callback2, "outch");

///////////////////////////////////////

callback3 = function(quote){
	console.log(quote.advice);
}

theySaidSo.quoteOfTheDay(callback3);

///////////////////////////////////////



///////////////////////////////////////