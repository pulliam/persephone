# Migrations & PostgreSQL Cheatsheet

### Postgres

|Command|Purpose|
|:-----:|:------|
| `$ psql` | Opens up the Postgres command line program from your terminal. |
| `\l` | Lists all the databases on your PG server. |
| `\c DATABASE_NAME_HERE` | Connects to a specified database. |
| `\d` | Lists out all the relations (tables etc.) in your database. |
| `\q` | Quits the `psql` program. |

### Migrations

#### From the Command Line:

Check out this [list of Rails' rake db tasks](http://jacopretorius.net/2014/02/all-rails-db-rake-tasks-and-what-they-do.html)!

|Command|Purpose|
|:-----:|:------|
| `rake db:create` | Creates your development and test databases in your PG server. |
| `rails generate migration NameHere`<br>OR<br>`rails g migration NameHere` | Creates a new timestamped migration file in `db/migrate`. |
| `rake db:migrate` | Runs any pending migrations in your `db/migrate` folder. |
| `rake db:seed` | Runs your `seeds.rb` file. |
| `rake db:rollback` | "Rolls back," or undoes your most recent migration. Run them again with `rake db:migrate`. |
| `rake db:drop` | Drops all of your app's databases. Undoes `rake:db:create`. |
| `rake db:schema:load` | Drops all tables in your database, then creates your schema anew from your `schema.rb` file. Often faster than re-running all of your migrations if you have a lot. |
| `rake db:reset` | Drops the databases for this app, loads your current schema and re-seeds your database. |

#### How to Write Migration Files:

- **[Rails Docs](http://api.rubyonrails.org/classes/ActiveRecord/Migration.html) for migrations!**
- **[Rails Guide](http://edgeguides.rubyonrails.org/active_record_migrations.html) for migrations!**
