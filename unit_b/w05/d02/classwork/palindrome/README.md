# Palindrome Checker

![tacocat](http://i.giphy.com/Jtz5M0I1JoLug.gif)

***You mean it's the same backwards and forwards?!?***

*Good morning!* Today, we'll be building a website that can evaluate a string and let a user know whether or not they've entered a [palindrome](https://en.wikipedia.org/wiki/Palindrome).

***You'll be using jQuery to manipulate the DOM.***

### Objectives:

- Practice those JavaScript and jQuery skills we haven't used for ~~so very long~~ a few days.
- Use your algorithmic abilities to solve a logical problem.

### Part One: Set It Up

1. Create an `index.html`, `main.js`, and `style.css` file.
- Set up your HTML boilerplate and make sure your JavaScript and CSS files are linked properly.
- Add a link to jQuery in your HTML file. You may use a CDN or a local copy of the script.
- Make sure your scripts are linked successfully and in the right order! Check to see if `jQuery`/`$` is defined in your browser's console.
- On your HTML page, include a button and a text input.

### Part Two: Logic it Out

1. jQuery time! Grab references to your variables using jQuery. Remember - when does this need to happen in relation to when your page loads?
- Set up an event listener that will wait for clicks on your button, then grab the value of the input element.
- Once you have the user's input, you should evaluate the string - is it the same backwards and forwards? What logic will you need to write to deterine this?
- Once you have your answer, use JavaScript to create a new `p` tag and save it to the variable `result`. Give it a text content of "WORD is a palindrome!" or "WORD is **not** a palindrome." depending on your program's evaluation of the word.
- Make sure you append this new paragraph to the DOM!

### Bonus

- Add a button to your page that, when clicked, fills in the input box with a randomly generated palindrome. This should not be a palindrome from a list, but a **brand new word** that may or may not exist yet!
    - Examples of possible results: erttittre, yuikiuy, naan, waffaw, etc.
- Add some CSS style. Make sure your page is simple and easy to read, with a reasonable amount of space around your elements. Your button should appear below your input, and your results should appear below your button. The text in both the input and the result should be large enough to read easily.
