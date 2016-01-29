
var thermostat = {
  temperature: 85,
  isAirConditionerOn: true
};

if (thermostat.temperature > 80 && thermostat.isAirConditionerOn === false) {
    console.log("Turn the ac on!");
} else if (thermostat.temperature > 80 && thermostat.isAirConditionerOn === true){
	console.log('this thing is broken!');
}  else if (thermostat.temperature < 60 && thermostat.isAirConditionerOn === true){
	console.log('Brrr, turn this thing off');
} else if (thermostat.temperature < 80 && thermostat.isAirConditionerOn === false){
	console.log('Not worth the electricity. Leave it off.');
}

// Test your code using these other thermostat objects.
// Refactor your code so that === is not used.

var thermostat1 = {
  temperature: 85,
  isAirConditionerOn: false
};

var thermostat2 = {
  temperature: 55,
  isAirConditionerOn: true
};

var thermostat3 = {
  temperature: 55,
  isAirConditionerOn: false
};

var thermostat4 = {temperature: 85, isAirConditionerOn: true};


if(thermostat1){
    console.log("Turn the ac on!");
}

if(thermostat2){
	console.log("This thing is broken!");
}

if(thermostat3){
	console.log("Brrr, turn this thing off");
}

if(thermostat4){
	console.log("Not worth the electricity. Leave it off.");
}

//////////////////////////////

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

  //////////////////////////
