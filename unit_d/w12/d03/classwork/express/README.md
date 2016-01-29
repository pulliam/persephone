# Express.js

## Objectives

- Review the essential functions of a server
- Understand how to setup a simple Express app
- Be able to write a CRUD app using Express and JSON files.


## Express 

[Express Guide](./express_guide.md)

#### A Note on Data Persistence

Instead of a full-fledged database management system, we'll be using json files to read and write our data. That means we'll be using `fs.readFile`, `fs.writeFile`, `JSON.parse`, and `JSON.stringify`.

## Exercises

### Sample App Part I:

Follow the Express Setup Guide and use the starter files provided in the sample_app project to create an Express server that sends the browser 'Hello' when it goes to the root '/' route.

### Sample App Part II:

Rewrite the root '/' route so that instead of sending 'Hello', it reads and sends the contents of the index_text.json file.

You'll need the `fs.readFile` and `JSON.parse` methods again.

### Sample App Part III:

Write a new route, GET '/randomword', that reads the contents of words.json file, parses it and sends a random word. Remember to look in the json file to see the structure of the data.

You'll need the `fs.readFile` and `JSON.parse` methods again.

Write another new route, GET '/randomword/rhyme', that a random word from the words.json file, gets a word that rhymes with it, and sends back the rhyming word.

### Sample App Part IV:

Create a view called `new.ejs` which renders a form to create a new random word.
Write a new route, GET '/randomword/new', that sends back the `new.ejs` template.
Write a new route, POST '/randomword', that adds a new word to our collection of words and writes it into the words.json file.


### The Empire Part I:

The Empire needs your help keeping track of its TIE squadron pilots.

The following starter files have been created for you in the empire project directory.
Follow the Express setup guide to finish setting up your express app.*

\* Make sure you look through the file contents to see what is given to you and what is not.

```bash
.
├── app.js
├── squadron_data
│   ├── black_squadron.json
│   ├── cloak_squadron.json
│   └── dagger_squadron.json
└── views
    ├── index.ejs
    └── show.ejs
```


#### Routes

Write the following routes, along with their corresponding route handlers (callbacks) and views:

- a GET '/' route that just sends 'Welcome to the TIE Squadron Database' to the browser
- a GET '/black' route that renders a list of the TIE pilots in the Black Squadron
- a GET '/black/:id' route that renders a single the TIE pilot in Black Squadron with that id 

### The Empire Part II:

Now that we're able to read about the Black Squadron, let's add routes to create, edit/update, and delete Black Squadron members.

### The Empire Part III:

Now create routes for the other squadrons.

### The Empire Part IV:

Refactor the name squadron routes like '/black' route and the '/black/:id' into a single set of routes that can be used for any squadron. The paths will become something like '/:squadron' and'/:squadron/:id', but you'll also need to update the route handler callback function to work properly.

