# Müvie Haus Tew

![:image](http://www.thesequelmovie.com/TheSequelTypedRB.gif)

1. Gerard Von Schtieffel has requested that we implement an authentication 
system.

- Gerad wants anyone to be able to view or search for movies.
- Gerad wants only wants logged in users to be able to save or delete movies.

You can refer to the [this guide](https://github.com/ga-students/wdi-persephone/blob/master/guides/user_auth_rails.md)!

1. OMDB is great, but not always perfect (just try searching for Amelie). Modify your code/request so that when Gerard types in a title or keyword, a **list of movies** is displayed. Allow him to choose which result from the list to create a poster for.

1. Gerard spends most of his time in the basement of the theater, bathed in the bluish-grey light of aging projectors and surrounded by the music of the [Mighty Wurlitzer](https://en.wikipedia.org/wiki/Wurlitzer), knowing nothing of the weather outside. Try using the [Weather Underground API](http://www.wunderground.com/weather/api/) to **display the current weather** on your application's page so that he never has to leave the house again.


# Bonus

Gerad wants to be able to schedule movie screen dates.

Can you add a schedule model with a `start_on`, `end_on` and `movie_id`?

- When a user visits "/screenings?n=DATE" and DATE is between a movie's 
scheduled start and end dates, then they should see that movie. 
