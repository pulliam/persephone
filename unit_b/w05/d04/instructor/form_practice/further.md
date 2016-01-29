# Challenge

Guestbook

- When a user vists "/guestbook" 
- They should see "Welcome to my hotel"
- and a link to "Sign it!"

Clicking on "Sign it!" will make the following request

```
GET /new_entry HTTP/1.1
Host: localhost:9292

```

- When a user visits "/new_entry"
- They should see a form with name and message fields and a button to submit the form
- Submitting the form should make the following request

```
POST /add_entry HTTP/1.1
Host: localhost:9292

message=cool%20hotel&email=terry
```

And send the following response

```
HTTP/1.1 303 See Other
Location: /guestbook

```

Then the user should see "/guestbook" and the names and emails of everyone
who has signed the guest book.

# Next

Add a new route handler so that...

- When a user visits "/elevator"
- They should see a radio button for "admin"
- They should see a text input for "floor"

# Then 

- If they enter "penthouse" and click "admin"
- they should be directed to "/penthouse" 
- When a user visits "/elevator"
- and enters "penthouse" and clicks "Go!"
- Then they should be directed to "/elevator?error=no_access"
- And the page should say "restricted access"

# Challenge

Add a new route handler so that...

- When a user visits "/dungeon"
- They should see the text "Welcome!" and 
- they should see a button that says "take me to" and
- they should see a select box with the options "jungle", "tundra", "desert"

# Then

- When a user visits "/dungeon" and 
- they select "jungle" from the select box and
- then click "take me to"
- they should be directed to "/travel?to=jungle" and
- they should see "Welcome to the jungle"
