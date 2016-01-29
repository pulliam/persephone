# Validating our forms

![:image](https://a.wattpad.com/cover/30997535-368-k878392.jpg)

As *200cupid* gets bigger, rather than submit every request to the server, let's try and handle some validations on the client-side and save some trips.

The previous developer ran off before they could finish writing `validate-user-form.js`

Take a look at jQuery's [`.preventDefault`](https://api.jquery.com/event.preventdefault/) and understand what it's doing. Then see if you can use jQuery and JavaScript validate each input.

Only if each input is valid should the form submit, otherwise use "preventDefault"

# Client-side input Validation Requirements

- `user_name` must be between 2 and 16 characters

- `user_password` must be between 8 and 16 characters

- `user_born_on` must be at least 18 years old

- `user_password` and `user_password_confirmation` must match

- `user_location` can't be blank

- `user_avatar_img_url` must end in .jpg or .png or .gif

# Application Setup

```rb
$ ruby db/migrate.rb
$ ruby db/seeds.rb
$ rackup -p 3000
```

# Bonuses

- When a user clicks on "login" or "signup", rather than performing a new GET request, can you 
prevent the default behavior and show a login or signup form?

- Implement the above validations on the User model using ActiveRecord validations.

# Resources

- https://api.jquery.com/event.preventdefault/
- http://guides.rubyonrails.org/active_record_validations.html
- https://api.jquery.com/category/events/form-events/
