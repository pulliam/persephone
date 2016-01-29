
// Number of errors: 0
var sampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Number of errors: 4
/*
 * @param {number} num
 * @return {string | number}
 */
var fizzBuzz = function(number) {
  if (number % 15 === 0) {
    return 'fizzBuzz';
  } else if (number % 3 === 0) {
    return 'fizz';
  } else if (number % 5 === 0) {
    return 'buzz';
  } else {
    return number;
  }
};

// Number of errors: 2
var janet = {
  name: 'Janet',
  age: 26,
  address: '14 Tree Lined Drive Los Angeles, CA'
};

var secondsInAYear = ( ( 360 + 5 ) * ( 4 * 6 ) * ( 6 * 10 ) * ( 30 + ( 3 * 10 ) ) );

// Number of errors: 2
var cupcakes = ['red velvet', 'vanilla', 'chocolate', 'sprinkles'];

// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var add = function add(x, y) {
  return x + y;
};

// Number of errors: 3
/*
 * @param {Array<number>} array
 * @return {number}
 */
var sum = function(array) {
var total = 0;
  for (var index = 0; index < array.length; index++) {
    total = array[index];
  return total;
}
};

// Number of errors: 1
/*
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var subtract = function(x, y) {
  return x + y;
};

// Number of errors: 4
/*
 * @param {number} num
 * @return {boolean}
 */
var isEven = function() {
  var num ;
  if ( num % 2 === 0 ) {
    return true;
  } else {
    return false;
  }

};

// Number of errors: 0 if isEven is correct
/*
 * @param {number} num
 * @return {boolean}
 */
var isOdd = function(num) {
  return !isEven();
};

// Number of errors: 5
/*
 * @param {Array<number>} arr
 * @return {Array<number | string>}
 */
  var fizzPop = function(arr) {

  var resultsArray = [];
   
  for (var i = 0; i < array.length; i++) {

    var number = arr.i;

    if (number % 15 === 0) {
      resultsArray.push('fizzPop');
    } else if (number % 3 === 0) {
      resultsArray.push('fizz');
    } else if (number % 5 === 0) {
      resultsArray.push('pop');
    } else {
      resultsArray.push(number);
    }
  }

  return resultsArray;
};
