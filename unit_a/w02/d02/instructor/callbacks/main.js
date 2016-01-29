console.log("linked main.js");

// What does it mean that
// a function is 'just data'?

// We can define unique functions.
// A function can be referenced by a variable.
// A function can be assigned to a variable.
// You can pass a function into another function.
// You can store functions like other data, e.g.
// in an array or an object.

// How do you invoke or call
// a function?

// With Parantheses, e.g. myFunction().

// What is the difference
// between a function
// and a method?

// All methods are functions
// but not all functions are methods.
// Methods are functions defined on objects.

// What do you think a
// function/method signature
// is?


var phil = {
  'checkIfThereIsBeer': function(kegs){
      if (kegs) {
        return true;
      } else {
        return false;
      }
  }
};

phil.goToParty = function(){
  console.log('Let\'s go party, yo!');
};

phil.drainTheLizard = function() {

};

// console.log('phil:', phil);


// Write a function that accepts another
// function and calls that passed in function.

var callTheFunctionPassedToMe = function(functionPassedToMe) {
  functionPassedToMe();
};

var callTheFunctionPassedToMe = function(callberk) {
  callberk();
};

var cupcakePredictor = function() {
  var possibilities = ['cupcakes', 'meh', 'bananas', 'ice cream'];
  var randomIndex = Math.floor(Math.random() * 4);

  return 'It will be ' + possibilities[randomIndex] + '.';
};


callTheFunctionPassedToMe(cupcakePredictor);

var consoleLogTheReturn = function(callback) {
  console.log('I\'m doing work inside of here');
  console.log('No, I really am. I swear');

  if (typeof callback !== 'function') return;

  console.log('This was the return value:', callback());
};

consoleLogTheReturn(cupcakePredictor);



var names = ['Phil', 'Anna', 'Sung', 'Abner', 'Fritz'];

var doSomethingWithEachItem = function(array, callback) {
  for (var i = 0; i < array.length; i++) {
    callback(array[i], i, array); // elements. length & indexes. array.
  }
};

var printStop = function(goblidygook) {
  console.log(goblidygook);
};

var lLine = ['8th', '6th', 'Union'];
// doSomethingWithEachItem(lLine, printStop);
// doSomethingWithEachItem(names, printStop);

/*
 * @param {string} name
 * @param {string} number
 * @param {function()} me
 */
var callMeMaybe = function(name, number, me) {
  if (name.length === 4) {
    me(name, number);
  }
};

var meCallback = function (name, number){
 console.log('Dialing', number);
 console.log('Hey,', name);
};

callMeMaybe('Douglas', '72453635679', meCallback);
callMeMaybe('Doug', '12345558435', meCallback);


var names = ['Phil', 'Anna', 'Sung', 'Abner', 'Fritz'];
var printStop = function(currentValue) {
  console.log(currentValue);
};
names.forEach(printStop);

var numbers = [1,2,3,4];
var addTwo = function(num) {
  return 'num + 2;'
};
var newNumbers = numbers.map(addTwo);
console.log(newNumbers);













































































































