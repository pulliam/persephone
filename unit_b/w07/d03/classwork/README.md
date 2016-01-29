# Sessions, Cookies, and Logging In

![](http://cdn1.pri.org/sites/default/files/story/images/cookies733.jpg)

### Learning Objectives

1. What is a **cookie**?
2. What is a Rack **session**? What problem does it solve for us?
3. How do we log in a user?

### Check for Understanding

Test yourself! Can you answer the following questions? If not, read back through the document, or ask a classmate who knows to explain it to you!

1. How do we differentiate between the params (parameters) hash and the session hash? What's the difference between the two?

1. Where is the information in a cookie stored?

1. Where is the information in a session stored?

1. What's the difference between creating a new user and creating a new session?

## Cookies & Sessions

Web servers are designed to be **stateless** - they respond to requests, but don't retain any information about the connection once it's closed. This poses a problem when it comes to logging a user in - if our server can't remember that a particular user is logged in, where and how can we store that information?

An HTTP **cookie** is a piece of information that's stored on the client - in the user's browser. Every time the browser makes a request to the server, it also sends along all the cookies that have been set on it! This way, the *browser* is responsible for storing information about a logged-in user's **session** and letting the server know, rather than the server retaining that information in memory or in the database.

#### Cookie Exchange!

![](https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/HTTP_cookie_exchange.svg/700px-HTTP_cookie_exchange.svg.png)

**What is a session?** Generally, a session is a set of information about the user that remains constant over multiple HTTP requests. Rack - the middleware that Sinatra and Rails both use - provides us with access to a **session hash**. In Sinatra, the **key** to this session (think of it as similar to an id in this way, but very difficult to guess) is set as a cookie on the user's browser. In our `server.rb` file, the `session` itself is a hash of information stored in the server's memory that we have access to in every request! This is super useful for a variety of use cases - remembering what's in a shopping cart, keeping a user logged in, etc.  

Because the session itself is stored in memory, the information in the hash is lost when we restart our server. The `rack.session` cookie will remain stored in the user's browser, but the key no longer refers to an existing session.

## Walkthrough: User Login Flow

### 200Cupid

In your classwork folder, you should see starter code for a basic application. This application should allow you to see a list of users, view a single user, and create a new user.  

#### Step One: Enable sessions

The first step is to tell Sinatra that we want to use sessions. They aren't enabled by default, so we've got to set that up:

`server.rb`

```ruby
 # ...
  class Server < Sinatra::Base
    set :method_override, true
  # add the line of code below to your server class:
    enable :sessions

    get "/" do
      erb :index      
    end
# ...
```

#### Step Two: Add Login Link to our Index Page

Our user needs to log in somehow! Add a link to your login form. This route can be called anything you like.

`index.erb`

```html
<p><a href="/login">Log In</a></p>
```

#### Step Three: Create a User Login Form

Let's edit our login form so that it creates and submits the right HTTP request for the job when the submit button is presed.

- **What's our CRUD action?** We're not saving anything to our database here, but we're still CREATING something - a new session. Our method should be a POST.
- **What are we creating?** What's our resource here? Sessions! That's our `action` (in other words, our path).

`login.erb`

```html
<form action="/sessions" method="POST">
```

#### Step Four: Write a Route Handler to CREATE a new Session

Let's write a route handler in our server file to handle `POST /sessions` requests. We'll need to figure out if the user is in our database, then save a unique piece of information about them in the session.

`server.rb`

```ruby
post "/sessions" do
    # Figure out if our user is in db
    user = User.find_by({name: params["name"]})
    # Save their id into the session - most useful piece of data
    session[:user_id] = user.id
    redirect to "/"
end
```

#### Conditional Logic on the Index Page

We now have a simple check for whether or not a user is logged in - is there a :user_id key in the `session`? We can use this test to render different HTML based on whether or not the user is logged in.

`server.rb`

```ruby
get "/" do
  @user = User.find(session[:user_id]) if session[:user_id]
  erb :index      
end
```

`index.erb`

```html
<% if @user %>
  <h1>Hi <%= @user.name %>!</h1>
<% else %>
  <h1>Hi and welcome to 200Cupid!</h1>
<% end %>
```

```html
<% if @user %>
  <p><a href="/users">View users!</a></p>
  <p><a href="/visits">Who's visited you?</a></p>
<% else %>
  <p><a href="/login">Log In</a></p>
  <p><a href="/users/new">Sign Up!</a></p>
<% end %>
```

#### Step Five: Write Logic to Check if a User is Logged In

We can render different HTML depending on whether the user is logged in or not, but there are some pages we may not want them to have access to at all. We can write logic on the server to determine whether they can view the page, or are redirected somewhere else.

`server.rb`

```ruby
get "/users" do
  # simple, one-line redirect - will only occur
  # if there is no :user_id key in the session
  redirect to "/" if !session[:user_id]

  @users = User.all
  erb :users
end
```

#### Interact with Information Specific to the User

We can now show information specific to the logged-in user - for example, all of the visitors to a particular user's profile page:

`server.rb`

```ruby
get "/visits" do
  redirect to "/" if !session[:user_id]
  user = User.find(session[:user_id])
  @visits = user.visits
  erb :visits
end
```

We can also create new information using the id stored in the session hash!

`server.rb`

```ruby
get "/users/:id" do
  redirect to "/" if !session[:user_id]

  # Create a new "visit" record, documenting
  # who visited who and when!
  Visit.create({visited_id: params[:id], visitor_id: session[:user_id], created_at: DateTime.now})
  @user = User.find(params[:id])
  erb :user
end

```

#### Logging Out

Excellent! Now, all we need is a way for our user to log out.

Look at the form below: What's our CRUD action? We logged in by creating a session, so it makes sense to log out by deleting one. We then use the POST method and use the method override hack to tell our server to treat it as a DELETE request.

`index.erb`

```html
  <form action="/sessions" method="POST">
    <input type="hidden" name="_method" value="delete">
    <button>Log out!</button>
  </form>
```

Finally, we create a route handler to respond to `DELETE /sessions` requests.

`server.rb`

```ruby
    delete "/sessions" do
      session[:user_id] = nil
      redirect to "/"
    end
```

![cupid](http://themedestrian.com/wp-content/uploads/2012/02/Cupid.jpg)

## Further Resources & Reading

- The [Wikipedia article on cookies](https://en.wikipedia.org/wiki/HTTP_cookie#Structure) is actually quite good - check out the examples in Implementation for a look at how the requests are structured.
- [HTTP Cookies Explained](https://www.nczonline.net/blog/2009/05/05/http-cookies-explained/) is a good step-by-step explanation of the makeup of a cookie, and how it's created/used.
