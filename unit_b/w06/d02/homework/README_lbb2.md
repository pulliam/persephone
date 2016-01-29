# Little Black Book, Part II

![](http://farm4.static.flickr.com/3474/3255821552_67cea08661.jpg)


Technologies:

- Sinatra
- SQLite3


Create a web application using SQLITE3 & Sinatra that will bring the LBB to the web!

The application should have the following routes:

| HTTP VERB | Route | Hidden Body Params| View | Purpose |URL Path Ex.|
|:---------:|:-----:|:----:|:----:|:-------:|:----------:|
| GET       | /entries     |      | index| Show each|        localhost:3000/entries/    |
| GET       | /entries/new |      | new  | Show form|        localhost:3000/entries/new |
| POST      | /entries     |      | --   | Create one|       localhost:3000/entries/    |
| GET       | /entries/:id |      | show | Show one|         localhost:3000/entries/1   |
| POST      | /entries/:id | _method=delete  |  --| Deletes one|      localhost:3000/entries/1/delete   |

**NOTE:**
As noted in the table, the route that deletes an entry needs to have a parameter called `_method` with in the request body that has a value of `delete`. This can be achieved by using a hidden input field in the form with a `value` attribute.