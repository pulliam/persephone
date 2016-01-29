//Before anything, I have 3 codes for my MTA Project. 
//After designing a way to solve the problem logically, I created first this one, using 4 parameters for my function. 
//After that, I created the final project from this code below, that its in the file mta.js

var metro = {
            L: ["8th", "6th", "Union Square", "3rd", "1st"], 
            N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"], 
            Six: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
            };   

//Firstly, a variable called metro is declared. the variable is an object array with 3 keys in it, being each key property, another array (normal array)
//Each key represent the subway line, and their properties are an array of all stops of their respective subway lines.
            

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

//OR return metro.chosenLine;   would be a LOT simpler way of doing it

function calculateDistance(lineGetIn, departure, lineGetOff, arrival) { //Now I declare a funtion to calculate what I need, that takes four parameters.
    if (lineGetIn !== "L" && lineGetIn !== "N" && lineGetIn !== "Six"){ //Firsty, let's eliminate the possibility of user inputing the wrong syntax for the parameters. So the IF statment helps me say that, If "lineGetIn", which is the first parameter, is not equal to any of existent lines:
        console.log("Wrong syntax!!!! \nYou must provide four parameters: \nThe line you board, Your departure, The Line you Get Off, Your Arrival Stop. Here are the options: \nSix: " + listStops("Six") +  " \nL: " + listStops("L") + " \nN " + listStops("N"));
        return "Try Again"; // This message should be returned letting the user know something is wrong.
    }  // And another If statment below does the same comparison but in regarding the thrid parameter, "lineGetOff", that must equal either to L, N or Six
    if (lineGetOff !== "L" && lineGetOff !== "N" && lineGetOff !== "Six"){ //Notice you need to use the operator && though because you are not looking for one or other to be true, but looking for them ALL to be wrong.
        console.log("Wrong syntax!!!! \nYou must provide four parameters: \nThe line you board, Your departure, The Line you Get Off, Your Arrival Stop. Here are the options: \nSix: " + listStops("Six") +  " \nL: " + listStops("L") + " \nN " + listStops("N"));
        return "Try Again"; // This message should be returned letting the user know something is wrong.
    } //If they are all wrong, this message above is output:
    var intersection = "Union Square"; //Now I declare a variable that I call intersaction, for the stop that intersects all lines. I will use it more in front of the code.
    var lineIn; //Declare two variables, lineIn and lineOff and dont give them any value for now.
    var lineOff;
    for (var i in metro) { //Start a for loop. This is the syntax for the "for loop" on objects. It says that, for the variable I am saying that its i, run inside my metro object on each of its properties (meaning here the metro keys, not what's inside their values)
        if (lineGetIn == i) { //and everytime the loop is runned, if the parameter lineGetIn equals one of the keys (in this case, one of my existing subway lines),
            lineIn = metro[i]; //assign my variable lineIn to the property of the key runned by the loop. Which means that. if the key was "L" for exemple, i at that time was representing "L", so now assign my variable to be equal to the property of "L", which is the array that is contained inside L
            if (lineIn.indexOf(departure) < 0) { //And then, if the index of departure (one of the parameters, inside lineIn (in this case, the index of the departure inside array because all values of my object keys are arrays), is less then zero(that means the index doesn exist! arrays have only more then 0 as indexes. So all Im doing is trying to see if the value Im using exists inside my array)
                console.log("Wrong syntax!!!! \nYou must provide four parameters: \nThe line you board, Your departure, The Line you Get Off, Your Arrival Stop. Here are the options: \nSix: " + listStops("Six") +  " \nL: " + listStops("L") + " \nN " + listStops("N"));
                return "Try Again"; // This message should be returned letting the user know something is wrong.
            }  //If yes, It means the index doesnt exist which == value is not present, which means, wrong input at the function parameter. Then return the message (Return will also stop my code here, so nothing would happen from now on)
        }  //If no, the code won't be "returned" so the function will keep going:
        if (lineGetOff == i) { //I do the same two if statements regarding the parameter lineGetsOff now. If lineGetOff equals i, 
            lineOff = metro[i]; //lineOff variable = array of the i of metro 
            if (lineOff.indexOf(arrival) < 0) { //and if the index of arrival inside my array is less then zero (value doesnt exist in array), run this return message:
                console.log("Wrong syntax!!!! \nYou must provide four parameters: \nThe line you board, Your departure, The Line you Get Off, Your Arrival Stop. Here are the options: \nSix: " + listStops("Six") +  " \nL: " + listStops("L") + " \nN " + listStops("N"));
                return "Try Again"; // This message should be returned letting the user know something is wrong.
            } //close if statement
        } //close close other if statement
    } // Close my for loop.
    var whereGetOn = lineIn.indexOf(departure); //Declare a variable whereGetOn, that equals to index of departure inside lineIn (that was assign a value right above when the for loop runned (this value will be one of the arrays of the obejct metro))
    var whereGetOff = lineOff.indexOf(arrival); ////Declare a variable whereGetOff, that equals the index of arrival inside lineOff (that was assign a value right above when the for loop runned (this value will be one of the arrays of the obejct metro))
    if (lineGetIn == lineGetOff) { //So, If lineGetIn equals lineGetOff (that means, if the two parameters for the subway line that you board and leave are the same), run this code:
        return "This commute will take " + Math.abs(whereGetOff - whereGetOn) + " Stop(s).";//return as result of the function the number of index assigned in variable whereGetOff - whereGetOn, that is inside a method of Javascript Math.abs, that return the absolute value (positive number), so the train ride can be calculated in both ways.
    } else {  // If not, this code will run:
        //2 variables are declared to make it a cleaner code. thisManyStopsAtFirst equals the absolute value of the substraction of the index of intersection (which was previously assigned as variable for union square), minus the index of departure.
        //and then the same thing for the second variable: thisManyStopsAtSecond = index of intersection - index of arrival. 
        var thisManyStopsAtFist = Math.abs(lineIn.indexOf(intersection) - whereGetOn);  
        var thisManyStopsAtSecond = Math.abs(lineOff.indexOf(intersection) - whereGetOff);
        return "This commute will take " + (thisManyStopsAtFist + thisManyStopsAtSecond) + " Stop(s) and 1 Transfer" ; //then returns as result of function the value of this two distance added, because 2 trains rides = onde train ride + another. 
    }
}
/*example*/  calculateDistance("L", "6th", "Six", "33rd");