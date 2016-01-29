#### Mason Jar Music

![](http://www.diynatural.com/wp-content/uploads/2012/07/mason_jars1.jpeg)

You're working for a hip new music label. One of their first projects is to re-release the hits of the Roaring Twenties.

For your first assignment you'll be helping them create a sweet web application to manage their catalog. The company managers would like their new catalog to be searchable by rank, artist last name, artist full name, song title, and release year.




| Rank | Artist | Song | Release Year |
|------------|--------------------------------|------------------------------------|----|
|1           |Al Jolson                       |Swanee                              |1920|
|2           |Paul Whiteman                   |Whispering                          |1920|
|3           |George Gershwin                 |Rhapsody in Blue                    |1924|
|4           |Gene Austin                     |Bye Bye, Blackbird                  |1926|  
|5           |Bessie Smith                    |Down Hearted Blues                  |1923|
|6           |Ben Bernie                      |Sweet Georgia Brown                 |1925|
|7           |Vernon Dalhart                  |The Prisoner's Song                 |1925|
|8           |Eddie Cantor                    |Makin' Whoopee                      |1929|
|9           |Jimmie Rodgers                  |T For Texas (Blue Yodel No 1)       |1928|
|10          |Hoagy Carmichael                |Stardust                            |1927|
|11          |Isham Jones                     |It Had to Be You                    |1924|
|12          |Al Jolson                       |California, Here I Com              |1924|
|13          |Fanny Brice                     |My Man                              |1922|
|14          |Gene Austin                     |My Blue Heaven                      |1927|
|15          |Fats Waller                     |Ain't Misbehavin'                   |1929|
|16          |Frankie Trumbauer               |Singin' the Blues                   |1927|
|17          |Bessie Smith                    |St Louis Blues                      |1925|
|18          |Paul Whiteman                   |Three O'Clock in The Morning        |1922|
|19          |Al Jolson                       |April Showers                       |1922|
|20          |Ethel Waters                    |Am I Blue?                          |1929|
|21          |Helen Kane                      |I Wanna Be Loved By You             |1928|
|22          |Arthur Gibbs & his Gang         |Charleston                          |1924|
|23          |Al Jolson                       |Toot Toot Tootsie (Goodbye)         |1922|
|24          |Duke Ellington                  |Black & Tan Fantasy                 |1928|
|25          |Paul Robeson                    |Ol' Man River                       |1928|
|26          |Al Jolson                       |Sonny Boy                           |1928|
|27          |Isham Jones                     |Swingin' Down the Lane              |1923|
|28          |Jack Smith                      |Me & My Shadow                      |1927|
|29          |Louis Armstrong                 |West End Blues                      |1928|
|30          |Billy Jones                     |Yes! We Have No Bananas             |1923|


Reorganize the table data into something more useful. Be mindful that you'll be asked to write a set of search functions after you've massaged that data.

##### Finish the following methods:
***Hint:** Those enumerable methods sure come in handy.

```ruby
def search_by_rank(rank)
  # I should return a single song or nil.

end

def search_by_year(year)
  # I should return an array of zero or more songs.

end

def search_by_title(title)
  # I should return an array of zero or more songs.

end

def search_by_artist_last_name(last_name)
  # I should return an array of zero or more songs.

end

def search_by_artist_full_name(full_name)
  # I should return an array of zero or more songs.

end

```

**Bonus:**

Refactor the previous methods into one `search` method that can search by year, title, last_name, full_name, or rank.

**Super Bonus 1:**

Redefine the methods you used underneath the hood to write the `search_by_x` methods above.Example, if you used the `shuffle` method. Define shuffle from scratch.

You may want to research the `yield` keyword in Ruby.
  
  - In short `yield` is a reference to the `block` being passed into the method.
  - It should have arguments passed into it, e.g. `yield(1, 2)`, arguments that match up with the block parameters, e.g. `| block_parameter, block_parameter_2 |).


**Super Bonus 2:**

Look up the `pluck` method and reimplement it yourself from scratch.
