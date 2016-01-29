# Use Node's Request package to create new node modules to handle API calls

Create new JavaScript files for each then require them in `index.js`.

Don't forget to use module.exports for each file.

Refer to each section's API documentation for how you would retrieve data.
If you receive JSON make sure your return a parsed version.
Each section below has a suggested code sample of how it should work.

> Note! In many cases the returned result should be a subset of the API response.
> For instance if a response from an API is `{results: 1, content: {name: "Bill"}}`
> just return '{name: "Bill"}'

### Fetch a Random User

https://randomuser.me/

```js
var randomUser = require('./random_user.js');
randomUser.get(function(user){
  console.log(user.gender);  // "male"
});
```

### Rhyme

http://rhymebrain.com/api.html

```js
var rhymeBrain = require('./rhyme_brain.js');
rhymeBrain.rhyme('hello', function(word){
  console.log(word); // 'flow'
})
```

### Quote of the Day

https://theysaidso.com/api/

```js
var theySaidSo = require('./they_said_so.js');
theySaidSo.quoteOfTheDay(function(quote){
  console.log(quote.author); // "Albert Eistein"
})
```

# Challenge!

Can you combine your rhyme and quote of the day modules and return a quote where each word is replaced with a rhyming word?

# Bonuses

### Check the weather

http://openweathermap.org/api

```js
var openWeather = require('./open_weather');
openWeather.city('London,UK', function(data){
  console.log(data.main); // 'Rain'
});
```

### Create a URL shortener

http://dev.bitly.com/get_started.html

> You'll need to generate a generic oauth token!

```js
var bitly = require('./bitly.js');
bitly.shorten('http://www.nytimes.com', function(url){
  console.log(url); // http://j.mp/1UsaQch
})
```

### Fetch articles from the NYTimes

http://developer.nytimes.com/

```js
var nytimes = require('./nytimes.js');
nytimes.articleSearch('biden', function(articles){
  console.log(articles); // Array of articles
  console.log(Array.isArray(articles)); // true
});
```
