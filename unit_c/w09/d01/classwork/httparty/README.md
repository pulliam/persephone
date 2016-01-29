# Third Party APIs, HTTParty, and JSON.

![](http://actinumeventz.com/party/images/bp.jpg)

## Review:

- What is an Application Programming Interface (API)? 

## Objectives:

- Understand third party APIs, their function, and their relationship to our web applications.
- Be able to access 3rd party APIs using the HTTParty gem.
    - [HTTParty Docs](http://www.rubydoc.info/github/jnunemaker/httparty/HTTParty/ClassMethods).
    - [HTTParty Source Code](https://github.com/jnunemaker/httparty)
- Understand the response data format: JavaScript Object Notation ([JSON](https://simple.wikipedia.org/wiki/JSON))
- Be aware of other response data formats, namely [XML](https://en.wikipedia.org/wiki/XML).


## Important Gems and Methods

Gems:

- httparty
- json
- uri

Methods:

- URI.escape (Makes sure that the string complies with URI formatting rules)
- HTTParty.get (Makes a GET request)
- HTTParty.post (Makes a POST request)
- JSON.parse (Parses a json string into ruby data)
- JSON.pretty_generate (Turns ugly json into pretty print)

## Third Party APIs

An API is the public facing interface of something including objects, machines, and servers.

Third Party APIs are APIs that you don't own. They refer to external servers that provide endpoints, i.e. interfaces, that provide services, namely information or data processing.

## HTTParty

HTTParty is a ruby gem that simplifies making HTTP requests and parsing its responses.

- [HTTParty Docs](http://www.rubydoc.info/github/jnunemaker/httparty/HTTParty/ClassMethods).
- [HTTParty Source Code](https://github.com/jnunemaker/httparty)
- [Simple Guide from Team Treehouse](- http://blog.teamtreehouse.com/its-time-to-httparty
)

## JSON

JavaScript Object Notation (JSON) is the data format of choice for APIs. JSON and other data formats are used in lieu of HTML because we don't want markup, just data.

JSON is currently preferred, because it is powerful, easy to use, and easy to read. It is ultimately a string that has been formated so that it can be parsed back into data types and structures recognized by programming languages like JS and Ruby.

JSON looks like a Javascript Object, but it has stricter rules. The most obvious one is that all keys must be wrapped in quotes.

Example:
```json
{
  "response": {
  "version": "0.1",
  "termsofService": "http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "astronomy": 1
  }
  },
  "moon_phase": {
  "percentIlluminated": "81",
  "ageOfMoon": "10",
  "current_time": {
  "hour": "9",
  "minute": "56"
  },
  "sunrise": {
  "hour": "7",
  "minute": "01"
  },
  "sunset": {
  "hour": "16",
  "minute": "56"
  }
  }
}
```

## Keeping Your Keys Secret, an Intro

### .gitignore

`.gitignore` file (and `.gitignore_global` file) contain of list of filenames and types that you don't want to be checked into git. You create a `.gitignore` file for each repo. `.gitignore_global` lives in your user directory, `~` and applies its rules to everything.

### ENV and .bash_profile

Instead of adding keys to files it is a best practice to add them to your ENV. You can do so by adding something like `export GIPHY_PUBLIC_KEY=dc6zaTOxFJmzC
` to your `.bash_profile`. Remember to open a new bash terminal tab to load the new ENV variable. This is the same way that you access ENV variables in Heroku.

## Practicing

WE DO:

1. Create a command line application that allows a user to search the giphy api and returns one item back
    - `ruby giphy_search.rb silly cat` should return one giphy json object describing a silly cat giphy.

<!-- ```ruby
require 'httparty'
require 'json'
require 'uri'

search = ARGV.join("+")
search = URI.escape(search)

response = HTTParty.get("http://api.giphy.com/v1/gifs/search?q=#{search}&limit=1&api_key=#{ENV["GIPHY_PUBLIC_KEY"]}")

puts JSON.pretty_generate(response)
``` -->

YOU DO:


1. Create a command line application that allows a user to look up the current weather conditions in any given U.S. city
    - `ruby wunderground_conditions.rb San Francisco CA`

1. Create a command line application that allows a user to search the NYTimes for articles related to a certain celebrity.
    - `ruby nytimes_article_search.rb Harrison Ford`

1. Rewrite the functionality of the above commandline programs into a basic sinatra app with the following endpoints. 
    - `/giphy/search?silly+cat` should return us a single gif of a silly cat.
    - `/wunderground/conditions?state=CA&city=San+Francisco` should return the current conditions in San Francisco, CA.
    - `/nytimes/articles/search?celebrity=Harrison+Ford` returns a list of articles that mention Harrison Ford.

    
    
### Additional Resources:

- http://blog.teamtreehouse.com/its-time-to-httparty
- [Prettify JSON](http://jsonprettyprint.com/)
- [Validate JSON](http://jsonlint.com/)
