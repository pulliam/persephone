# Conditionals, Loops, Objects, Arrays, and Functions

![](http://3.bp.blogspot.com/-s4DtRI-nLEw/U-Ph3ZE0NRI/AAAAAAAAAdc/8jGT5gfb-Wg/s1600/keep-calm-and-do-your-homework-252.png)

## Setup

Tonight's homework has 3 distinct parts.  Create 3 different index.html and main.js files for each.

[FizzBuzz](#fizzbuzz)

[Droids](#droids)

[Dinos](#dinos)

## <a name="fizzbuzz">fizzbuzz</a>

Note: Returned values won't show up in the console... unless you log them.

Let me introduce to you the most common interview question ever: fizzbuzz.

### Part 1:

Write an if/else statement with four branches that prints
`"fizz"` if the number is divisible by 3,
`"buzz"` if the number is divisible by 5,
`"fizzbuzz"` if the number is divisible by both 3 and 5,
and the number itself if divisible by neither 3 or 5.
Assume that there is a variable called `number`.


### Part 2:

Rewrite the conditional statement from Part 1, so that instead of using a variable called `number`, you are looping through the entire `allTheNumberz` array and print the proper string for each element of the array.

```
var allTheNumberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
```

Console output should be:
```
1
2
fizz
4
buzz
fizz
7
8
fizz
buzz
11
fizz
13
14
fizzbuzz
```

### Part 3:

Refactor you code from Part 2 so that it can handle the `allTheNumberz` array no matter how many items are in it. Test your code by editing the size of the `allTheNumberz` array.

### Part 4:

Create a function called `fizzbuzz` that takes in a number and `return`s a string based on the rules of fizzbuzz.

For example:
```
fizzbuzz(1);  // returns '1'
fizzbuzz(2);  // returns '2'
fizzbuzz(3);  // returns 'fizz'
fizzbuzz(5);  // returns 'buzz'
fizzbuzz(15); // returns 'fizzbuzz'
```

To log the return value:
```
console.log(fizzbuzz(1)) // prints '1'
```
OR

```
var output = fizzbuzz(1);
console.log(output);     // prints '1'
```


Part 5:

Using a loop and the `fizzbuzz` function you wrote in Part 4, print out the fizzbuzzed string version of each number from 1 to 200.

# <a name="#droids">Droids</a>

> This isn't the droid we're looking for.

![](https://upload.wikimedia.org/wikipedia/en/3/39/R2-D2_Droid.png)


### Part 1:

You've been asssigned the task of finding the droids ferrying the Death Star plans.

Create a conditional statement that checks to see if this is the droid we're looking for and and prints out `"Put a restraing bolt on [NAMEOFDROID]!"` if the droid is `"C-3P0"` or `"R2-D2"` and `"This isn't the droid we're looking for."` if it isn't either of those. Search through `theScrapHeap` using a loop and use the conditional statement to check each droid.

```
var theScrapHeap = ["AZI-3", "2-1B", "R2-D2", "Buzz Droid", "IG-88", "Battle Droid", "Probe Droid", "Droideka", "Huyang", "C-3PO"];
```

### Part 2:

Create a copy of your code from part one and refactor it by pulling out the conditional logic into its own function called `isThisTheDroidWereLookingFor`. Use this new function inside of the loop instead of the if/else statement.

```
isThisTheDroidWereLookingFor("R2-D2"); // returns true
isThisTheDroidWereLookingFor("AZI-3"); // returns false
```

Loop through `theScrapHeap` using your brand spanking new function. The console logs should remain the same.

# <a name="dinos">Digging for Dinosaurs with John Hammond</a>

![raptor hatching](http://ak-hdl.buzzfed.com/static/enhanced/webdr01/2013/7/8/12/anigif_enhanced-buzz-31534-1373301886-36.gif)

Hello and welcome to Jurassic Park! You have been brought on to manage the dig sites for Dr. John Hammond. No expense has been spared, and the data on each mine is currently stored in the JavaScript objects below.

## Setup

Create an index.html file and a main.js file. 

For each part, copy and paste each code snippet into your main.js, and use your knowledge of JavaScript to complete the tasks below!  Use `console.log` to check your answers.

## Part 1

```JavaScript
var site1 = {
  paleontologist: 'Dr. Alan Grant',
  depthInMeters: 10,
  location: 'Snakewater, Montana',
  specimens: ['Velociraptor']
}
```

  2. Create a variable called guestOfHonor and assign it's value to the name of the paleontologist at Snakewater, Montana.

  1. Access the value of the specimen found in Snakewater, Montana, and store it in a variable called cleverGirl.

## Part 2


```JavaScript

var site2 = {
    location: 'Nicaragua',
    depthInMeters: 200,
    annualBudget: 1500000,
    specimens: [
      'Tyrannosaurus Rex',
      'Stegosaurous',
      'Triceratops',
      'Velociraptor'
    ]
  }

```

  1. Store the array of specimens of this site into a variable called `nicaraguanSpecimens`.

  2. Make a variable called `favoriteSpecimen` and assign its value to your favorite dinosaur within `nicaraguanSpecimens` ( can you do this by referencing the Nicaragua object itself? )

  3. Add 250000 to the annual budget of this site.

## Part 3

```JavaScript
var hammondsMines = [
  {
    location: 'Buenos Aires'
    depthInMeters: 400,
    annualBudget: 1000000,
    specimens: [
      'Dilophosaurus',
      'Brachiosaurus'
    ]
  },
  {
    location: 'Mexico'
    depthInMeters: 350,
    annualBudget: 900000,
    specimens: [
      'Gallimimus',
      'Parasaurolophus'
    ]
  }
];
```

  1. Access the depthInMeters of John Hammond's mine second mine.

  1. Store the dethInMeters of the Mexican mine into an appropriately named variable.

  1. Access and the annual budget for Hammond's mine in Buenos Airies.

  1. Store the annual budget for Hammond's mine in Buenos Aires.

  1. Access the dinosaur DNA specimens found in Buenos Aires.

  1. Insert Nicaragua into hammondsMines

  1. Create three variables to store the annual budgets for each mine into them.

  1. Access the 'Parasaurolophus' specimen.
  
  1. Create a new reasonably named variable to track the total annual cost of operation for the mines by adding the previously stored budgets.

  1. Use a for loop to iterate through hammondsMines and calculate the total annual budget.

  1. Use a for loop to iterate through hammondsMines and calculate the average depth.
