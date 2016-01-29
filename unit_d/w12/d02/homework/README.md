# A Polite Request

![please, sir](https://s3.amazonaws.com/static.guildlaunch.net/blog/tumblr_inline_nu13w9s7Pq1qi9fgw_500.jpg)

Tonight, you'll be practicing creating modules that use the npm `request` library to make HTTP requests from your JavaScript/node programs.

### Objectives:

1. Use `npm init` and `npm install` to create and manage your project/app's dependencies through a `package.json` file.
1. Continue to get more comfortable using callbacks in the asynchronous world of JavaScript.
1. Practice using the `fs` module to create files.

***Complete at least 3 of the following prompts.*** Work in the correct folder and **create a new `package.json`, `app.js`, and module file for each prompt.**

## `request` & APIs

### Fetch articles from the NYTimes

#### [http://developer.nytimes.com/](http://developer.nytimes.com/)

`app.js` code:

```
var nytimes = require('./nytimes.js');
nytimes.articleSearch('biden', function(results){
  console.log(results); // article data about Biden
});
```

### Create a URL shortener

#### [http://dev.bitly.com](http://dev.bitly.com)

`app.js` code:

```
var bitly = require('./bitly.js');
bitly.shorten('http://www.nytimes.com', function(link){
  console.log(link);
})
```

## Writing to Files

### Fortune Cookie

#### [http://docs.fortunecookie.apiary.io/](http://docs.fortunecookie.apiary.io/)

Create a command line program that provides fortune cookie information to the user.

##### Part One: Eat the Cookie

When your program is run, it should log a fortune, lucky numbers, and a chinese lesson to the console.

##### Part Two: Save it for Later

In addition to the above, your program should create a new text file called `fortune.txt` containing the cookie's information.

**Sample usage:**

```bash
$ node fortune.js
> YOUR FORTUNE:
> Use not today what tomorrow will need.
> Lucky Numbers: 43, 46, 24, 50, 4, 37
> Chinese Lesson:
> 去______的票多少钱? (qù _____ de piào duō shǎo qián?)
> English: How much is a ticket to _____?
> Fortune saved to `fortune.txt`.
```

`fortune.txt`

```
YOUR FORTUNE:
"Use not today what tomorrow will need."
Lucky Numbers: 43, 46, 24, 50, 4, 37
Chinese Lesson:
去______的票多少钱? (qù _____ de piào duō shǎo qián?)
English: How much is a ticket to _____?
```

**Fun Bonus:** Use the `chalk` npm package to colorize your fortune cookie's output!

### Movie House 2.0

#### [http://www.omdbapi.com/](http://www.omdbapi.com/)

Create a program that, when run, will allow Gerard Von Schtiffel to generate and save movie posters.

You will need to create an `omdb` module with the following methods defined on it:
  - `search` - searches the OMDB database for a movie by title and returns an array of possible matches.
  - `get` - returns the data for a particular movie by ID.
  - `createPoster` - generates the HTML necessary for a new movie poster and saves it to an appropriately named file inside the `posters` folder.

As writing files and making HTTP requests happen asynchronously, all of these methods will need to take a callback function. For example, your search function might be structured something like this:

```javascript
// inside your omdb.js module file

omdb.search = function(query, callback) {
  var url = 'YOUR API REQUEST URL HERE'
  request.get(url, function(err, response, body){
    if (!error && response.status == 200) {
      callback(JSON.parse(body));
    }
  })
};
```

Then, when you actually **invoke** the function within your `app.js` file, you'd need to provide a callback as an argument.

```javascript
// inside your app.js file - pseudocode for sure
// if (the user wants to search) {
  // invoke the omdb.search function:
  // omdb.search(movieTitleHere, function(arrayOfMovies) {
    // Do something with the array of movies in here! 
    // Perhaps let the user know what the movie's IDs are.
  //})
//}
```

##### Part One: List of Movies

When the user runs your program with the `search` command, they should be presented with a list of matching movie titles and corresponding IDs.

**Example:**

```bash
$ node app.js search Titanic
> Titanic - tt0120338
> Titanic II - tt1640571
> Titanic: The Legend Goes On... - tt0330994
# ...etc
```

##### Part Two: Find that Movie

When a user runs your program with the `get` command and a valid ID, they should be presented with the returned movie's data.

```bash
$ node app.js get tt0120338
> Movie Info:
> Title: Titanic
> Year: 1997
> Rating: PG-13
> Summary: A seventeen-year-old aristocrat falls in love with a kind, but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.
```

##### Part Three: Render that Poster!

When the user runs your program with the `generate` command and a valid ID, your program should generate an HTML file containing the movie's title, image, year, rating and a summary and save it to an appropriately named file inside the `posters` folder.

```bash
$ node app.js generate tt0120338
> New poster saved to ./posters/titanic.html !
```

***Bonus/Make Your Life Easier:*** 

1. Create an HTML template for your movie posters and save it.
2. Use the [`ejs` npm package](https://www.npmjs.com/package/ejs) to render your template before you save it.

**EJS stands for "Embedded JavaScript,"** and is extremely similar to the ERB we used in our Sinatra/Rails templates. There are several ways to use it - I suggest using the following syntax:

```javascript
ejs.render(templateString, dataObject);
``` 

Try pseudocoding out the steps you'll need to take in order to accomplish this! You'll certainly need to make your request, read in your template file, render the template with your movie's information, write the HTML file, and then let the user know you've completed all the steps!



