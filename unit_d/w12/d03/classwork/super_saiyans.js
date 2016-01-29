 var vegeta = { name: "Vegeta", powerLevel: 700 };

 vegeta.assessPowerLevel = function() {
 	if (this.powerLevel < 9000){
 		console.log(this.name + "'s Power Level: " + this.powerLevel);
 	} else if (this.powerLevel > 9000) {
 		console.log("IT'S OVER NINE THOUSAND!!");
 	} else {
 		console.log('WARNING: This is not an object with a powerLevel!');
 	}
 }

 vegeta.assessPowerLevel();

///////

 var goku = { name: "Goku", powerLevel: 9001 }; //goku is an object

 goku.assessPowerLevel = vegeta.assessPowerLevel;
 
 goku.assessPowerLevel(); //therefore, this will have a result

///////

var lonelyPowerLevel = vegeta.assessPowerLevel; //This is not an object 

lonelyPowerLevel(); //wont return a result.

//////

var boundPowerLevel = vegeta.assessPowerLevel.bind(vegeta); //Im binding a previous object to this

boundPowerLevel(); //So it will return a result from assessPowerLevel function, using the 
//object vegeta that it was just binded to it.

//////

boundPowerLevel = vegeta.assessPowerLevel.bind(goku);

boundPowerLevel(); //It will return a different result because Im reassigning the variable to a 
//diferent object (called goku) through the .bind()

///////