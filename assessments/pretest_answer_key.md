# Javascript Basics Check In

Record the answers to the following IN THIS FILE where we have indicated 'answer here'. We won't be looking at any other files so make sure you save them in here before submitting!

## Question 1

```
a is 4.
b is 4.
```

## Question 2

```
e is 3.
f is 7.
g is 12.

=== is a comparator not an assigment operator.
```

## Question 3

```
= (re)assigns "cloudy" to the variable weather.
=== compares the value of the weather variable with the string value "cloudy".
```

## Question 4

```
"sushi is delicious"
x is equal to 2 (and not equal to 3) so it skips the first branch of the if statement.
x is greater than 0 so it then prints out "sushi is delicious".
```

## Question 5

```
"i love walnuts"
The variable food is equal to the string "walnut" so the if branch logic will execute and print the string "i love you".
```

## Question 6

```
a is "410".
The number ten got coerced, i.e. transformed, into a string and added with the "4".

You weren't expected to get this.

This is one of those things that you don't actually need to remember.
There are many dark, weird and unintuitive corners of programming languages like javascript.
Some other languages would have given you an error. Javascript tries to intuit 
what you meant, but may fail you in the process.

In order to prevent unexpected behavior, 
make sure you double check whether or not something is really the data type that you
assume/expect it to be. Assumptions lead to bugs. Bugs lead to unhappiness.

Remember that in real life, you will be able to use a computer to test things out and/or
do research. You'll see us as instructors looking things up and testing things out all 
the time. That's normal, and you should do it too.
```

## Question 7

```
2
(Array indexes start at 0.)
```

## Question 8

```
"Leonardo" would print out to the console.
"Raphael" would print out to the console.
The code stops.

Why?
i starts at 0.
i is less than 2 so the code in the for loop will run.
I.E. It will print out at the zero index of the turtles array, i.e. turtles[0], which is "Leonardo".
i will get incremented to 1.

i is 1.
i is less than 2 so the code in teh for loop will run.
I.E. It will print out the value at the first index of the turtles array , i.e. turtles[1], which is "Raphael".
i will get incremented to 2.

i is 2.
i is not less than 2.
No more code will execute.

I would change i < 2 to i < 4 or i < turtles.length so that all of the turtles get printed out. (If that's what I wanted);
```

## Question 9

```
var getLovers = function() {
  return ['Sam', 'Diane'];
}

var combine = function(name1, name2) {
  return [name1, name2];
}
```

## Question 10
```
hogwarts.students.potter.harry

OR

hogwarts["students"]["potter"]["harry"]
```

