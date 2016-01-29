# Sung's Sassy Sweets Shoppe

![cupcakkskses](./img/cupcakes_banner.jpg)

As we all know, Sung and cupcakes go together like Sublime and coding. He's branching out and starting his very first sweets shop in Jersey City! (We've all gotta start somewhere.) As a busy baker, he doesn't have time to set up his own web application to track his cupcakes, lemon bars, and snickerdoodles. It's up to you to help him out!

### Objectives:

- Practice **creating, setting up, and writing to a database** using SQL commands.
- Use Ruby and the `sqlite3` gem to connect and send queries to a database.
- Practice creating **a server with multiple routes** in Sinatra.
- Use ERB to **render templates** and send them to clients (browser, curl, etc).

### Deliverables

Sung should be able to:

1. Visit the index page of his site and see a list of all his desserts.
1. Click on a dessert to get more details about it, including a picture.
1. Create a new dessert and have it saved to the database.
1. Delete unpopular/discontinued desserts.

### Database

Sung needs to track the following information about his desserts:

- Name
- Price
- Flavor
- Calories
- Whether or not it contains gluten
- Image URL*

Set up your database using your **schema** and **seed your database with 5 desserts**. 

\**You can pull your images from the 'net, or host them in your `public` folder!*

### Server

Sung wants to be able to see all of his desserts in the browser! You'll need to set up a **server using the Sinatra library**.

We've been creating Sinatra servers all this week, so feel free to refer back to (DO NOT COPY AND PASTE :heart:) your assignments/instructor examples while you code your server. Make sure you set up your folder structure correctly!

## Bonus:

Use [static files](http://www.sinatrarb.com/configuration.html#static---enabledisable-static-file-routes) to serve up external CSS and Javascript files. Link these to your HTML pages to enhance your client's experience.

- Using JavaScript, add a button to your site's index page that pops up an input form as a modal. This form should allow your client to add a new dessert that will be saved to the current list.
- When the user clicks the "delete" button on a dessert, pop up a modal that asks them for confirmation.
- **Resources:**
    - [What is a Modal?](http://webdesign.tutsplus.com/articles/modal-and-modeless-boxes-in-web-design--webdesign-2282) - This article talks about what a modal **is** vs. other interface elements on a page, with many examples of modals in web design. 
    - [Create a Modal Dialog using CSS and JavaScript](https://raventools.com/blog/create-a-modal-dialog-using-css-and-javascript/) - A simple overview of the thought process behind creating modals. Note - this article was written in 2006, so some 
    - [Div as Modal - Stack overflow](http://stackoverflow.com/questions/4502435/div-as-modal-javascript) - The first answer to this question is a nice look at the moving pieces that go into creating your own modal.

