# The Donut Post Express

<<<<<<< HEAD
<<<<<<< HEAD
![doughlogooo](./public/img/dough_logo.png)
=======
![doughlogooo](./img/dough_logo.png)
>>>>>>> 59779278ed1d3b300a0f6812d7e6dd138a8cb23a
=======
![doughlogooo](./img/dough_logo.png)
>>>>>>> 59779278ed1d3b300a0f6812d7e6dd138a8cb23a

Tonight, you'll be helping Dough Donuts manage their delicious menu of tasty pastries! You'll write a server, create templates, and create an interface for your users to access and modify the data stored in your server's memory.

**Think about it:** If you restart your server, what happens to this data? Why?

#### Invaluable Tips, Tricks, and Resources

- Check out this sweet [gist on HTML forms and inputs](https://gist.github.com/h4w5/8848398) for insider tips and tricks!
- Also check out [MDN's documentation on forms](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Forms) for helpful explanations and walkthroughs.
- Test out your server - `rackup` **early** and **often**!
- **Don't copy and paste from the classwork/previous assignments!** You're doing yourself a disservice by pasting - you're not gaining valuable muscle memory (gotta get those reps!), and you risk including extra, pasted-in code in your homework that's not applicable to the assignment.

### Part One - Setup

We've given you some starter code for tonight's homework. Your folder structure should look like this:

<<<<<<< HEAD
<<<<<<< HEAD
![donut file structure](./public/img/donuts_fs.png)
=======
![donut file structure](./img/donuts_fs.png)
>>>>>>> 59779278ed1d3b300a0f6812d7e6dd138a8cb23a
=======
![donut file structure](./img/donuts_fs.png)
>>>>>>> 59779278ed1d3b300a0f6812d7e6dd138a8cb23a

It's your job to get this up and running!

- Set up your `config.ru` and `server.rb` files.
- Pull in the data stored in `donuts.rb` so that it's available in your server file. *After we `require_relative` it, how do we access it in our code?*
- Set up a route handler for your root route "/". Your index page should render out the following:
    - The Dough Donuts **logo image**
    - A **list of all the donut flavors** and their prices
    - Each donut flavor should be a link to an individual donut detail page.
- Set up a route for your individual donuts to be shown by id (example - `/donuts/:id`).

### Part Two - Posts

- On your index page, add **a form to create a new donut!** Fields:
    - `flavor` 
    - `price`
    - When your form is submitted, it should send an HTTP request to your server formatted like so:

```
POST /donuts HTTP/1.1
Host: localhost:9292
flavor=chocolate&price=3.99
```

*Consider: What will your form's `method` and `action` be?*

- Set up a route handler so that your server can accept **post** requests!
    - Remember what your index page's method and action were. How will that affect the code you write to handle that form's submission?
- When your form is submitted, your program should create a new donut (how are donuts represented in our program?) and add it to your existing stock of donuts.
    - Think about it - how will you give your donuts unique IDs?
- Once the new donut is added to your menu, redirect the user to the index page.

### Part Three - A New (re)Direction

- Let's let the user take the wheel! Once you've got parts one and two working, add a dropdown menu to the form on your index page with two options:
    - Redirect back here
    - Redirect to Donut Page
- When your user creates a new donut, redirect them either to the list of donuts (at "/") or to the individual donut page, depending on which they select.

### Bonus - Now, With STYLE

- Create a `style.css` and `main.js` file and link these to your HTML file.
- Have some fun! Try accomplishing the following:
    - Use JavaScript to `focus` on the flavor input once the page loads.
    - Make your page resemble a menu - wrap your content in a centered `whitesmoke`-colored div with a maximum width! Center the text and images within that div and change the font to anything but Times New Roman.
