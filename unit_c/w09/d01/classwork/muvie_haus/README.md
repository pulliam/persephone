# Müvie Haus
![](./img/at_the_movies.jpg)

You have just been hired by a small independent movie house, appropriately named - Müvie Haus. What follows is a description of your client's problem and requirements for a solution.

## Problem

Müvie Haus's owner, Gerard Von Schtieffel, needs a way of creating informative posters to display on his cinema's website for each movie that is playing. His hands are brittle and arthritic, though, and he can't spend much time typing information about his upcoming titles into the computer. _Technology to the rescue!_

You'll be querying the [OMDB API](http://www.omdbapi.com/) for information about movies that Gerard specifies. You'll be using this information to display the posters of each movie in a "Now Playing" list on Gerard's website!

## Requirements

1. Gerard must easily be able to add new films to the list of movies that are playing at the cinema because he is constantly changing the lineup.
1. Gerard should be able to generate a poster simply by entering in the name of a film.
1. Each poster must contain the following information - the title, runtime, rating (ie, R, PG-13), year of release, and a list of actors who starred in the film.
1. Gerard wants to be able to see a list of all movies that are now playing.
1. Gerard must be able to remove posters from the list of films that are now playing.
1. Gerard must be able to edit existing posters.

### Technologies

You'll be using Rails along with the [HTTParty](http://johnnunemaker.com/httparty/) gem to create Gerard's application.

***Keep in mind*** 

- Draw out the flow of your application before you begin. Think about how your client will use your application.
- Once you know how your application should function, determine what files/folders/components you'll need to create.
- Think it over - where should the logic for searching for/creating a new movie go? In what controller? What kind of data will you need to store? At what point in your application's flow will the request to the OMDB API be made? 
- Before you worry about saving a new poster to your database, makes sure you know what data is coming back from your API. `puts` it, test the endpoint in the browser, use `binding.pry` to get a look inside what your code is doing.

**Resources**

- [JSON Formatter](https://jsonformatter.curiousconcept.com/) - make your JSON responses easier to navigate/look at.
- [OMDB Api](http://www.omdbapi.com/) - test out the API in the browser and check out the kinds of parameters you can use in your requests.

## Bonus

1. OMDB is great, but not always perfect (just try searching for Amelie). Modify your code/request so that when Gerard types in a title or keyword, a **list of movies** is displayed. Allow him to choose which result from the list to create a poster for.
1. Gerard spends most of his time in the basement of the theater, bathed in the bluish-grey light of aging projectors and surrounded by the music of the [Mighty Wurlitzer](https://en.wikipedia.org/wiki/Wurlitzer), knowing nothing of the weather outside. Try using the [Weather Underground API](http://www.wunderground.com/weather/api/) to **display the current weather** on your application's page so that he never has to leave the house again.
