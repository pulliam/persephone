var randomUser = require('./random_user.js');
var rhymeBrain = require('./rhyme_brain.js');

// randomUser.get() returns a promise object
// once resolved we can access the user
randomUser.get().then(function(user){
  console.log(user)
})

var promises = Promise.all([rhymeBrain.rhymeP('hello'), rhymeBrain.rhymeP('world')])


// once all the promises are resolved we can access them
promises.then(function(words){
  console.log( words.join(" ") );
});
