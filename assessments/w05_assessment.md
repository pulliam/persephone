# WDI Week 05 Assessment

Congrats on making it through week five!

This week, we learned about advanced Ruby, HTTP, using Sinatra as a server to respond to client requests, and how to serve up dynamic webpages with Sinatra and ERB templates.

> Write your answers in the prompts in the boxes below:

#### Question 1

When we create `App::Server` for a Sinatra application, what class should `App::Server` inherit from?

<br>
<br>
<br>
<br>


#### Question 2

Given the following file structure:

```bash
/my_app
  /views
  /public
  config.ru
  server.rb
```

Write out the contents of your `config.ru` file below:


<br>
<br>
<br>
<br>
<br>


#### Question 3

Based on this url string:

```
localhost:3000/philadelphia/animals/kitten?cuteness=max&adopted=false
```

and this server route string:

```
"/:location/animals/:type"
```

list out all of the parameter names and their values. Don't forget the query parameters.


<br>
<br>
<br>
<br>
<br>


#### Question 4

Write a class called `Puppy` that we can create puppies with:

```ruby
# ex:
dunkin = Puppy.new("Dunkin", "Yorkshire Terrier", 5)
```

 It should have the following attributes:

- name
- breed
- cuteness
- age # defaults to 0 no matter what
- alive # defaults to true no matter what

The following reader methods :

- `#name`
- `#breed`
- `#cuteness`
- `#age`
- `#alive`

The following writer methods.

  - NONE. Stop trying to reach into the poor puppies!

The following additional instance methods:

  - `#die!` # makes @alive false. returns nil if @alive is already false.
  - `#have_birthday` # adds one to @age and returns @age


<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>



#### Question 5

Based on the following data:

```ruby
@socks = [
  {
    style: "argyle",
    size: 9,
    color: "pink",
    length: "knee" 
  },
  {
    style: "solid",
    size: 11,
    color: "brown",
    length: "mule" 
  },
  {
    style: "doily",
    size: 6,
    color: "orange",
    length: "crew" 
  }
]
```
And template:

```html
<ul>
  <% @socks.each do |sock| %>
    <% if sock[:length] == "mule" %>
      <li>
        Style: <%= sock[:style] %>
        <br>
        Size: <%= sock[:size] %>
        <br>
        Color: <%= sock[:color] %>
        <br>
        Length: <%= sock[:length] %>
      </li>
    <% end %>
  <% end %>
</ul>
```

Write out the resulting HTML:

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>


#### Question 6

Given the `@socks` array in Question 5, write ruby code that will return just the size 6 socks and put it into a new variable called `@size_six_socks`.

<br>
<br>
<br>
<br>
<br>
<br>

#### Question 7

Fix `shark with laser beam` so that is a valid Ruby local variable following ruby conventions.

<br>
<br>
<br>

Fix `shark with laser beam` so that is a valid Ruby instance variable following ruby conventions.

<br>
<br>
<br>

Fix `shark with laser beam` so that is a valid Ruby class variable following ruby conventions.

<br>
<br>
<br>


Fix `shark with laser beam` so that is a valid Ruby class or module name following ruby conventions.

<br>
<br>
<br>

Fix `shark with laser beam` so that is a valid Ruby constant following ruby conventions.

<br>
<br>
<br>

Fix `shark with laser beam` so that is a valid CSS selector following CSS conventions.

<br>
<br>
<br>


Fix `shark with laser beam` so that is a valid JavaScript local variable following JavaScript conventions.

<br>
<br>
<br>

Fix `shark with laser beam` so that is a valid file name following ruby conventions.

<br>
<br>
<br>

#### Question 8

Write Sinatra route handlers for the following two pieces of HTML code.

What values are available inside of params?

```
<a href="/mens_wearhouse?sale=true&lt=100">Sale Items Less Than $100</a>
```

<br>
<br>
<br>
<br>
<br>
<br>

```
<form method="POST" action="/mailbox">
  <input type="text" name="title">
  <input type="text" name="body">
  <input type="submit" value="Send">
</form>
```

<br>
<br>
<br>
<br>
<br>
<br>

#### Question 9

Write the HTML code that would create the following HTTP requests:

```
GET /search?q=turtles HTTP/1.1
Host: www.google.com

```

<br>
<br>
<br>
<br>

```
POST /turtles?redirect=dashboard HTTP/1.1
Host: nba.com

name=leo&bandana=blue
```

<br>
<br>
<br>
<br>
<br>

#### Question 10

What do the following status codes mean?

Code | Meaning
:--  | :--
200  | 
303  | 
404  | 
500  | 
