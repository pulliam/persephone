
var leaders = [
  {
    first_name: "Barack",
    last_name: "Obama"
  },
  {
    first_name: "Angela",
    last_name: "Merkel"
  },
  {
    first_name: "Vladimir",
    last_name: "Putin"
  }
];

function fullNames(array){
  return array;
}

leaders.map(fullNames);



// 1) Use the Array#map method to iterate over the collection below, outputting an array of 
//full names for the leaders, i.e. `["Barack Obama", "Angela Merkel", "Vladimir Putin"]`.

// Assign the resulting array to the variable `fullNames`.
// Do this with an anonymous function first, and then a named one.

// 2) Now use the Array#map method to return an array with all of the names in all caps.

// 3) Now use the Array#forEach method to scream those all caps names out to the console.

// ## SNL Actors

// ```
var snlActors = [
  {
    name: "Adam Sandler",
    movies: ["Happy gilmore", "Billy madison", "The waterboy"],
    age: 40,
    stillFunny: false,
    alive: true
  },
  {
    name: "Chris Rock",
    movies: ["Dogma", "Madagascar", "Bee Movie"],
    age: 50,
    stillFunny: true,
    alive: true
  },
  {
    name: "David Spade",
    movies: ["Joe dirt", "Black Sheep", "Tommy Boy"],
    age: 48,
    stillFunny: false,
    alive: true
  },
  {
    name: "Kristin Wiig",
    movies: ["Bridesmaids", "Her", "Girl Most Likely" ],
    age: 41,
    stillFunny: true,
    alive: true
  },
  {
    name: "Chris Farley",
    movies: ["Black sheep", "Tommy boy", "Beverley Hills Ninja"],
    age: 33,
    stillFunny: false,
    alive: false
  },
  {
    name: "John Belusci",
    movies: ["The Blues Brothers", "Animal House"],
    age: 33,
    stillFunny: false,
    alive: false
  }
];
// ```

// 1) Use Array#map to create an array containing all the comedians' names.
// 2) Use Array#map to create a two-level nested array of all the movies the SNL actors have been in.
// 3) use Array#forEach or Array#reduce to find the total age of all these SNL actors
// 4) use Array#filter to create an array of all living SNL actors
// 5) use Array#filter to create an array of all living and still funny SNL actors.

// ## Bonus

// 1) Rewrite the forEach method from scratch.
// ```
// /*
//  * Method Signature:
//  * @param {Array} array
//  * @param {function(currentValue, index, array)} callback
//  */

// // example call
// forEach([1,2,3], function(item, index){
//   console.log('At index', index, 'is', item);
// });
// ```
// 2) Rewrite the map method from scratch.
// ```
// /*
//  * Method Signature:
//  * @param {Array} array
//  * @param {function(currentValue, index, array)} callback
//  * @return {Array}
//  */

// // example call
// map([1,2,3], function(el, index, array){
//   return el + 2;
// }); // returns [3, 4, 5]
// ```
// 3) Rewrite the filter method from scratch.
// ```
// /*
//  * Method Signature:
//  * @param {Array} array
//  * @param {function(currentValue, index, array)} callback
//  * @return {Array}
//  */

// // example call
// filter([1,2,3], function(el, index, array){
//   return ((el + index) % 2) === 0;
// }); // returns []
// ```
