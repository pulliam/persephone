//Ok. Now If you read the pseudocoding I did on my first code for this project, now this is where I explain what I did in my
//second code, when I tried to dry my code a bit and use an object as a parameter instead of 4 parameters. It took me a while
//to figure but here we are:

var metro = { 
            N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
            L: ["8th", "6th", "Union Square", "3rd", "1st"],
            6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};
//Again, variable metro is declared with 3 keys and one array in each of them. Im calling my metro exaclty as their real name,
//so notice the key 6 is not a string as the previous code.

function listLines () {
    for (var i in metro) {
        console.log(i);
    }
}

//This is the first exercise of the project. I made a function using the for loop of objects, that will scan through the properties of
//my object and log all them because I asked the console.log to log in the console all "i" (which are the keys only, not its properties.)
//With that, the N L and 6 shall be returned listing the lines.

function listStops (chosenLine){
    var stopsOfMyLine;
    for (var i in metro) {
        if (chosenLine == i) {
            stopsOfMyLine = metro[i];
        }
    }
    return stopsOfMyLine;
}

//This function is supposed to list the stops of the chosen line (parameter of the function). I run the for loop in all my keys of my object,
//if chosenLine parameter, equals one of my keys, return the variable I just declared that equals to the array inside the respective key.

var tripInfo = {   //Ok, so this is the variable that will store my parameters information. Called tripInfo, has 4 key values with one property in each of them
  firstLine: "L",
  firstStop: "Union Square",
  secondLine: "6",
  secondStop: "33rd"
};

function calculateDistance(tripInfo) { //I create the function with one parameter called tripInfo.
    if (tripInfo["firstLine"] !== "L" && tripInfo["firstLine"] !== "N" && tripInfo["firstLine"] !== "6" && tripInfo["secondLine"] !== "L" && tripInfo["secondLine"] !== "N" && tripInfo["secondLine"] !== "6"){ 
        return tripInfo["secondLine"] + " and " + tripInfo["firstLine"]  + " do not exist.";
    } //If the firstLine key of my object and the secondLine key of my tripInfo object are none equal to any of my metro object keys (the line available in the metro system), It will output a message saying both lines don't exist.
    if (tripInfo["firstLine"] !== "L" && tripInfo["firstLine"] !== "N" && tripInfo["firstLine"] !== "6" && tripInfo["firstLine"] !== "Q"){
        return tripInfo["firstLine"] + " does not exist.";
    } //Now If only the firstLine key doesn't have a value that correspond any of my lines, It will output a message saying that the firstLine line doesnt exist
    if (tripInfo["secondLine"] !== "L" && tripInfo["secondLine"] !== "N" && tripInfo["secondLine"] !== "6" && tripInfo["secondLine"] !== "Q"){
        return tripInfo["secondLine"] + " does not exist.";
    } //And If only the secondLine key doesn't have a value that correspond any of my lines, It will output a message saying that the secondLine Line line doesnt exist

    var intersection = "Union Square";  //I declare the intersection variable that equals the intersection of my lines
    var lineIn; //I declare two variables with no value yet.
    var lineOff;

    for (var i in metro) { //My for loop on the object metro: Run through all keys of metro:
        if (tripInfo["firstLine"] == i) { //If the key being runned equals the property of the key firstLine of tripInfo object,
            lineIn = metro[i]; //declare lineIn variable equal to the array of the metro object key.
            if (lineIn.indexOf(tripInfo["firstStop"]) < 0) { //And If the index of the property of firstStop key inside de object tripInfo is less then zero (non existent value,)
                return "Cannot go straight to " + tripInfo["firstStop"] + " station from line " + tripInfo["firstLine"] + " or this Station doesn't exist.";
            } //Let the user know there is an error there. I use return to make sure the function ends here if this last If statement is true.
        } //after this if statement, I open a completly new one: 
        if (tripInfo["secondLine"] == i) {
            lineOff = metro[i]; //If the key being runned equals the property of the key secondLine of tripInfo object, declare lineOff variable equal to the array of the metro object key.
            if (lineOff.indexOf(tripInfo["secondStop"]) < 0) { //If the index of the property of secondStop key inside de object tripInfo is less then zero (non existent value, which means the subway stop doesnt exist)
                return "Cannot go straight to " + tripInfo["secondStop"] + " station from line " + tripInfo["secondLine"] + " or this Station doesn't exist.";
            } //returns and stop the function here, showing the above message. 
        }
    } //Close the for loop.
    var whereGetOn = lineIn.indexOf(tripInfo["firstStop"]); //declare two variables that corresponde to the index of the value of firstStop key inside tripInfo object, at the object of metro, in the array corresponding to what this variable was assigned. 
    var whereGetOff = lineOff.indexOf(tripInfo["secondStop"]); //its a little complicated, but means that, whatever was my "value" of second and firstStop, which are keys of my parameter, find it in the array of the line Im using inside metro and gets its index and assign it to this variable.

    if (tripInfo["firstLine"] == tripInfo["secondLine"]) { //then finally, If the metro line I get In is the same as the one I get off, (notice Im not using dot notation because one of my keys is a number (6))
        return Math.abs(whereGetOff - whereGetOn); //return the absolute number of the substraction of the indexes that correspon the subway stops Im talking about. 
    } else { //Now if Im using two different lines. 
        var thisManyStopsAtFist = Math.abs(lineIn.indexOf(intersection) - whereGetOn); //first assign the index of the intersection - the index of the stop I get On (as an absolute value) to this variable
        var thisManyStopsAtSecond = Math.abs(lineOff.indexOf(intersection) - whereGetOff); //second, assign the index of the intersection minus the index of the stop I got off (as an absolute value) to this variable
        return thisManyStopsAtFist + thisManyStopsAtSecond; //and return me the addiction of those two previous substractions. I used two variables to keep an organized code.
    }
}

/*example*/ calculateDistance(tripInfo);