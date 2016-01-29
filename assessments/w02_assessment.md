# WDI Week 02 Assessment

Congrats on making it through week two!

This week, we learned about the DOM and how to interact with our webpages programmatically.

> Write your answers in the prompts in the boxes below:

# Variables, arrays, object, simple functions and loops

#### Question 1

```javascript
var apples = ['granny smith', 'gala', 'pink lady', 'empire', 'fuji'];
```

Given the above data, how would you get the string 'gala' from the `apples` array?

<br/>
<br/>
<br/>
<br/>

#### Question 2

```javascript
var apples = ['granny smith', 'gala', 'pink lady', 'empire', 'fuji'];
```

Use a forEach method to loop through the apples array and console.log each apple.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

#### Question 3

```javascript
var red = 'blue';
var blue = red;
red = 'green';
var orange = blue === red;
var green = blue.toUpperCase();
```

What is the current values of `red`?
<br/>
<br/>
What is the current values of `blue`?
<br/>
<br/>
What is the current values of `green`?
<br/>
<br/>
What is the current values of `orange`?
<br/>
<br/>


#### Question 4

```javascript
var crimefighters = {
  turtles: ['Leonardo', 'Raphael', 'Michelangelo', 'Donatello'],
  rangers: {
    red: 'Jason',
    black: 'Zack',
    yellow: 'Trini',
    blue: 'Billy',
    pink: 'Kimberly',
    green: 'Tommy'
  }
};
```
Given the crimefighters object, how would you access the red ranger's name? Please answer using JavaScript.

<br/>
<br/>
<br/>

#### Question 5

```javascript
var leaders = [
  {
    firstName: 'Barack',
    lastName: 'Obama'
  },
  {
    firstName: 'Angela',
    lastName: 'Merkel'
  },
  {
    firstName: 'Vladimir',
    lastName: 'Putin'
  }
];
```

1) Use the `Array#map` method to iterate over the collection below, outputting an array of full names (last name first) for the leaders, i.e. `['Obama Barack', 'Merkel, Angela', 'Putin, Vladimir']`.

Assign the resulting array to the variable `fullNames`.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

#### Question 6

Create a variable called `lightning` that points to an anonymous function.
When the `lightning` function is invoked it should
- print out 'flash'
- set a timeout that will print out 'crackle' after 3 seconds

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

#### Question 7

Add an event listener to the `window` object that listens for the 'resize' event and triggers a callback that creates and adds an `h2` element that says 'Stop it!' to the `body`.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

#### Question 8

```javascript

var here = 'Minnesota';

var miley = function() {
  here = 'inside';
  console.log(here);
};

here = 'San Francisco';

miley();

```

What will print out to the console?
<br/>
<br/>
<br/>
<br/>

#### Question 9

```javascript
var students = ['Harry', 'Hermione', 'Ron', 'Ginny'];

for(var i = 0; i < 3; i++){
  console.log(students[i]);
}
```

Examine the above code and imagine that you ran it.
What do you expect the outcome will be?
What is the final value of `i`?

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

# Iteration methods, timers, event listeners, callbacks, scope

# DOM & HTML/CSS

#### Question 10

```javascript
var abner = document.createElement('img');
abner.setAttribute('src', 'img/abner.png');
abner.classList.add('ultimate-warrior');
document.body.appendChild(abner);
```
Please explain in your own words, line-by-line, what's happening in the code above.

<br/><br/><br/>

#### Question 11

```html
<div class="container">
  <div id="nav">
    <ul>
      <li>Home</li>
      <li>About</li>
    </ul>
  </div>
  <div class="main">
    <p>Hello this is content</p>
  </div>
</div>
```

Given the HTML above, write CSS that will:

1. Center the `container` div
2. Make the `nav` div take up 20% of its parent element and the `main` div take up 80% of its parent element.
3. Position the two divs within the `container` div side-by-side.

<br/><br/><br/>
<br/><br/><br/>

#### Question 12

In the space below, write out the HTML for:

- An input box with an id of "first-name"
- A label for this input that contains the text "First Name:"
- A button with an id of "submit-btn"
<br/><br/><br/>
<br/><br/><br/>
<br/><br/><br/>
