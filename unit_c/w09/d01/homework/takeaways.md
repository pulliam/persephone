# Homework Takeaways!

## Remember the root!

When you visit "http://localhost:3000" remember to show something. If you only
define resources in your `config/routes.rb` you're going to see the "Now you're
riding the rails" instead of some useful page. Either set up a `get` route to 
one of your resources or define a welcome controller.

```
root 'welcome#index'
```

Also when you're writing your routes in the file, you can delete all those comments!

## Forms

A lot of people chose to use "form_for" versus "form_tag" or writing a vanilla
HTML form. "form_for" is a Rails helper that's typically used for generating an 
HTML form for a resource, that typically means an ActiveRecord model.

So if you don't have a model that inherits from ActiveRecord::Base you can use the 
form_tag helper. 

Also be aware of hiding your passwords with input type="password"

```
<!--  I can see everything! -->
<%= f.text_field :password %>
<!-- All dots -->
<%= f.password_field :password %>
```

## Sessions 

Sessions are extremely similar to how they worked in Sinatra. They're enabled by default.
So you can access the session hash inside any controller action. 

```
get    '/login' => 'sessions#new'
post   '/login' => 'sessions#create'
delete '/login' => 'sessions#destroy'
```

```
class SessionsController
    def new
    end
    def create
        user = User.find(params[:user_id])
        session[:user_id] = user.id
        redirect_to user
    end
    def destroy
        session[:user_id] = nil
        redirect_to root_path
    end
end
```

```
<!-- app/sessions/new.html -->
<form method="POST" action="/login">
</form>
```

## SessionsHelper

A lot of people copied a Rails tutorial that creates a SessionsHelper. That may 
be unnecesarily complex for what the underlying methods are doing. Furthermore, 
helper files and ActiveRecord query methods behave differently in Rails 4. 

Always be aware of version numbers when looking at tutorials!

Here's more about how including modules works in Ruby and Rails. 

- http://ruby-doc.org/core-2.2.0/Module.html#method-i-include
- http://api.rubyonrails.org/classes/ActionController/Helpers.html

## Controllers

Make sure when you're writing your controllers that they inherit from "ApplicationController"

ApplicationController inherits from "ActionController::Base"  this allows you to 
define methods inside ApplicationController and use them in your other controllers.

```
# This
class DogsController < ApplicationController
# not this
class DogsController < ActionController::Base
```

Remember instance variables doesn't exist between controller actions!

```
def one
    @category = Category.find(params[:id])
end

def two
    redirect_to @category # this is nil!
end
```

## ActiveRecord Associations

Remember ActiveRecord association pluralization rules.

```
# Bad
belongs_to :users
# Good 
belongs_to :user
```

All these methods just create getter and setter methods based on the name and the underlying ID. If you stray from that you have to do some configuration.

If you say "belongs_to :user" this will create a getter method called "user" that will 
perform a sql query and assume there's column name called "user_id"

If you stray from that you'll need to tell ActiveRecord what the actual table or class is. 

The following will rely on an "author_id" column, but by specifying "class_name: User" it'll search a "users" table for that id. 

```
belongs_to :author, class_name: "User"
```

Finally, use the getter and setter methods to retrieve the data rather than
the hash syntax. The reason is it's easier to refactor what a method returns.

```
@recent_article["content"]%>
```

# Bcrypt

You shouldn't populate the "password_digest" in your users table directly.

You should set "password" and "password_confirmation" at the model level and
then bcrypt will hash that and populate the digest field. 

```
# Bad
u = User.create(email: "m@condimen.ts", password_digest: "bjadf")
# Good 
u = User.create(email: "m@condimen.ts", password: "wetdog", password_comfiration: "wetdog")
```


