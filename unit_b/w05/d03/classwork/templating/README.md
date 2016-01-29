# Templating with ERB & Sinatra


## Objectives

- Understand
    - static assets vs. dynamic content
    - templating: templates and templating engines
        - what it is
        - why it's useful

- Be able to
    - store and serve static assets
    - use Embedded Ruby (ERB)
        - templates
        - layouts
        - delimiters
            - squids and flounders
        - instance variables
        - iteration
        - conditionals

- Practice using templates in combination with Sinatra and various types of data: instances, arrays, hashes, etc.

### Bonus Objectives

  - Create custom view helper methods
  - Utilize partial templates
      - locals


## Review: Sinatra Setup

- config.ru
    ```ruby
      require("sinatra")
      require_relative("server.rb")

      run App::Server
    ```
- App::Server
    ```ruby
    module App

      class Server < Sinatra::Base

      end
    end
    ```

## Static Files

Static files are served from the `./public` directory.


Note that the public directory name is not included in the URL. A file
`./public/css/style.css` is made available as
`http://example.com/css/style.css`.

## Templating

Templating is the process of combining data with a template. As in ruby string interpolation, email merging, and mad libs, certain tokens are replaced with a particular set of data. 

Templates are useful for many reasons including the reduction of redundant information or code.

Think about the number of layouts that a website like Facebook or Zillow require to run. Not very many. Reusing these layouts instead of create one each possible page, saves a lot of space.

## Views / Templates

Each template language is exposed via its own rendering method. These
methods simply return a string.

We'll be using ERB, short for Embedded Ruby.

```ruby
get '/' do
  erb :index
end
```

This renders the `views/index.erb` file.

Instead of a template name, you can also just pass in the template content
directly:

```ruby
get '/' do
  code = "<%= Time.now %>"
  erb code
end
```

Templates take a second argument, the options hash:

```ruby
get '/' do
  erb :index, :layout => :post
end
```

This will render `views/index.erb` embedded in the
`views/post.erb` (default is `views/layout.erb`, if it exists).

## ERB

Embedded Ruby (ERB) is a templating language that can be "embedded" into other languages like HTML. Given the following data and template,

```ruby
@dogs = [
  {
    "id" => 1,
    "name" => "Bailey",
    "breed" => "Corgy",
    "sex" => "Female"
  },
  {
    "id" => 2,
    "name" => "Willy",
    "breed" => "Affenpinscher",
    "sex" => "Male"
  }
]
```


```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Doggies Go to Heaven Database</title>
</head>
<body>
  <h1>Doggies in Heaven:</h1>
  <ul>
    <% @dogs.each do |dog| %>
      <li>
        Name: <%= dog["name"] %>
        <br/>
        Breed: <%= dog["breed"] %>
        <br/>
        Sex: <%= dog["sex"] %>
      </li>
    <% end %>
  </ul>
</body>
</html>
```

- What do you think the final HTML rendered from this template will be?
- What do you think the data type for `@dogs` is?
- What do you think the data type for each `dog` is?

## ERB Delimiters

- `<%= %>`
    - Squids
    - Squids squirt ink so that whatever is inside its delimiters get printed to the page.
- `<% %>`
    - Flounders
    - They are camouflaged and leave no trace on the page.
- `<% -%>`
    - Flounders with straws
    - Although they're camoflauged, flounders take up space.
    - Flounders with straws clean up this space right before final rendering takes place, leaving no trace of their existence.

## Instructors Demo: Doggies in Heave Database

```ruby
dogs = [
  {
    "id" => 1,
    "name" => "Bailey",
    "breed" => "Corgy",
    "sex" => "Female"
  },
  {
    "id" => 2,
    "name" => "Willy",
    "breed" => "Affenpinscher",
    "sex" => "Male"
  },
  {
    "id" => 3,
    "name" => "Prodi",
    "breed" => "Dalmation",
    "sex" => "Male"
  },
  {
    "id" => 4,
    "name" => "Spot",
    "breed" => "Beagle",
    "sex" => "Female"
  },
  {
    "id" => 5,
    "name" => "Lioness",
    "breed" => "Great Dane",
    "sex" => "Female"
  },
  {
    "id" => 6,
    "name" => "Ashley",
    "breed" => "Corgy",
    "sex" => "Male"
  },
  {
    "id" => 7,
    "name" => "Anthony",
    "breed" => "Grey Hound",
    "sex" => "Male"
  },
  {
    "id" => 8,
    "name" => "Ben",
    "breed" => "Pitbull",
    "sex" => "Male"
  },
  {
    "id" => 9,
    "name" => "Megan",
    "breed" => "Finnish Spitz",
    "sex" => "Male"
  },
  {
    "id" => 10,
    "name" => "Augustine",
    "breed" => "Finnish Spitz",
    "sex" => "Male"
  },
  {
    "id" => 11,
    "name" => "Juliet",
    "breed" => "Corgy",
    "sex" => "Female"
  },
  {
    "id" => 12,
    "name" => "Carlos",
    "breed" => "Affenpinscher",
    "sex" => "Male"
  },
  {
    "id" => 13,
    "name" => "Sean",
    "breed" => "Dalmation",
    "sex" => "Female"
  },
  {
    "id" => 14,
    "name" => "Whiskey",
    "breed" => "Beagle",
    "sex" => "Female"
  },
  {
    "id" => 15,
    "name" => "Pauline",
    "breed" => "Great Dane",
    "sex" => "Female"
  },
  {
    "id" => 16,
    "name" => "Taylor",
    "breed" => "Corgy",
    "sex" => "Male"
  },
  {
    "id" => 17,
    "name" => "Bobby",
    "breed" => "Grey Hound",
    "sex" => "Male"
  },
  {
    "id" => 18,
    "name" => "Liz",
    "breed" => "Pitbull",
    "sex" => "Male"
  },
  {
    "id" => 19,
    "name" => "Sam",
    "breed" => "Finnish Spitz",
    "sex" => "Male"
  },
  {
    "id" => 20,
    "name" => "Phil",
    "breed" => "Finnish Spitz",
    "sex" => "Male"
  },
]
```

- Store dogs inside of a `Data` module.
- Create an index route and template
- Create a show route and template using the `:id` parameter
- Create custom search routes for `sex` and `breed`
- Refactor with a `Doggie` module and a `Dog` class.


## Y'all Do

- Split up into pairs.
- Create a new Class whose instances have at least 3 attributes.
    - One of the attributes should be an array.
- Create an array containing at least 3 instances of that class.
- Swap classes and arrays to another pair.
- Create a template to render out an index view and a show view for that data.
- Swap again and check each other's work.
