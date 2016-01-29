# Homework Takeaways!

If you spent last night visiting the root path "/" and seeing "Welcome aboard
You’re riding Ruby on Rails!" don't forget to read that page. You'll see the
instructions "Set up a root route to replace this page"

```
# config/routes.rb
  # ...
  # You can have the root of your site routed with "root"
  root 'welcome#index'
```

`root 'welcome#index'` is a specific shorthand for `get '/' => 'welcome#index'`

If you want to create other specific routes, outside of using `resources` remember,
the syntax is `method({path => 'controller#action'})`

```
# config/routes
get '/login' => 'sessions#new'
```

## Pluralization!

Adhere to a principal of lease surprise! If you have a variable representing a
list or collection, give it a pluralized name.

Remember the controller action `index` should be for the the collection, therefore
use a plural instance variable, whereas your actions for show, new, edit, destroy, update,
and create are all for a single resource, so use the singular form of the word.

```
def index
  @paintings = Painting.all
end

def show
  @painting = Painting.find(params[:id])
end
```

## Filenaming Conventions!

Use lower snake case for all your Ruby files. That means `artist.rb` vs `Artist.rb`

Make sure your class names match the names of your files. That means `artist.rb` for
class `Artist` not `artists.rb` for class `Artist`

## ## No mo' Hard Coding IDs!

Remember IDs auto-increment and if you delete an entry you can't reuse that ID.
So rather than specifying an ID, you must rely on ActiveRecord objects.

```
Artist.create({
  name: "Jeff Koonz"
})

Painting.create({
  title: "Dumb Balloon Animal",
  artist_id: 1
})
```

Look at all the ways to assign a painting to an artist without hardcoding an ID!

```
# Create an artist and assign it to a local variable
a1 = Artist.create({
  name: "Jeff Koonz"
})

# assign the artist_id to whatever that artist's id is
Painting.create({
  title: "Dumb Balloon Animal",
  artist_id: a1.id
})

# Rely on the ActiveRecord association to assign an artist
Painting.create({
  title: "Another dumb Balloon Animal",
  artist: a1
})

# Or push into the paintings array
p3 = Painting.create({
  title: "Dumber Balloon Animal"
})
a1.paintings.push(p3)

# Or call create on the association
a1.paintings.create({
  title: "Seriously, Jeff?"
})
```

## Dynamic Segments

Remember, dynamic segments are specified in config/routes.rb and will map
url patterns to params. Writing a link containing one is not the same thing.

If you click on the below link you'll try to be directed to "/paintings/:id" then
inside params[:id] will be ":id" and and then you'll get an error because
Painting.find(params[:id]) will say "Couldn't find painting with id = :id" when
what you probably really want is a number.

```
<a href="/paintings/:id"><%= painting.title %></a>
```

## View Helpers

Have a lookat the Rails API for helper methods you can use in your view. This helps
cut down on the amount of string interpolation and left and right angle brackets everywhere in your face!

http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html#method-i-link_to

http://api.rubyonrails.org/classes/ActionView/Helpers/AssetTagHelper.html#method-i-image_tag


```
<a href="/artists/<%= artist.id%>"><%= artist.name %>
<img src="<%= @painting.img_url%>" height="50%" width="50%">
```
