
var navi = {};

navi.sayings = ["hey", "look", "listen", "watch out!"];

// This function is intended to log a random phrase from the navi.sayings array 
// once every second, a specified number of times.
navi.pester = function(numTimes) {
  // start the counter off at one!
  var counter = 1;
  // Defining the function that will be repeated. This will be passed as a
  // callback to our setInterval function.
  var bother = function () {
    // If the counter has met or exceeded our threshold, 
    if (counter >= numTimes) {
      // clear the interval (stop the loop)
      global.clearInterval(timerId);
    }
    // Otherwise, increment the counter
    counter++;
    // Grab a random number between 0 and the final index in the sayings array
    var randNumber = Math.floor(Math.random() * this.sayings.length);
    // Log a random saying
    console.log(this.sayings[randNumber]);
  }
  // This is where we create a new function called `boundBother` 
  // that is a copy of `bother`, but BOUND to `this` - in this
  // case, the navi object.
  var boundBother = bother.bind(this);
  // Using the setInterval function to run `boundBother` every second.
  var timerId = global.setInterval(boundBother, 1000);
};

// Invoke the pester function! This should log a phrase to the console 30 times.
navi.pester(30)
