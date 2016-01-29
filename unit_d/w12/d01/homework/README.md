# Let's get Modular!

![image goes here](http://4.bp.blogspot.com/-2EazHPJQUPQ/Ti9rhCMkAmI/AAAAAAAAA6g/R8jRvJ9VHCk/s1600/kodomo+no+kuni+playground1.jpg)

### Objectives:

- Get some reps creating JavaScript programs to be run using Node.js
- Practice creating and requiring modules in Node programs
- Practice reading in files and creating new files in the file system
- Use the JSON module to parse and stringify JSON in your programs

For these exercises, you'll be creating, exporting, and requiring your own modules. **You'll be creating an `app.js` file and a module file for each part!** A quick refresher on some of the conventions & syntax:

#### Creating a module

`module_name.js`

```javascript
var moduleName = {};

moduleName.someFunction = function (arg) {
  return(arg + ' are cool!');
};

moduleName.someOtherFunction = function (arg) {
  return(arg + ' are ok...');
};

module.exports = moduleName;
```

### Requiring a module

`app.js`

```javascript
// Assumes `module_name.js` is in the same folder as `app.js`
var moduleName = require('./module_name.js');

// Using the module
var text = moduleName.someFunction('fezzes');
// value of text should be the string 'fezzes are cool'
```

Your mission is to complete at least three of the following prompts, and at least one from each section (Creating & Requiring Modules; File Input & Output).

## Creating & Requiring Modules

### Cold and Calculating

Build a calculator! 

#### Deliverables:

- A module named `calc.js` with the following functions:
  - `add` - returns the sum of two arguments
  - `subtract` - returns the difference of two arguments
  - `divide` - returns the quotient of two arguments
  - `multiply` - returns the product of two arguments

- A command line program called `app.js` with the following feature:
  - If a user enters a number, an operation (`+`, `-`, `x`, or `/`) and then a second number, the program will return the result of that operation.

You'll need to **`require` your calculator module inside your `app.js` file** and use the functions you defined to perform calculations.

#### Examples:

```bash
# Run from inside your `calculator folder`:
$ node app.js 1 + 1
> 2

$ node app.js 1 - 3
> -2

$ node app.js 2 x 4 # Note: Avoid using the '*' character.
> 8

$ node app.js 6 / 2
> 3
```

### Meeting the *Require*ments

You're going to create a personality analyzer! You'll need to require the [horoscope](https://www.npmjs.com/package/horoscope) npm package.

#### Deliverables:

- A 'spirit name' module with the following data and functionality:
  - `adjectives` - an array that contains at least ten adjectives.
  - `nouns` - an array that contains at least ten nouns.
  - `getName` - a function that returns a random adjective/noun combination.
- A command line program called `app.js` with the following features:
  - When the user runs your program with no arguments, a string with their "spirit name" is returned.
  - When the user runs your program with their birth year as the first argument, their "spirit name" and their zodiac sign is returned.

#### Examples:

```bash
$ node personality.js
> Your spirit name is Leather Bottlecap

$ node personality.js 1988
> Your spirit name is French-pressed Sweater-vest and your zodiac sign is Dragon
```


## File Input & Output

In this section, you'll be working with the `fs`, or "File System" module. You won't need to `npm install` it, because it's included as a part of node. **Remember,** the two main functions you'll be using are **asynchronous** - they'll need callbacks! Here's an example of writing a module with asynchronous functions:

#### Example JSON file:

`list_items.json`

```javascript
[
  "Apples",
  "Bananas",
  "Pears"
]
```

#### Example module file:

`html_tagger.js`

```javascript
// We'll need to require the 'fs' module...
var fs = require('fs');
// and the 'path' module.
var path = require('path');

// Our example will read in a JSON file
// and return an array of HTML tags.
var htmlTagger = {};

// Defining our function to take a callback later
htmlTagger.createLis = function(callback) {
  // The method below will give us the right path 
  // to our json file no matter where it's being
  // run from!
  var pathToJsonFile = path.join(__dirname, 'list_items.json');
  // Read in the data
  fs.readFile(pathToJsonFile, 'utf8', function(err, data){
    if (err) { throw err; }
    var parsed = JSON.parse(data);
    var tagged = parsed.map(function(element){
      return '<li>' + element + '</li>';
    })
    // Pass along our array of li's
    callback(tagged);
  });
};

module.exports = htmlTagger;
```

#### Example usage:

```javascript
var htmlTagger = require('./html_tagger.js');

// Notice the name of my parameter. How 
// do I know it's going to be data?
htmlTagger.createLis(function(data){
  console.log(data);
  // should log our array of li's! Now 
  // we can do whatever we want with them.
});
```

### What the Cow Say?

Use the **[cowsay](https://www.npmjs.com/package/cowsay) npm module** and **read in a file** to create a very wise cow program. 

#### Deliverables:

- A JSON file called `wisdom.json` containing an array of strings ([wise quotes, maybe?](http://www.wisdomquotes.com/)).
- A module named `wise_cow.js` with the following functions:
  - `randomQuote` - a function that reads `wisdom.json` and takes a callback function. 
    - The callback will be run after `wisdom.json` has been fully loaded. You should pass the quote to the callback function, much like we pass in `tagged` to `createLis`'s callback (see above).
- A command line application with the following features:
  - When the program is run, `wisdom.json` will be read in and parsed correctly.
  - When the program is run, a random piece of wisdom will be selected from those available in `wisdom.json`.
  - When the program is run, an ascii cow with a speech bubble containing the `quote` will be logged to the console.


## Call Me Any, Any Time

Create a JavaScript program that reads in a `contacts.json` file and returns information based on user input.

```javascript
// Example data:
[
  {
   "name": "Sung Shoy",
   "id": 3,
   "age": 57,
   "number": "867-5309"
  }
]
```

#### Deliverables:

- A JSON file called `contacts.json` containing an array of objects.
- A module named `contacts.js` that includes the following functions:
  - `load` - a function that reads in `contacts.json` and returns an array of objects.
  - `count` - returns the total number of contacts
  - `list` - returns an array of contact names
  - `find` - takes a single argument (id) and returns an object containing a contact's info
- A command line application with the following features:
  - When the program is run with no arguments, it logs the string "Please type one of the following commands: `list` OR `details ID`" to the console.
  - When the program is run with the string "list" as the first argument, a list of contacts by ID number is logged to the console.
  - When the program is run with the string "details" as the first argument and an existing ID number as the second argument, the name, age, and phone number of the record with that ID number is logged to the console.

#### Examples:

```bash
$ node contacts.js
> Please type one of the following commands: `list` OR `details ID`

$ node contacts.js list
> ID: NAME
> ---------
> 1: Phil Seymour Hoffman
> 3: Phil K. Dick
> 4: Phil Lamplugh 
> 8: Phil Collins

$ node contacts.js details 4
> Name: Phil Lamplugh
> Age: 993
> Number: 123-456-7890

```
