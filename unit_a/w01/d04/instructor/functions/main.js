// console.log("Main.js is linked!!!!");

// var longGreeting = "Hello! Welcome to WDI Persephone, it's not as hot in here anymore. NOW GET OUT";

// console.log(longGreeting);
// console.log("AGAIN: " + longGreeting);
// console.log("AND AGAIN: " + longGreeting);

// Write out & console.log 5 steps to create a peanut butter and jelly sandwich

// Training day:

// console.log("Get two pieces of bread. Toast them if you're into that.");
// console.log("Spread creamy peanut butter on one slice. Do not use crunchy, are you an animal?");
// console.log("Spread grape jelly on second slice");
// console.log("Put both slices of bread together such that spread peanut butter and jelly are on the inside");
// console.log("Cut that disgusting crust off (optional)");
// console.log("Give sandwich to Anna");

// var giveMeASandwich = function() {
//     console.log("Get two pieces of bread. Toast them if you're into that.");
//     console.log("Spread creamy peanut butter on one slice. Do not use crunchy, are you an animal?");
//     console.log("Spread grape jelly on second slice");
//     console.log("Put both slices of bread together such that spread peanut butter and jelly are on the inside");
//     console.log("Cut that disgusting crust off (optional)");
//     console.log("Give sandwich to Anna");
// };

// var myFunc = function(param1, param2){
//   //do something with param1 & param2
//   return "something";
// }

var greetingFunction = function(name){
  return "Your name is " + name + ". THANKS SO MUCH AND WELCOME."
}

// define a function, knighter, that takes a name and returns it after being knighted. IE "Sir Anna"
// STEP TWO: Return "SIR ANNA" in uppercase!!
var knighterFunc = function(name){
    return "SIR " + name.toUpperCase();
}

var nameJudger = function(name){
    // if name is your name, return "great name"
    // otherwise return "consider a different name"
    name = name.toUpperCase();
    if (name === "FRANCES") {
        return "great name";
    } else {
        return "consider a different name";
    }
}

// Thermostat Checker Mach 1

var checkThermostat = function(thermostatObj){
  // DO STUFF
  // check temperture - if temp is > 80 & ac is off, log "TURN ON THE AC"
  if (thermostatObj.temperature > 80 ){
    if (thermostatObj.isAirConditionerOn) {
      return "This thing is broke";
    } else {
      return "TURN THE AC ON FOR CRYING OUT LOUD.";
    }
  } else if (thermostatObj.temperature < 60 && thermostatObj.isAirConditionerOn){
    return "It's so cold. Turn off the AC plz";
  } else {
    return "It's so nice, not worth turning on the AC." 
  }
};

var puppies = {
  temperature: 90,
  isAirConditionerOn: true
}




















