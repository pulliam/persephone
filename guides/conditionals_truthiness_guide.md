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
