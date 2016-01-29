// Write a conditional statement that prints "fizz" if the number 
// is divisible by 3, 
//"buzz" if the number is divisible by 5, 
// "fizzbuzz" if the number is divisible by both 3 and 5, 
// and the number itself if divisible by neither 3 or 5. 
// Assume that there is a variable called number.

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

// Part 2:
// Rewrite the conditional statement from Part 1, 
// so that instead of using a variable called number, 
// you are looping through the entire allTheNumberz array and printing 
// the proper string for each element of the array.

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

// Part 3:
// Refactor you code from Part 2 so that it can handle the allTheNumberz 
// array no matter how many items are in it. Test your code by editing the size 
// of the allTheNumberz array.
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