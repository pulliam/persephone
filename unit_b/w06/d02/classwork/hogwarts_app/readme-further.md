# Taking it further

We can query our database directly from sqlite3 or we can use the sqlite3 gem
to do it through Ruby. Let's take another step back and see if we 
can query our Database via HTTP!

Inside of `hogwarts_app` create the basic files for a Sinatra application.

# Sinatra

No need to mess with any database config at this point. Let's just get some basic HTML and routes set up!

When a user visits "localhost:9292" 
- they should see an `h1` with the text "Welcome to Hogwarts" and
- anchor tag that says "Houses"

When a user clicks on "Houses" 
- they should be directed to "/houses" and 
- they should see an `h1` with the text "here are the houses"

# Connecting the DB

Add your `database_config.rb` file to `config.ru`

When the server handles a `GET` request to `/houses` we should query
the database for all the houses.
