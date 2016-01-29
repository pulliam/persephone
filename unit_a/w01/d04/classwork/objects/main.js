// In your main.js file declare a variable called 'lovers' and assign it 
// to an array with the names of Paul Simon's wives.

// Loop through the array and console.log each name.

var lovers = [
	'Edie Brickell', 
	'Carrie Fisher', 
	'Peffy Harper'
];

for (var i=0; i<lovers.length; i++){
	console.log(lovers[i]); 
}


//INSTEAD OF DECLARING MANY VARIABLES:
var name = 'Tom Petty';
var heigthInInches = 69;
var bornOn = 'October 20, 1950';
var instrument1 = 'vocals';
var nstrument2 = 'guitar';

//WE CAN JUST ASSIGN 1 VARIABLE ONLY, AND MAKE A HASH(CALLED OBJECT IN JAVASCRIPT):
var emptyTom = {};

//AND THEN WE CAN ADD MANY ELEMENTS INTO THE OBJECT, AND THEY WILL ALL BE INSIDE ONE
//VARIABLE ONLY. WHICH IS EASIER AND GREAT! :
var tomPetty = {
	name: 'Tom Petty',
	heigthInInches: 69,
	bornOn: 'October 20, 1950'
	intruments: ['vocals', 'guitar']
}


// IF I TYPED "tomPetty" IN THE CONSOLE, IT WOULD RETURN THIS:
// Objectc {name: 'Tom Petty', heigthInInches: 69, bornOn: 'October 20, 1950'}

//and then to access an item of the object, we do this:

tomPetty.name
//OR
tomPetty['name']
//notice that if I'm using the square way of getting the element, I need to use quote marks


var number = {}
numbers[1] = "a" //first option to assign a new key to the object
numbers >>> {1: "a"}
numbers['one'] = "b"
numbers >>>> {1: "a", one: "b"}
numbers.1 = "a"  //second option to assign a new key to the object


Objects.keys(tomPetty) ///this is how to see all keys of the object, as it comes up
//without it's values, just the keys, and as an array! :
>>> ["name", "heigthInInches", "bornOn", "intruments"]

Array.isArray(tomPetty.intruments)  //how to check if something is an array
>>> true

//Array is a function pre coded in javascript. Usually those functions
//start with a capital letter like: Math. Array. etc....






























