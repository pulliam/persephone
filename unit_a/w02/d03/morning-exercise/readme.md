# Map/Reduce/Filter

Map, Reduce, and Filter are methods that we can call on Arrays. 
They work by performing an action upon each element in a list.  
This is accomplished by passing a callback function to the method as an argument.

- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 

Let's say we want to double each number in the array below.

```js
var numbers = [1, 2, 3];

// We can create a function that will take a number as input and return that number doubled as output.
var double = function(n) {
  return n * 2;
}

// By passing that function as a callback to `.map` the function is performed on each item in the array and the transformed array is returned.
var doubledNumbers = numbers.map(double);
```

Let's say we want to take all the numbers in an array and combine them in some way.

```js
var numbers = [1, 2, 3];

// We can create a function that takes two numbers as inputs and returns the sum of those numbers as output.

var sum = function(a, b) {
  return a + b;
}

// .reduce behaves differently than .map. It takes two elements in the array at a time, and holds on
to the previous value. Another way to think of it is folding all items onto themselves.

var summedNumbers = numbers.reduce(sum);
```

Let's practice with some more complex data.

```js
// Say we had an array of exGirlfriend objects and wanted to calculate the average length of a relationship.

// We'd want to take each object, get the `lenghtInYears` property, turn that into a number, sum them and then divide that by total number of exGirlfriends.

var exGirlfriends = [
  {name: 'Winnie', lengthInYears: '5'},
  {name: 'Emily', lengthInYears: '2'},
  {name: 'Eliz', lengthInYears: '1'},
  {name: 'Beth', lengthInYears: '4'}
];

// This function takes an exgirlfriend object, gets the year property and converts it into a number

var pluckYear = function(exGirlFriend){
  return parseInt(exGirlFriend.lengthInYears);
}

// This is the same function we used before to reduce numbers, just with different names for the parameters. 

var sum = function(memo, next){
  return memo + next;
}

// First we create an array of years, then we add them together, then we divide by the lenght of the array.

var avgWastedYears = exGirlfriends.map(pluckYear).reduce(sum)/exGirlfriends.length;

console.log( avgWastedYears );
```

This above was written "chained" together because each method returns data that the next method is called on, but we can also write it out step by step:

```js
var years = exGirlfriends.map(pluckYear);
var totalWastedYears = years.reduce(sum);
var avgWastedYears = totalWastedYears/exGirlfriends.length;
```

Let's say we had more data and could separate it out by another property.

Take a look at JavaScript's filter and see if you can calculate the different averages for living together versus not living with your girlfriend.

```js
var exGirlfriends = [
  {name: 'Winnie', lengthInYears: '5', didLiveTogether: true},
  {name: 'Emily',  lengthInYears: '2', didLiveTogether: false},
  {name: 'Eliz',   lengthInYears: '1', didLiveTogether: false},
  {name: 'Beth',   lengthInYears: '4', didLiveTogether: true}
];
```

# Now 

Shape up agent! 

See if you can apply any of this hard won knowledge to your [next mission](bond.md).

