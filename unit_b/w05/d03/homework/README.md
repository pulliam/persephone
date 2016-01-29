# Template MANIA!

![:image](https://a.wattpad.com/cover/19655546-368-k718224.jpg)

Tonight, we'll be practicing templating in Sinatra. We've given you several sets of data to work with - you'll be getting some reps creating `index` (list) and `show` (an individual item) routes for this data! Remember, it's hard to code something the first time. It's easier the second time. Third/fourth/fifth/sixth ~~wife's~~ time's the charm!

We've included blank `server.rb` and `config.ru` files, along with a `views` folder and a `homework_data.rb` file. Inside this file is a **module** containing the data you'll use in your homework tonight. We're going to pull that data into our `server.rb` file so our server can use it! 
- In your `server.rb` file, `require_relative` that file, i.e. `require_relative("homework_data")`
- Now, you should be able to access the constants defined inside that module like so: `HomeWork::TOM_CRUZ_ROLES`. Sweet!

***Tonight, try to complete at least parts one and two.***

### Part 1: Tom Cruz

- Inside your `Server` class, create a `get` route for `/tom_cruz`.
    - Have this route use `erb` to render a list of all the movies in `HomeWork::TOM_CRUZ_ROLES` and Tom's role in the film.
    - Remember, you'll need to create a template, e.g. `views/tom_index.erb`!
- Inside your `Server` class, create a `get` route for `/tom_cruz/:movie`.
    - Have this route use `erb` to render a `:show` page for each movie - this should show the movie's title and the role Tom played in that movie.
    - Remember, you'll need to create a template, e.g. `views/tom_show.erb`!

### Part 2: Pooh Characters

- Inside your `Server` class, create a `get` route for `/pooh`.
    - Have this route return an HTML string rendered with `erb` that lists all of the characters.
    - Remember, you'll need to create a template, e.g. `views/pooh_index.erb`

- Inside your `Server` class, create a `get` route for `/pooh/:id`.
    - Have this route return an HTML string rendered with `erb` that shows information about the character with that particular id.
    - Remember, you'll need to create a template, e.g. `views/pooh_show.erb`
    - Your template should render "There is no character with an id of [:id]" if `:id` is nil.

## Bonus!

### Your Intrepid Instructors

- Create a get route that will show a list of all the instructors stored in `HomeWork::INSTRUCTORS`.
- Create "show" routes for each individual instructor.
- Modify your data file - add an `image_url` property to each instructor's data hash. Display this only on their individual show pages!

