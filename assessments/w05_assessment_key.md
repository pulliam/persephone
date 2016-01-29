# WDI Week 05 Assessment

Congrats on making it through week five!

This week, we learned about advanced Ruby, HTTP, using Sinatra as a server to respond to client requests, and how to serve up dynamic webpages with Sinatra and ERB templates.

> Write your answers in the prompts in the boxes below:

#### Question 1

When we create `App::Server` for a Sinatra application, what class should `App::Server` inherit from?

```ruby
Sinatra::Base
```


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

```ruby
require('sinatra')
require_relative('server')

run App::Server
```

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

```ruby
params[:location] # "philadelphia"
params[:type]     # "kitten"
params[:cuteness] # "max"
params[:adopted]  # "false"
```

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

```Ruby
class Puppy

  attr_reader :name, :breed, :age, :cuteness, :alive

  def initialize(name, breed, cuteness)
    @name = name
    @breed = breed
    @cuteness = cuteness
  end

  def die!
    if !@alive
      nil
    else
      @alive = false
    end
  end

  def have_birthday
    @age += 1
  end
end
```


#### Question 5

Based on the following data:

```ruby
@socks = [
  {
    style: "argyle,
    size: 9,
    color: "pink",
    length: "knee" 
  },
  {
    style: "plaid,
    size: 6,
    color: "blue",
    length: "1/4 hose" 
  },
  {
    style: "solid,
    size: 11,
    color: "brown",
    length: "mule" 
  },
  {
    style: "doily,
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
```html
<ul>
      <li>
        Style: solid
        <br>
        Size: 11
        <br>
        Color: brown
        <br>
        Length: mule
      </li>
</ul>
```

#### Question 6

Given the `@socks` array in Question 5, write ruby code that will return just the size 6 socks and put it into a new variable called `@size_six_socks`.

```ruby
@size_six_socks = @socks.select { |sock| sock[:length] == 6 }
```

#### Question 7

Fix `shark with laser beam` so that is a valid Ruby local variable following ruby conventions.

```ruby
shark_with_laser_beam
```

Fix `shark with laser beam` so that is a valid Ruby instance variable following ruby conventions.

```ruby
@shark_with_laser_beam
```

Fix `shark with laser beam` so that is a valid Ruby class variable following ruby conventions.

```ruby
@@shark_with_laser_beam
```

Fix `shark with laser beam` so that is a valid Ruby class name following ruby conventions.

```ruby
SharkWithLaserBeam
```

Fix `shark with laser beam` so that is a valid Ruby module name following ruby conventions.

```ruby
SharkWithLaserBeam
```

Fix `shark with laser beam` so that is a valid Ruby constant following ruby conventions.

```ruby
SHARK_WITH_LASER_BEAM
```

Fix `shark with laser beam` so that is a valid CSS selector following ruby conventions.

```css
.shark-with-laser-beam
```

Fix `shark with laser beam` so that is a valid file name following ruby conventions.

```bash
shark_with_laser_beam.rb
```

# HTML 

Write Sinatra route handlers for the following two pieces of HTML code

What values are available inside of params?

```
<a href="/mens_wearhouse?sale=true&lt=100">Sale Items Less Than $100</a>
```

```ruby
get("/mens_wearhouse")
  
end
```

Parameters available are `sale` and `lt`.
The value of `params[:sale]` is `"true"`.
The value of `params[:lt]` is `"100"`.


```
<form method="POST" action="/mailbox">
  <input type="text" name="title">
  <input type="text" name="body">
  <input type="submit" value="Send">
</form>
```

```ruby
post("/mailbox")

end
```

Parameters available are `title` and `body`.
The value of `params[:title]` is the string that the user inputed.
The value of `params[:body]` is the string that the user inputed.


# HTTP Requests

Write the HTML code that would create the following HTTP requests

```
GET '/search?q=turtles' HTTP/1.1
Host: www.google.com

```

```html
<a href="www.google.com/search?q=turtles"></a>
```
OR if you're already at `www.google.com`
```html
<a href="/search?q=turtles"></a>
```
OR as a form

```html
<form method="GET" action="/search">
  <input type="text" name="q" value="turtle">
  <input type="submit" value="Submit">
</form>
```

```
POST '/turtles?redirect=dashboard' HTTP/1.1
Host: nba.com

name=leo&bandana=blue
```

```html
<form method="POST" action="/turtles?redirect=dashboard">
  <input type="text" name="name" value="leo">
  <input type="text" name="bandana" value="blue">
  <input type="submit" value="Submit">
</form>
```

# Status Codes

What do the following status codes mean?

Code | Meaning
:--  | :--
200  | OK
303  | Redirect
404  | Not found
500  | Internal Server Error
