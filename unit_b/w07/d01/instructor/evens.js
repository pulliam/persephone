// Write a function that creates a sequence of even numbers 

// createEvens(10) // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]


var createEvens = function(length) {
  if (length < 1) return [];

  var results = [2];

  for (var i = 1; i < length; i++) {
    results[i] = results[i -1] + 2;
  }

  return results;
};


var createEvens = function(x){
  var results = [];
  for (var y = 1; y <= x ; y++){
    var z = y * 2;
    results.push(z);
  }
};

var createEvens = function(num) {
  var result = [];
  for (var i = 2; i <= 2 * num; i += 2) {
    result.push(i);
  }
  return result;
};
