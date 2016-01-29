# MOMA App

![:image](http://www.moma.org/images/explore/departments/p_s_IN2017.1.jpg?1449095316)

We're going to model the Musuem of Modern Art because you're code artists. 

Create a new Rails application called "moma_app" with a postgresql database.
Skip turbolinks and test unit.

This app will have 2 models: `Artist`s and `Painting`s.

```
     Artist                          Painting
+--------------+                 +--------------+
|              |                 |              |
|  Name        |                 |  Title       |
|              | 1               |              |
|  Nationality +-----------------+  Medium      |
|              |               * |              |
|  img_url     |                 |  img_url     |
+--------------+                 +--------------+

```

An Artist has

- name

- nationality

- img_url

A Painting has

- title

- medium

- img_url

# Completion

**Finish at least the first 4 parts.** As always: more is better; healthy living is best.

Generate the corresponding ActiveRecord migrations for the above tables and then create models, views and controllers.

Update your seed file to populate your database with the following artists and paintings

Artists
- Vincent Van Gogh, Dutch
- Pablo Picasso, Spanish
- Katsushika Hokusai, Japanese

Paintings
- Starry Night, oil on canvas, by Van Gogh
- Cafe Terrace at Night, oil on canvas, by Van Gogh
- Guernica, oil on canvas, by Picaso
- The Old Guitarist, oil on panel, by Picasso
- The Great Wave off Kanagawa, color woodblock, by Hokusai
- Red Fuji, Ukiyo-e woodblock print, by Hokusai

# Features

1. When a user visits the root "/"

    - they should see a link to view all artists 
    - they should see a link to view all paintings

1. When a user visits `/artists`
    
    - they should see a list of all the artists names

1. When a user visits `/paintings`
    
    - They should see all the paintings in the database

1. When a user visits `/artists` and clicks on a particular artist's name
    
    - they should be directed to `/artists/WHATEVER_THAT_ARTISTS_ID_IS`
    
    - they should see the artist's name and nationality
    
    - and they should see a list of paintings by that artist

1. When a user visits a particular artist and clicks "Add painting"
    
    - they should see a form to create a new painting 

1. When a user clicks "Add paiting" and fills out the form and clicks "Create"
    
    - they should see the new painting in the list of paintings by that artist

# Bonus

Allow a user to add multiple tags to a painting.

```
     Artist                          Painting                      Tag 
+--------------+                 +--------------+              +--------------+
|              |                 |              |              |              |
|  Name        |                 |  Title       |              |  name        |
|              | 1               |              | *            |              |
|  Nationality +-----------------+  Medium      |--------------+              |
|              |               * |              |             *|              |
|              |                 |              |              |              |
+--------------+                 +--------------+              +--------------+
```

When a user visits `/tags/1`
- they should see all the paintings with that tag

When a user visits a particular artist and clicks "Add painting"
- the new painting form should inculde a text input to add a comma separated list of tags

When a user views their new painting
- each tag should be a separate link to show all paintings with that tag

Can you display the tags on a painting as check boxes?

# Resources

- [Rails Docs](http://api.rubyonrails.org/)

- [Rails Docs - Form Helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html)

- [Rails Docs - Routes](http://api.rubyonrails.org/classes/ActionDispatch/Routing.html)

- [Rails Docs - Controllers](http://api.rubyonrails.org/classes/ActionController/Base.html)

- [Rails Guides](http://guides.rubyonrails.org/)
