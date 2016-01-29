# Repository of Endless Knowledge

![book](http://rhrealitycheck.wpengine.netdna-cdn.com/wp-content/uploads/2014/03/rainbow-book-375x250.jpg)

#### Objectives

1. Write a simple command line program that accepts one argument.
2. Use conditionals and/or a switch statement to accomplish control flow.
3. Practice writing separate methods to perform specific jobs in Ruby.
4. Explore the wonders of Ruby's enumerable methods!

It's time to make your own repository of knowledge! Your job is to create a simple program that can be run from the command line that spits out information about different Ruby methods.

```
$ ruby tell_me_about.rb each
> *----------~ WOW ~----------*
>
> .each is a Ruby method that can be called on an array. It takes a block
> of code and calls it once for each element, passing that element to the
> block.
>
> *---~ The more you know ~---*
```

  1. Include at least 10 different enumerable methods in your program's dictionary.
  - Your program should be able to take in the name of a method as a command line argument and spit back its definition.
  - Your program should return a gentle corrective message if the user enters a method not defined in your program's dictionary.
  - The user should be able to enter a command to list out the different methods your program has definitions for.
  - Throughout the assignment, keep scope in mind. Make sure you know where any given variable (class/instance/local) is accessible from/not accessible.

### Step One - Design

1. Think about how you will design your program - before you think about defining classes or what your instance variables will be, think about what happens when you program runs. Write this out, step-by-step, as pseudocode.
- You're going to need some data! Check out the [Ruby docs on Enumerables](http://ruby-doc.org/core-2.2.3/Enumerable.html) and pick out a few useful-sounding methods. How will you store this data? What kind of data structure makes the most sense here?

### Step Two - Build

- Your application should use classes! Store each Ruby method's title and definition as an instance of a `Definition` class.
- Your Definition class should have getter methods that allow you to read the class's title and definition.
- Time for logic! Write the logic that will allow your program to accept user input and print out the correct response.

#### Food For Thought

- If your application were to have a `Dictionary` class in addition to a `Definition` class, what might that look like? What would the responsibilities of each class be? What methods might your `Dictionary` class have? How would that change your code?

## Bonus

1. Allow mispellings! Suggest a similar word to a user if they enter a term that does not exist.
