# JavaScript All the Way Down

![turtles](http://www.tricycle.com/sites/default/files/images/webexclusives/turtles.jpg)

Today, you learned how to allow your client-side JavaScript to talk to your Express server through the magic of AJAX. Tonight, you're going to get some more practice with AJAX and continue working with Express servers.

### Objectives:

1. Pay close attention to the division between client-side and server-side code. What happens where? What order do things happen in? What messages are passed back and forth?
1. Use `bower` to manage & install your client-side dependencies (jQuery, handlebars, etc.)
1. Use `npm` to manage & install your server-side dependencies (express, ejs, etc.)
1. Practice using these new tools to create a Single Page Application, or a single-page website that's updated dynamically as the user interacts with the page (no page refreshes!).

### Resources

Now that we're using JavaScript on the client AND the server, it can get more difficult keeping track of what needs to happen and which tools we need to use on the client and on the server. Here's a handy table that lists a few key tools:

|                                   | Server-side (Node)    | Client-side (browser)            |
|:----------------------------------|:---------------------:|:--------------------------------:|
| **Language**                      | JavaScript            | JavaScript                       |
| **Dependency Management**         | npm                   | bower                            |
| **Parsing/Interacting with HTML** | `cheerio` package     | jQuery                           |
| **HTTP Requests**                 | `request` package     | AJAX                             |
| **Templating**                    | `ejs` package `<% %>` | `handlebars` library {{ }}       |

## Part One: [That Heart's Still Going On and On...](https://www.youtube.com/watch?v=WNIPqafd4As)

Keep working on the [Titanic prompt](https://github.com/ga-students/wdi-persephone/tree/master/unit_d/w12/d04/classwork/titanic_lab)! Once you've got MVP functionality (everything but the bonus), move on to the simple CRUD app below. If you finish with that, circle back to the Titanic bonus prompts.

## Part Two: What's in YOUR Closet?

![closet](http://www.ecouterre.com/wp-content/uploads/2010/05/clothes-closet.jpg)

_Your closet is a total mess. Write a web application to help you keep track of your suits, sweats, and sneakers!_

The overall functionality for this app will be similar to the Burrito Express app you worked on last night - the difference is that this time, you'll be utilizing AJAX to perform CRUD actions instead of refreshing the page.

### Creating the Server

- First, write a server using Express that renders a single index page. This page should include a header and a section for  
- Your server should accept GET, POST, PUT and DELETE requests for `item`s and respond with JSON.
- Store your data in an `items.json` file. You can start your file off with a few items already.

### In the Browser

- Use AJAX to allow your user to CRUD a single resource. Your application should allow the user to:
- Track each clothing item's color, size and clothing_type.
- Display an ordered list of clothing items when the user visits the index page.
- Allow a user to delete an item.

**Bonus:** Allow users to make edits to items without needing to navigate to another page!

