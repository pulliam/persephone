# Scraper

We've been asked to create a command line tool that will scrape popular newsites for headlines and print them in the terminal. Node the the rescue!

## Setup

Create a package.json file and install "request" and "cheerio" as dependencies.

## Request

https://github.com/request/request

Review the request documentation and answer the following questions:

- What are the basic arguments in the top example?
- What arguments are passed to the callback?

Create a file called "nytimes.js" that requires request and console.log's the front page of the NYTime's body.

## Cheerio

https://github.com/cheeriojs/cheerio

Review the cheerio documentation and answer the following questions:

- Why does Node need a DOM parser?
- What's the preferred method for passing in an HTML document?
- What's the syntax to select DOM nodes?

Using request and cheerio can you console.log all the headlines from the "#top-news" section of the NYTimes?

Bonus

What if your users wanted a series of search terms that would be highlighted in headlines?
Can you use chalk to highlight specific terms like "Obama", "Clinton", etc?
