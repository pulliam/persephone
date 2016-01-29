console.log("1. Obtain ingredients: Peanut butter, jelly, 2 slices of bread");
console.log("2. Using a knife, spread peanut butter on one side of one slice");
console.log("3. Using a knife, spread jelly on one side of one slice");
console.log("4. Match two slices of bread together (peanut butter facing jelly)");
console.log("5. Cut in half if desired");

var greetingFunction = function(name){
	return "your name is " + name + ". Thanks so much and welcome!"
}

var knighterFunc = function(name){
	return "SIR " + name.toUpperCase();
}

var nameThais = function(name){
	if (name === 'thais' || name === 'Thais'){
		return "Cool name!"
	} else {
		return name + " is not as great as Thais. Go get a new name!"
	}
}

// > - Write a function called `screamer` that will take a name, convert it to uppercase, and return the sentence 
//"HELLO NAME YOU LOOK NICE TODAY"

function screamer(name){
	return "HELLO " + name.toUpperCase() + " YOU LOOK NICE TODAY";

}

// > - Write a function called `eightBall` that will take a piece of data and return `true` or `false` 
//depending on the data's truthy or falsy value.

eightBall = function(data){
    if (data) {
		return 'true';
	} else {
		return 'false';
	}
};

eightBall(data);

// > - Refactor your air conditioner code into a function that takes a temperature and a 
//boolean and returns the correct answer. Original instructions:

// > ## The Thermostat
// > Write an function that uses an if/else statement to evaluate the `temperature` and `isAirConditionerOn` properties of
// the `thermostat` object.
// >
// > Make sure you **define** your function to accept a object as an argument!

// Test your code using these other thermostat objects.
// Refactor your code so that === is not used.


var thermostat4 = {temperature: 85, isAirConditionerOn: true};

	function thermoFunc(x, y){
		if (x > 80 && y === false) {
    		console.log("Turn the ac on!");
		} else if (x > 80 && y === true){
			console.log('this thing is broken!');
		}  else if (x < 60 && y === true){
			console.log('Brrr, turn this thing off');
		} else if (x < 80 && y === false){
			console.log('Not worth the electricity. Leave it off.');
		}
    }
