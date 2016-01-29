// Super Saiyans!

// 1. Create a new object. Give it a `name` property with a 
// value of "Vegeta" and a `powerLevel` of 700. Save it to a 
// variable called `vegeta`.
var vegeta = {
  name: "Vegeta",
  powerLevel: 700
};


// 2. Add the method `assessPowerLevel` to the `vegeta` object. 
// This method should return `this.name + "'s Power Level: " 
// + this.powerLevel`, unless the power level is greater than 9000. 
// In that case, simply return the string `"IT'S OVER NINE THOUSAND!!"` 
vegeta.assessPowerLevel = function() {
  if (this.powerLevel < 9000) {
    console.log(this.name + "'s Power Level: " + this.powerLevel);
  } else if (this.powerLevel) {
    console.log("IT'S OVER NINE THOUSAND!!");
  } else {
    console.log("What")
  }
};
// Test out your object's properties and method.
console.log(vegeta.name);
console.log(vegeta.powerLevel);
vegeta.assessPowerLevel();

// 3. Now, create a new object with a name of "Goku" and a power level 
/// of 9001. Save it to a variable named `goku`.
var goku = {
  name: "Goku",
  powerLevel: 9001
};

// 4. This is where things get interesting! 
// Set `goku.assessPowerLevel = vegeta.assessPowerLevel`. 
goku.assessPowerLevel = vegeta.assessPowerLevel;
// Invoke the function and see what happens.
goku.assessPowerLevel();


// 5. Now create a variable `lonelyPowerLevel = vegeta.assessPowerLevel`. 
var lonelyPowerLevel = vegeta.assessPowerLevel;

// What happens when you invoke this function? 
lonelyPowerLevel();

// 6. Create a variable called 
// `boundPowerLevel = vegeta.assessPowerLevel.bind(vegeta)`. 
var boundPowerLevel = vegeta.assessPowerLevel.bind(vegeta);
//What happens when you invoke this? Why?
boundPowerLevel();

// 7. Try this out: `boundPowerLevelTwo = vegeta.assessPowerLevel.bind(goku)`. 
var boundPowerLevelTwo = vegeta.assessPowerLevel.bind(goku);
//What happens when you invoke this? Why?
boundPowerLevelTwo();
