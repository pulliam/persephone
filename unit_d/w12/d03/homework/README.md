# Express Yoself

![dance](http://i.giphy.com/h96hGvhcUekdW.gif)

***Building Simple Express Apps***

### Objectives:

1. Practice setting up your application from the ground up - manage your dependencies and create the proper file structure.
1. Gain experience creating several simple Express applications.
1. Synthesize what you've learned about writing modules and using `fs` with your newfound Express skills.

### Resources

***Before you start:*** Install jshint: `npm install -g jshint`

The jshint package is a command-line version of the JS linting tool on [http://jshint.com/](http://jshint.com/). Usage: `jshint my_file.js` **-->** will return any syntax errors it finds. 

**File Structure**

```
.
├── app.js
├── lib/
├── package.json
├── public/
│   ├── css/
│   ├── imgs/
│   └── js/
└── views/
```

- [Sung's Express Guide](https://github.com/ga-students/wdi-persephone/blob/master/unit_d/w12/d03/classwork/express/express_guide.md)
- [Express.js API Reference](http://expressjs.com/en/4x/api.html)

### Part One: FCO (Fortune Cookie Online)

![cookie](http://www.thelittleredguide.com/files/2013/09/fortune-cookie-1849987.jpg)

***Integrate an existing module into a new Express app***

Bring your fortune cookie module's functionality to the masses! Include your fortune cookie module in your Express app.

Create a simple express app that will **respond** to a `GET` **request** to the `/` (your application's root) path. 

1. Create an `index.erb` file in your `views` folder.
1. When you navigate to `localhost:3000`, and HTML page containing fortune cookie information is displayed.
1. When the page is refreshed, a different fortune, number, and english lesson is displayed.

### Part Two: Expressurito

![burrito express](http://static1.squarespace.com/static/50b7a3f7e4b0b2821528a627/t/527bfdd4e4b02b647848a7a1/1440522239485/?format=1500w)

***Practice CRUDding data***

You're already a master of **GET, POST, DELETE**, and **PATCH** requests - time to put those skills to use in an Express app!

In your `burrito_express` folder, create the folder structure and files for a basic Express app. Create a `burritos.json` file in your `lib` folder. You should include an empty array in the JSON file.

**Implement the following features:**

1. When the user visits the index page of your app, they should see a list of burritos and a form to add a new burrito.
1. By filling out the form and hitting the 'submit' button, the user should be able to add a new burrito to the list using this form.
1. The user should be able to click a 'delete' (del-eat?) button next to any particular burrito and remove it from the list.
1. All burrito information should be persisted to `burritos.json` as a new object within an array.

##### A Sample Burrito JSON Object:

```javascript
{
  "protein" : "carnitas",
  "hasGuacamole" : true,
  "tortilla" : "flour",
  "calories" : 900
}
```

### Part Three: `this` and that 

Today, we reviewed what `this` means and talked about how to create **bound functions** -- functions whose context will stay the same, no matter what object they're invoked on.

This exercise will walk you through the creation of a module designed to take in a string and "sanitize" it, or remove/replace/obscure any unwanted characters/strings/symbols. This can come in handy if you want to screen out certain words from a chat room or on a message board, for instance.

```
// Create a module named chatMonitor
// 
// Define an array - chatMonitor.pleasantWords - with at least 3 pleasant plural nouns
// 
// Write a method - chatMonitor.sanitizeSentence - that takes a sentence (string) and
// replaces all instances of "jerks", "morons", and another plural noun of your 
// choice with a random word from your pleasantWords array. 
// Use the `.replace()` method. The second argument should be a callback.
```

#### Bonus

Your module should be able to load in banned words from an external file. Create a `banned_words.json` file containing words to filter out. Load these words into your module and modify your `sanitizeSentence` method to filter them out.

***Test out your code!***

Create a `test.js` file, require your chatMonitor module inside it, and test out your code.

Here are a few to get you started:

```
console.log(chatMonitor.checkSentence("You jerks don't know me!"));
console.log(chatMonitor.checkSentence('Ugh, these morons can\'t even bake.'));
console.log(chatMonitor.checkSentence("I can't win - they're all jerks or morons."));
```

##### Resources

- [**Regex Cheatsheet**](http://www.cheatography.com/davechild/cheat-sheets/regular-expressions)
- [**David Walsh: Using String Replace in JavaScript**](https://davidwalsh.name/string-replace-javascript) - great walkthrough of simply using the `.replace()` method.
- [**`.replace()` MDN documentation**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
