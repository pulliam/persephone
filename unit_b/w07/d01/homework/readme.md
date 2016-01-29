# Fanny-Pack Fanaticism

![the rock](./public/fanny_pack.jpg)

# Setup

```
$ sqlite3 fanny_pack_db.sqlite3 < schema.sql 
```

Create a new `seeds.rb` file that will seed your database with the information found in `fanny_pack_seeds.sql`. Use your new Ruby file to seed your database.

# Fix

Fix all the errors to get your app running!

File          | Number of Errors
:--           | :--
config.ru     | 1
app.rb        | 3
fanny_pack.rb | 1
schema.sql    | 2
views/        | 5

# Refactor

Replace the SQL queries in each route handler with ActiveRecord.

Reorganize the application to include a `db`.

Create a `db/config.rb` file to configure ActiveRecord.

Move `fanny_pack.rb` into a `models` folder and configure it to inherit from ActiveRecord.

# Implement

Create a "DELETE" button.

Can you enable [`method_overide`](http://www.sinatrarb.com/configuration.html#methodoverride---enabledisable-the-post-method-hack) so that your routes are as follows:

| Action  | HTTP Verb | SQL    | ActiveRecord
:--       |:--        |:--     | :--
| Create  | POST      | INSERT | .new & .save or .create
| Read    | GET       | SELECT | .all or .find
| Update  | PATCH     | UPDATE | .update
| Destroy | DELETE    | DELETE | .destroy
