// PROBLEM SOLVING:

// ABBID - Always be breakin' it down
// Draw things out!
// THERE IS LITERALLY NO RIGHT ANSWER.
// READ THIS. http://www.stilldrinking.org/programming-sucks

//        *--------*
//        |  MTA!  |
//        *--------*

// --------- Data ---------

// How should we best format our data? Let's spitball. What will we be doing with it? How do we want to interact with it?

// --------- Logic ---------

// What's our feature list? What do we need to do? Take it one step at a time.

// -- List all the lines: How could we do this?


var thisLines = function() {
  // woo
  console.log(myArrayOfLinesWooo);
};


// -- List all the stations on one line: Let's start with a hard-coded line and then look at it and think about how we could make it reusable.

// -- Calculate the distance between two different stops.
// This is the real "meat and potatoes" of this assignment. What do we need to figure out? What smaller tasks can we break this down into? Make a list.

// 1. Let's find the distance between two stops ON THE SAME LINE first.

// 2. Once we figure that out, how can our code change to figure out the distance between stops on two separate lines?

// -- Alert the user if they make a mistake: Now we can go back and add logic to check and see if the user gave us what we were expecting. Check your most basic assumptions! Where in our code does it make sense to check?


// --------- Test it Out! ---------

// Let's try out our code! Try writing some tests (don't overthink this) at the end of your file and play around in the console testing your assumptions.

// --------- Bonus ---------

// Add the Q line. How would we approach this? First off, does our code work with a new line the way it is now? Why or why not? What would we have to change to make this happen?

// ANNA'S SOLUTION

// Made an object that contained arrays - I want to be able to iterate through my stops, but I want to grab my train lines by name. I also wanted to organize my data into a single container.
var trainData = {
  nLine: [
    "times square",
    "34th",
    "28th",
    "23rd",
    "union square",
    "8th"
  ],
  lLine: [
    "8th",
    "6th",
    "union square",
    "3rd",
    "1st"
  ],
  sixLine: [
    "grand central",
    "33rd",
    "28th",
    "23rd",
    "union square",
    "astor place"
  ],
  qLine: [
    "times square",
    "herald square",
    "union square",
    "canal st"
  ]
}

var listAllLines = function() {
  // Just grab all the names of my lines and return them
  // get my object's keys
  var keysAndStuff = Object.keys(trainData);
  // loops over array of key names
  for (var i = 0; i < keysAndStuff.length; i++) {
    console.log(keysAndStuff[i]);
  }
  // log each
  return Object.keys(trainData);
};

var listStops = function(line) {
// if (line is l) {
//   spit out the l stops
// } else if (line is n) {
//   spit out n stops
// } // etc

  // Find the key in my object and return its value (an array of stops, how convenient)
  return trainData[line];
  // instead of return the array, loop over it & console.log
};

// Broke out this logic into its own function to make my code easier to read
var tripInfoIsValid = function(tripInfo) {
  // Check to see if we were given trip info:
  if (!tripInfo) {
    console.log("Trip Info missing!");
    return false;

  // Check to see if we have all the properties we need:
  } else if (!tripInfo.firstLine || !tripInfo.firstStop || !tripInfo.secondStop || !tripInfo.secondStop) {
    console.log("Trip info formatted incorrectly.");
    return false;

  // Are the first and second lines in my trainData object??
  } else if (!trainData[tripInfo.firstLine] || !trainData[tripInfo.secondLine]) {
    console.log("Check the spelling of lines");
    return false;

  // Check to see if my stops exist on the lines I was given:
  } else if (trainData[tripInfo.firstLine].indexOf(tripInfo.firstStop) < 0 || trainData[tripInfo.secondLine].indexOf(tripInfo.secondStop) < 0) {
    console.log("Check the spelling of stations");
    return false;

  // If we reach this branch - looks like my data is good to go! 
  } else {
    return true;
  }
};


var calculateDistance = function(tripInfo) {
  // check for user error
  if (!tripInfoIsValid(tripInfo)) {

    // Giving the user an example of the right way to communicate with my program:
    console.log('Please include an object with information about your trip. Example:\n {\n  firstLine: "lLine",\n  firstStop: "union square",\n  secondLine: "lLine",\n  secondStop: "1st"\n}');
    return false;

  // figure out if stops are on the same line
  } else if (tripInfo.firstLine === tripInfo.secondLine) {

    var stationsArray = listStops(tripInfo.firstLine);

    // if so, get the absolute val of the difference between them
    var firstStopIndex = stationsArray.indexOf(tripInfo.firstStop);
    var secondStopIndex = stationsArray.indexOf(tripInfo.secondStop);
    
    return Math.abs(firstStopIndex - secondStopIndex);
  
  // if not, find distance of each to union square:
  } else {
    var firstStationsArray = listStops(tripInfo.firstLine);
    var secondStationsArray = listStops(tripInfo.secondLine);

    // Get the index of each station...
    var firstStopIndex = firstStationsArray.indexOf(tripInfo.firstStop);
    var secondStopIndex = secondStationsArray.indexOf(tripInfo.secondStop);

    // Get the index of each line's Union Square station since that's where they'll have to transfer
    var firstUnionIndex = firstStationsArray.indexOf("union square");
    var secondUnionIndex = secondStationsArray.indexOf("union square");

    // Get the distance between each stop and its Union Square station
    var distance1 = Math.abs(firstStopIndex - firstUnionIndex);
    var distance2 = Math.abs(secondStopIndex - secondUnionIndex);

    // Return these added together! WOO!
    return distance1 + distance2;
  }
};


// I'm gonna give my user instructions when the page loads:
console.log("Welcome, internet user! To begin, type:\n\n listAllLines();\n listStops(\"lineName\");\n -- or --\n calculateDistance();")
