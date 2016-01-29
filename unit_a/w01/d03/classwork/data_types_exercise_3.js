
var resultOne = 8
var resultTwo = 7.5
var resultThree = 8.8
var resultFour = 9
var resultFive = 10

var roundedTestAverage = (resultOne + resultTwo + resultThree + resultFour + resultFive) / 5 ;
console.log("roundedTestAverage:", Math.round(roundedTestAverage));

var roundedQuizzAverage = 2;
var roundedHomeWorkAverage = 7;

// /*
//  * Calculate the weighted average for a high school students 1st Quarter grade
//  * Use the following category weighting: 50% Tests, 30% Quizzes, 20% HW
//  * Define three variables, one for each category average.
//  */

var weightedTestAverage = roundedTestAverage * 0.5;
var weightedQuizzesAverage = roundedQuizzAverage * 0.3;
var weightedHomeWork = roundedHomeWorkAverage * 0.2;
var FinalGrade = weightedTestAverage + weightedQuizzesAverage + weightedHomeWork;

console.log("weightedTestAverage:", Math.round(FinalGrade));


// /*
//  * Given the radius, output the diameter, circumference, and area of a circle
//  * Define one variables, the radius
//  * How does JavaScript "round"?
//  */

var radius = 20;
var diameter = 2 * radius;
var circumference = 3.14 * diameter;
var area = 3.14 * ((radius) * radius);

console.log("diameter:",diameter);
console.log("circumference:",  circumference);
console.log("area:",  area);


// /*
//  * Calculate the distance between two points
//  * You will need to define four variables: (x1, y1) and (x2, y2)
//  * FYI - You will need to figure out how JavaScript performs "complicated" math operations
//  */

var 
// var dist = ;
// console.log("distance:", distance);


// /*
//  * Use String methods to output important information from a url
//  * Write your methods so that they work based on important symbols: '://', '=', '?'
//  * If you "count the letters" your code might not work for other urls
//  * FYI - You will need to research how to label a url
//  */
// var url = "http://www.example.com/index.html:8080?name=wdi_student&password=12345";
// var protocol = ;
// var domain = ;
// var queryString =;
// var parameter1 = ;
// var parameter1Value = ;
// var parameter2 = ;
// var parameter2Value = ;
// console.log("protocol: "+ protocol);
// console.log("domain: "+ domain);
// console.log("queryString: "+ queryString);
// console.log("parameter1: "+ parameter);
// console.log("parameter1Value: "+ parameterValue);
// console.log("parameter2: "+ parameter);
// console.log("parameter2Value: "+ parameterValue);
