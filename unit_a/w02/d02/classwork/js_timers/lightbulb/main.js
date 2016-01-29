var backgroundDiv = document.querySelector('.background');
var h1Tag = document.querySelector('h1');

var lightOn = function(){
	backgroundDiv.classList.add('on');
}

var lightOff = function(){
	backgroundDiv.setAttribute('class', 'background');
}

var glowIt = function(){
	h1Tag.classList.add('glow');
}

var switchLamp = function(){
	backgroundDiv.classList.toggle('on');  //TOOGLE is like a switch. Predicts for you the state of it (if on is a class or not. and if not, adds it.)
};

var sayHi = function(){
	window.alert('Oh hello! I didnt see you there!');
}

var sayHiTimerId = window.setTimeout(sayHi, 2000);


// #### Mini-challenges!

// **10 mins**

// ##### Challenge 1:

// 1. Write a function that will "turn on the light" 2 seconds after you refresh your page.
// -  1 second after you refresh your page, give the `h1` tag a class of 'glow’.

var turnItOn2secs = window.setTimeout(switchLamp, 2000);

var oneSecondforGlow = window.setTimeout(glowIt, 1000);

// var repeatedHiPopUp = window.setInterval(sayHi, 1000); //this repeats the function every 1 second!!
// window.clearInterval(repeatedHiPopUp); 

// var counterThatRepeatsAFewTimes = 0;

// var sayHelloEvery3Seconds = function(){
// 	if (counterThatRepeatsAFewTimes < 5){
// 		counterThatRepeatsAFewTimes++;
// 		window.alert('Oh hello! This alert already showed ' + counterThatRepeatsAFewTimes + ' times!');
// 	} else {
// 		window.clearInterval(counterThatRepeatsAFewTimesID);
// 	}
// };

// sayHelloEvery3Seconds()   //then I call the function!

// var counterThatRepeatsAFewTimesID = window.setInterval(sayHelloEvery3Seconds, 500);

//var lightFlicker = window.setInterval(switcher, 1000)
