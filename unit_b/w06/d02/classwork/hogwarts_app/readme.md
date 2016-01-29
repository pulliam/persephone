# MORE SQL!

## Creato Databasio!

You've been hired to create a database to track students at a prestigious 
boarding school in rural England.
Let's say we want to track each students name, start_year and house.

Create a folder inside today's classwork called `hogwarts_app`

Take 5 minutes to create a `schema.sql` file.

## SQLious Insertus!

Take 5 minutes to create a `seed_data.sql` file that should insert a new 
record for "Harry Potter", 1991, "Gryffindor" and one for "George Weasley", "Gryffindor", 1989

## Rubinious Helpus!

Take 5 minutes to create a `database_config.rb` that 

- requires the sqlite3 gem
- establishes a new database connection and assigns it to a global variable.
- configures the databse to return results as hashes
- configures the database to automatically do type conversion 

Take 5 minutes to create a `seeds.rb` file that 

- requires the `database_config` file
- inserts a new record for "Draco Malfoy", "Slytherin", 1991
- inserts "Ginny Weasley", "Gryffindor", 1992
- inserts "Luna Lovegood", "Ravenclaw", 1992
- use placeholder parameters (?)
