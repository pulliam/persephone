# Homework!!!

Your homework tonight is in two parts:

### [Code Breakers Assignment](#code-breakers)
### [MTA Assignment](#mta)

Finish ***Lockpicker*** first, then move on to the ***MTA*** assignment. Get as far as you can, and make a note of which parts of the assignment give you the most problems.

## Code Breakers

![](http://static.bbc.co.uk/history/img/ic/640/images/resources/topics/enigma.jpg)

- Read all of the instructions first.
- Write a function called `breakCode` that takes a 12 character alphanumeric string as an argument and prints a string containing `*` for incorrect characters and the character for correct characters, e.g. `"**234***abae`.
- Inside of the function, create a **local variable** called `code` that points to the  12 character string answer. Make sure the variable is local, otherwise code breakers will be able to easily inspect your code. A function's scope helps prevents strangers from looking into its guts.
- The person trying to open the lock should be told which characters they entered are correct, and which are not.
- If they manage to crack the lock, send them a congratulatory message.
- If the user does NOT enter exactly 12 characters, give them an error message.
- Before you start coding, pseudocode the logic. (Think. Design. Code. Test. Refactor. Repeat.)

#### Example Results:

```
/*
 * imagine the code is 'passions9876'.
 * remember code should not be in the global scope
 * it should only be defined inside of the breakCode function
 */
code // Error: Uncaught ReferenceError: code is not defined(…)
     // If you didn't get an error, you accidentally put the code in the global scope
     // for all to see!

breakCode("password1234"); // prints "pass********"
breakCode("pass12345678"); // prints "pass********"
breakCode("passions9876"); // prints "passions9876 \n Congratulations. You've opened the safe."
breakCode("password");     // prints "Incorrect number of characters!"

```

## MTA

#### The NYC Subway System

![](http://www.thevoxelagents.com/agentlogs/wp-content/uploads/2010/03/NYC_01.png)

### Objectives

- Create a program that uses your knowledge of **arrays**, **objects**, **conditionals**, and **functions** to help New Yorkers figure out how many stops they'll need to travel on the subway.

## Background
There are 3 subway lines:
  - The **N** line has the following stops: *Times Square, 34th, 28th, 23rd, Union Square, and 8th*
  - The **L** line has the following stops: *8th, 6th, Union Square, 3rd, and 1st*
  - The **6** line has the following stops: *Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place*.
  - All 3 subway lines intersect at *Union Square*, but there are NO other intersection points.

## Features
1. A user can list the available lines.

  ```javascript
  listLines();
  // returns:
  // N
  // L
  // 6
  ```

2. A user can see all of the stops for a line.
  ```javascript
  listStops("L");
  // returns:
  // 8th, 6th, Union Square, 3rd, 1st
  ```

3. A user can calculate the total number of stops between two stations.
  ```javascript
  var tripInfo = {
    firstLine: "L",
    firstStop: "Union Square",
    secondLine: "6",
    secondStop: "33rd"
  };
  calculateDistance(tripInfo);
 // returns:
 // 3
 ```

 ```javascript
 var distance = calculateDistance({
    firstLine: "L",
    firstStop: "Union Square",
    secondLine: "L",
    secondStop: "8th"
 })
 // returns 2
 //  distance should === 2
 ```

4. A user is notified if they don't provide the correct information in the right format.
  ```javascript
  calculateDistance("BLERGH");
  // returns
  // "Wrong syntax!!!1! You must provide an object with the following properties: firstLine, firstStop, secondLine, secondStop.
  ```

## Keep in Mind

- Spend some time planning how you will `model` your subway lines. Get some whiteboard markers and a partner and talk it out!
  - What data structure(s) will you use to represent the subway system?
- Break it down and follow your errors! Maybe try getting the program to work for a single train line before trying to tackle multiple lines.
- Reference the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript) for arrays and objects. How can we grab the index number if we already know the value of an element inside an array?

  ``` javascript
  var greeks = ["euripides", "aesop", "sappho"]
  greeks.indexOf("euripides")
  // 0
  ```

## Complexity

- ***Write simple, shameless code!*** Don't worry right now about the "right" way to do something, or what the best solution is to the problem when you don't have a simple answer yet. Focus on **problem-solving** - figure out how to make it work, THEN take another look at your code/refactor.

## Bonus
- Add the following line without making major modifications to your code:
  - The Q line has the following stops: Times Square, Herald Square, Union Square, Canal St.

## Gist From Last Night (W01/D04)
[Here](https://goo.gl/V91RuV) it is!
