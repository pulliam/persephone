// Write a function that returns the Fibonacci Sequence starting with the number 0 up to the length provided as an argument:

var fibonacci = function(length) {
  if (length < 2) return [0];

  var seq = [0, 1]

  for (var i = 2; i < length; i++) {
    seq[i] = seq[i - 2] + seq[i - 1];
  }

  return seq;
};

fibonacci(5) // [0, 1, 1, 2, 3]


// Bonus: Write another fibAt function that returns only the nth number of the sequence where n is the length.

fibAt(5) // 3


// var fibAt = function(n) {
//   return fibonacci(n).pop();
// };


// Let n of 0 corresponds to 0 and n of 1 corresponds to 1.
var fibAt= function(n) {
  var seq = [0, 1];

  for (var i = 2; i < n + 1; i++) {
    seq[i] = seq[i -2] + seq[i - 1];
  }

  return seq[n];
};

 var fibAtRecursive = function(n) {
  if (n === 0) {
    return 0;
  } else if ( n === 1) {
    return 1;
  } else {
    // This looks like the formula for the fibonacci sequence. Neat!
    return fibAtRecursive(n - 2) + fibAtRecursive(n - 1);
  }
 };

var fibAtFixedMemory = function fibAtFixedMemory(num) {
  // This version only ever stores two numbers.
  var seq =[0, 1];
  if (num < seq.length) return seq[num];

  for (var i = 1; i < num; i++) {
    seq = [seq[1], seq[0] + seq[1]];
  };
  return seq[1];
};

// Try out this function measure how long the different versions take to run numbers 0 through 49.
var timer = function() {
  for(var i=0; i<50; i++){
    var start = new Date();
    var result = fibAtRecursive(i); //replace with the version you want.
    var end = new Date();
    time = end - start;
    console.log("n:", i, "time:",time, "millisecs");
  }
};

























