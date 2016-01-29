
var callTheFunctionPassedToMe = function(callBack){
     callBack();
};

var cupcakePredictor = function() {
     var possibilities = ["cupcakes", "ice cream", "meh", "bananas"];
     var randomIndex = Math.floor(Math.random() * 4);
     return "It will be " + possibilities[randomIndex] + ".";
};

callTheFunctionPassedToMe(cupcakePredictor);



var names = ['Phil', 'Anna', 'Sung', 'Abner', 'Fritz'];
var lLine = ['8th', '6th', 'Union'];

var doSomethingWithEachItem = function(array, callback){
	for (var i = 0; i < array.length; i++) {
		callback(array[i]);  //this is changing the parameter of the function. 
	}
};

var printStop = function(stop) {
	console.log(stop);
};

doSomethingWithEachItem(lLine, printStop);