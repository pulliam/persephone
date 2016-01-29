# Conditionals

## Lesson Objectives

- Understand what control structures are.
- Be able to give examples of control structures.
- Understand the purpose of conditional (branch) logic.
- Understand the syntax of an if/else statment.
- Understand the truthiness and falsiness.
- Understand how truthy and falsy values get evaluated in the context of conditional control structures.

## Control Structures

Control structures are tools built into most modern programming languages that allow programmers to organize code and complete common tasks. They also help to control the flow of a program. Conditional if/else statements, loops, and functions are all examples of control flow. 

Although they seem indespensible today, as late as the 1990's, the inclusion of control structures in programming languages was a controversial topic.

## if/else

Let's check the syntax of the if/else statement using MDN's documentation:
[if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

In the abstract:
```
if (condition1)
   statement1
else if (condition2)
   statement2
else if (condition3)
   statement3
...
else
   statementN
```

Concrete example:
```
if (x > 50) {
  console.log('It\'s greater than 50.');
} else if (x >= 5 && x < 50) {
  console.log('It\'s greater than or equal to 5 and less than 50.');
} else {
    console.log('It\'s less than 5.');
}
```

## Boolean operators

* ```===``` strictly equal to? (Use this!)
* ```!==``` strictly not equal to? (Use this!)
* ```>```   greater than?
* ```<```   less than?
* ```>=```  greater than or equal to?
* ```<=```  less than or equal to?
* ```!```   not. negation. Turns true into false and false into true.
* ```!!```  identity. If the value is not already a boolean this will transform it into a boolean.

## Logical operators

* ```&&``` and. All conditions must be true.
* ```||``` or.  One condition must be true.

## Truthy/Falsy

In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, "", null, undefined, and NaN).

Falsy Values:

- `false`
- `0`
- `""`
- `''`
- `null`
- `undefined`
- `NaN`

JavaScript uses type coercion in Boolean contexts.

Examples of truthy values in JavaScript (which will translate to true and thus execute the if block):

```
if (true)
if ({})
if ([])
if (42)
if ("foo")
if (new Date())
```

[source](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

Note:
To check the truthiness of any given value, we can use the boolean identity operator, `!!`.
Examples:
```
var rocket = "unicorn";
var bucket = [];

!!"rubber duckies" // returns true
!!0                // returns false
!!rocket           // returns true
!!bucket           // returns true
!!true             // returns true
```

## Truthiness with Conditionals

The conditional in each branch of an if...else statement does not require the use of the `===` operator. By default, it will evaluate the truthiness of the value given.

Example 1:

```
var isAStudent = true;

if (isAStudent) {
  console.log("Do your homework!");
}

// The conditional will evaluate to true and the statement `console.log("Do your homework!");` will be run.
```

Example 2:
```
var student = "Mozart";

if (student) {
  console.log("Welcome to conservatory!");
}

// student is truthy, so the conditional will evaluate to true.
// The if statement will run.

student = undefined;

if (student) {
  console.log("Welcome to conservatory!");
}

// student is now falsy, so the conditional will evaluate to false.
// The if statement will not run.
```


# Classwork

## Great Name

Design a program that evaluates a variable called `name` assigned to a string. If the string is `'Sung'` or `'sung'`, the program should log the phrase `'Great Name!'` to the screen.

Make it so that if the name is `"anna"` or `"Anna"` the program logs `"Also a great name!”`.

Make it so that if the name is not `'sung'`, `'Sung'`, `'anna'`, or `'Anna'`, it logs `"Consider a better name."` to the console.


## fizzbuzz

Let me introduce to you the most common interview question ever: fizzbuzz.

Part 1:

Write a conditional statement that prints `"fizz"` if the number is divisible by 3,
`"buzz"` if the number is divisible by 5, `"fizzbuzz"` if the number is divisible by both 3 and 5, and the number itself if divisible by neither 3 or 5. Assume that there is a variable called `number`.


Part 2:

Rewrite the conditional statement from Part 1, so that instead of using a variable called `number`, you are looping through the entire `allTheNumberz` array and printing the proper string for each element of the array.

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

Part 3:

Refactor you code from Part 2 so that it can handle the `allTheNumberz` array no matter how many items are in it. Test your code by editing the size of the `allTheNumberz` array.

## This isn't the droid we're looking for.

You've been asssigned the task of finding the droids ferrying the Death Star plans.

Create a conditional statement that will search through `theScrapHeap` using a loop and print out `"Put a restraing bolt on this one!"` if the droid is `"C-3P0"` or `"R2-D2"` and `"This isn't the droid we're looking for."` if it isn't either of those.

```
var theScrapHeap = ["AZI-3", "2-1B", "R2-D2", "Buzz Droid", "IG-88", "Battle Droid", "Probe Droid", "Droideka", "Huyang", "C-3PO"];
```

## The Thermostat

Write an if/else statement that evaluates the `temperature` and `isAirConditionerOn` properties of the `thermostat` object.

```
var thermostat = {
  temperature: 85,
  isAirConditionerOn: true
};
```

If `temperature` is warmer than 80, and `isAirConditionerOn` is `false`, log `"Turn the ac on!"`.
If `temperature` is warmer than 80 and `isAirConditionerOn` is `true`, log "this thing is broken!".
If `temperature` is colder than 60 and `isAirConditionerOn` is `true`, log `"Brrr, turn this thing off"`.
If the `temperature` is cooler than 80, and `isAirConditionerOn` is `false`, log `"Not worth the electricity. Leave it off."`

Test your code using these other thermostat objects.

```
var thermostat = {
  temperature: 85,
  isAirConditionerOn: false
};
```
```
var thermostat = {
  temperature: 55,
  isAirConditionerOn: true
};
```
```
var thermostat = {
  temperature: 55,
  isAirConditionerOn: false
};
```

Refactor your code so that `===` is not used.



