var backgroundDiv = document.querySelector('.background');
var h1Element = document.querySelector('h1');

// Write a function that will add a class of "on" to the backgroundDiv
var turnOn = function(){
  backgroundDiv.classList.add('on');
};

// Write a function that will turn off the lights again.
var turnOff = function(){
  backgroundDiv.classList.remove('on');
};

// Write a function that will either turn your light on OR off, depending on its current state
var flipTheSwitch = function(){
  backgroundDiv.classList.toggle('on');
};
// Write a function that will add a class of `glow` to your `h1` header.
var addGlow = function() {
  h1Element.classList.add('glow')
};

var sayHi = function() {
  window.alert('Oh hello! I didn\'t see you there.');
};

// sayHi();

var sayHiTimerId = window.setTimeout(sayHi, 3000);

// window.clearInterval(sayHiTimerId);

// var turnItOn2secs = window.setTimeout(flipTheSwitch, 2000);

// var oneSecondforGlow = window.setTimeout(addGlow, 1000);

// var sayHiOmgId = window.setInterval(sayHi, 3000);
// window.clearInterval(sayHiOmgId);

var annoyanceCounter = 0;

var askIfThereYet= function() {
  if (annoyanceCounter < 4) { 
    annoyanceCounter++;
    window.alert("Are we there yet? I've only asked " + annoyanceCounter + " times!");
  } else {
    console.log("I'M STILL HEEE-EERRRE");
    window.clearInterval(annoyingTimerId);
  }
};

// var annoyingTimerId = window.setInterval(askIfThereYet, 500);

var lightFlicker = window.setInterval(flipTheSwitch, 500);
var timerOff = function (timerId) {
    window.clearInterval(timerId);
};








