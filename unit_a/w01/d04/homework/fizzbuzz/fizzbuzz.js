
// ### Part 1:
var fizz = number % 3
var buzz = number % 5
var fizzbuzz = number % 3 && number % 5

function fizzBuzzing(number){
	if(fizz === 0){
		console.log('fizz');
	} else if (buzz === 0){
		console.log('buzz');
	} else if (fizzbuzz === 0){
		console.log('fizzbuzz');
	} else {
		console.log(number);
	}
}

// ### Part 2:

var allTheNumberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

for (i=0; i <= allTheNumberz.length; i++){
	var fizz = i % 3;
	var buzz = i % 5;
	var fizzbuzz = i % 3 && i % 5;

	if(fizz === 0){
    	console.log('fizz');
	} else if (buzz === 0){
		console.log('buzz');
	} else if (fizzbuzz === 0){
		console.log('fizzbuzz');
	} else {
		console.log(i);
	}
}

// ### Part 3:

var allTheNumberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];

for (i=0; i <= allTheNumberz.length; i++){
	var fizz = i % 3;
	var buzz = i % 5;
	var fizzbuzz = i % 3 && i % 5;

	if(fizz === 0){
    	console.log('fizz');
	} else if (buzz === 0){
		console.log('buzz');
	} else if (fizzbuzz === 0){
		console.log('fizzbuzz');
	} else {
		console.log(i);
	}
}

// ### Part 4:

// Create a function called `fizzbuzz` that takes in a number and `return`s a string based on the rules of fizzbuzz.

var fizz = number % 3
var buzz = number % 5
var fizzbuzz = number % 3 && number % 5

function fizzBuzzing(number){
	if(fizz === 0){
		console.log('fizz');
	} else if (buzz === 0){
		console.log('buzz');
	} else if (fizzbuzz === 0){
		console.log('fizzbuzz');
	} else {
		console.log(number);
	}
}

// Part 5:

// Using a loop and the `fizzbuzz` function you wrote in Part 4, 
//print out the fizzbuzzed string version of each number from 1 to 200.


for (i=1; i <= 200; i++){
	var fizz = i % 3;
	var buzz = i % 5;
	var fizzbuzz = i % 3 && i % 5;

	if(fizz === 0){
    	console.log('fizz');
	} else if (buzz === 0){
		console.log('buzz');
	} else if (fizzbuzz === 0){
		console.log('fizzbuzz');
	} else {
		console.log(i);
	}
}
