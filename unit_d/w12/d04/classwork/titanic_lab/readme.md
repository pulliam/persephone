# Titanic

![:image](http://www.etonline.com/movies/2015/02/24134345/set_titanic_640.jpg)

> The place where my heart should be will go on

The goal of this lab is to practice peforming client-side requests with Ajax and client-side templating with Handlebars.  Bonus: scrape real world data using `request` and `cheerio`.

# Getting started

From scratch, create a simple Express server. Once you've got "hello world" working, implement the following features in your app:

1. When a user visits "/", they should see an index page with an h1 that says "Titanic" and links that says "Manifest" and "ICEBERG!"

1. When a user clicks on "Manifest", prevent the link's _default behavior_ and instead perform an Ajax GET request to "/passengers".

1. When the server receives a GET request to "/passengers", send back the JSON inside "lib/passengers.json" as a response.

1. When the client receives the JSON response, use Handlebars templating to render the list on the page.

# ICEBERG!

1. When a user visits "/iceberg" they should see a link that says "Look out!"

1. When a user clicks on "Look out!", prevent the link's default behavior and instead perform an Ajax GET request to "/passengers"

1. When the client receives the JSON response from the "/passengers" request, render a new passenger to the DOM every 2 seconds. Use Handlebars templating.

1. When a user clicks on a passenger's name, perform a new Ajax post request that posts the passenger's name to "/rescued". Remove that passenger from the DOM.

1. When the server receives a post request to "/rescued" write that passenger's name to a JSON file called "rescued.json"

1. When a passenger is appended to the DOM, use window.setTimeout to automatically remove them after 5 seconds.

1. When a passenger is automatically removed, perform an Ajax delete request  to "/lost_souls" that sends that passenger's name to the server.

1. When the server receives a delete request to "/lost_souls" write that passenger's name to a JSON file called "lost_souls.json"

# Bonuses

Take a look at Intro to Bower.  NPM is for managing server-side dependencies as Bower is for managing client-side.  See if you can add jQuery and Handlebars via Bower.

Create a node module called "titanic" that will use "request" and "cheerio" to scrape the passenger list from [Wikipedia's list of passengers](https://en.wikipedia.org/wiki/Passengers_of_the_RMS_Titanic#Passengers).Format the data so that it returns an array of JavaScript objects with name, age and location.
