//This is the bonus part. 
//I pseudocoded only the differences between the mta.js code
//Lets see:

var metro = { 
            N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
            L: ["8th", "6th", "Union Square", "3rd", "1st"],
            6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};


metro["Q"] = ['Times Square', 'Herald Square', 'Union Square', 'Canal St']; //Added a new key "Q" into my metro object with an array as it's property containing the stops.

var tripInfo = {
  firstLine: "L",
  firstStop: "Union Square",
  secondLine: "Q",
  secondStop: "Times Square"
};

function calculateDistance(tripInfo) {
    var intersection = "Union Square";
    var intersection2 = "Times Square"
    var lineIn;
    var lineOff;
    var allLines = []; //create a new array to put all lines in it, so its easier to run the code that will output the error message if syntax is woring (drying the code a little more!)
    for (var i in metro) {
        allLines.push(i); //add all keys of object metro into the array of allLines
        if (tripInfo["firstLine"] == i) {
            lineIn = metro[i];
            if (lineIn.indexOf(tripInfo["firstStop"]) < 0) {
                return "Cannot go straight to " + tripInfo["firstStop"] + " station from line " + tripInfo["firstLine"];
            }
        } 
        if (tripInfo["secondLine"] == i) {
            lineOff = metro[i];
            if (lineOff.indexOf(tripInfo["secondStop"]) < 0) {
                return "Cannot go straight to " + tripInfo["secondStop"] + " station from line " + tripInfo["secondLine"];
            }
        }
    }
    if (allLines.indexOf(tripInfo["firstLine"]) < 0){ //this is where I dried the code. Instead of saying that they need to be different then L, 6, N, Q, I just made an array with the previous loop and scan its index to see if value exists.
        return tripInfo["firstLine"] + " does not exist.";
    }
    if (allLines.indexOf(tripInfo["secondLine"]) < 0){
        return tripInfo["secondLine"] + " does not exist.";
    }
    var getOn = lineIn.indexOf(tripInfo["firstStop"]);
    var getOff = lineOff.indexOf(tripInfo["secondStop"]);
    if (tripInfo["firstLine"] == tripInfo["secondLine"]) {
        return Math.abs(getOff - getOn);
    } else {
        var stop1 = Math.abs(lineIn.indexOf(intersection) - getOn);
        var stop2 = Math.abs(lineOff.indexOf(intersection) - getOff);
        return stop1 + stop2;
    }
}
calculateDistance(tripInfo);