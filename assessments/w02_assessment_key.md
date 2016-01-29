# ANSWER KEY

## WDI Week 02 Assessment

#### Question 1

```javascript
var apples = ['granny smith', 'gala', 'pink lady', 'empire', 'fuji'];
```

Given the above data, how would you get the string 'gala' from the `apples` array?

```
apples[1];
```

#### Question 2

```javascript
var apples = ['granny smith', 'gala', 'pink lady', 'empire', 'fuji'];
```

Use a forEach method to loop through the apples array and console.log each apple.

```
apples.forEach(function(apple){
  console.log(apple);
});
```

OR

```
var printApple = function(apple){
  console.log(apple);
};

apples.forEach(printApple);
```

#### Question 3

```javascript
var red = 'blue';
var blue = red;
red = 'green';
var orange = blue === red;
var green = blue.toUpperCase();
```

What is the current value of `red`?

```
'green'
```

What is the current value of `blue`?

```
'blue'
```

What is the current value of `green`?

```
'BLUE'
```

What is the current value of `orange`?

```
false
```


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

```
crimefighters.rangers.red
```

OR

```
crimefighters['rangers']['red'];
```

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

1) Use the `Array#map` method to iterate over the collection below, outputting an array of full names (last name first) for the leaders, i.e. `['Obama Barack', 'Merkel Angela', 'Putin Vladimir']`.

Assign the resulting array to the variable `fullNames`.

```
var fullNames = leaders.map(function(leader) {
  return leader.lastName + ' ' + leader.firstName;
});
```

OR

```
var concatenateNameLastNameFirst = function(person) {
  return person.lastName + ' ' + person.firstName;
};

var fullNames = leaders.map(concatenateNameLastNameFirst);
```

#### Question 6

Create a variable called `lightning` that points to an anonymous function.
When the `lightning` function is invoked it should
- print out 'flash'
- set a timeout that will print out 'crackle' after 3 seconds

```
var lightning = function(){
  console.log('flash');

  setTimeout(function(){
    console.log('crackle');
  }, 3000); 
};
```

OR

```
var lightning = function(){
  console.log('flash');

  window.setTimeout(function(){
    console.log('crackle');
  }, 3000); 
};
```

OR

```
var lightning = function(){
  console.log('flash');

  var thunder = function(){
    console.log('crackle');
  };

  setTimeout(thunder, 3000); 
};
```

OR

```
var lightning = function(){
  console.log('flash');

  var thunder = function(){
    console.log('crackle');
  };

  window.setTimeout(thunder, 3000); 
};
```

#### Question 7

Add an event listener to the `window` object that listens for the 'resize' event and triggers a callback that creates and adds an `h2` element that says 'Stop it!' to the `body`.

```
window.addEventListener('resize', function(){
  var h2 = document.createElement('h2');
  h2.textContent = 'Stop it!';
  document.body.appendChild(h2);
});
```

OR

```
var appendStopItHeaderToBody = function(){
  var h2 = document.createElement('h2');
  h2.textContent = 'Stop it!';
  document.body.appendChild(h2);
};

window.addEventListener('resize', appendStopItHeaderToBody);
```

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

```
'inside'
```

OR

```
inside
```

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

```plaintext
print 'Harry'
print 'Hermione'
print 'Ron'

variable i points to 3.

Explaination:
In a for loop, there are three parts to inside the parentheses.
Setup. Condition. After iteration.
After each iteration of the loop, i is incremented.
After 'Ron' is printed. i is incremented to 3.
The condition is checked: 3 < 3. This resolves to false so the loop
stops running.
```

# DOM & HTML/CSS

#### Question 10

```javascript
var abner = document.createElement('img');
abner.setAttribute('src', 'img/abner.png');
abner.classList.add('ultimate-warrior');
document.body.appendChild(abner);
```
Please explain in your own words, line-by-line, what's happening in the code above.

```plaintext
Create an img DOM element and assign it to a variable called abner.
Set the src attribute for abner to 'img/abner.png'.
Add teh 'ultimate-warrior' class to abner (the img DOM element).
Append abner to the body of the document.
```

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

```
.container {
  margin: 0 auto;
  position: relative;
}

#nav {
  width: 20%;
  position: absolute;
  top: 0;
  left: 0;
}

.main {
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
}
```

OR

```
.container {
  margin: 0 auto;
  position: relative;
}

#nav {
  width: 20%;
  display: inline-block;
}

.main {
  width: 80%;
  display: inline-block;
}
```
* Caveat. For inline-block, there must be no whitespace in the HTML between inline-block elements for it to render as expected.

OR

```
.container {
  margin: 0 auto;
  position: relative;
}

#nav {
  width: 20%;
  float: left;
}

.main {
  width: 80%;
  float: left;
}
```

OR

```
.container {
  margin: 0 auto;
  position: relative;
}

#nav {
  width: 20%;
  float: left;
}

.main {
  width: 80%;
  float: right;
}
```


#### Question 12

In the space below, write out the HTML for:

- An input box with an id of "first-name"
- A label for this input that contains the text "First Name:"
- A button with an id of "submit-btn"

```HTML
<label for="first-name">First Name</label>
<input id="First-name" type="text">
<button id="submit-btn">GO</button>
```

(button text optional)
input is a self-closing tag, so we do not need </input> however having a closing tag will not break your HTML. Sometimes, you will see self-closing tags end with a /, e.g. `<br/>` or `<input id="First-name" type="text"/>`. This is a relic from when standards bodies attempted to combine XML and HTML standards, i.e. XHTML.

