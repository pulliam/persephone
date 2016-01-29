# Building it Up: HTML Structure

![construction img](./html-hw-construction.jpg)

### Objectives

1. Familiarize yourself with the syntax for writing HTML tags and the basic structure of a web page.

### Before You Start...

Read over [MDN's Introduction to HTML](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Introduction), which will give you a brief introduction to and history of HTML. Before you move on to the exercise, make sure you can answer the following questions:

1. What is HTML? What kind of language is it?
- What is the purpose of HTML?
- What is an element? What are tags and attributes?

Since this may be your first dive into documentation written for developers, *make sure to keep a list* of anything you come across that you have trouble with and anythings you have questions about. Pay attention to what the documentation is trying to convey.

## Tag all the things

1. Use the CLI to navigate to today's homework folder and open `index.html`. Check out the page in Chrome and open it up in Sublime.
- Based on your reading, you should have an idea of what the syntax is for an array of basic HTML tags. In the body of your HTML document, add the following tags and check out how they're parsed and rendered by the browser:
  - Header tags, `<h1>` through `<h6>`
  - Lists (`<ul>` and `<ol>`) and list items `<li>`
  - Paragraphs: `<p>`
  - Inputs `<input>` and buttons `<button>`
  - Links: `<a>`
  - Images: `<img>`
  - ***Make sure you pay attention to which tags need a closing tag and which do not!***
- You should now see some pretty basic black and white Times New Roman content on your page. Try un-commenting the `link` element on line 6 of your index page (`<link rel="stylesheet" href="./styles.css">`) and reloading the page.
  - What's changed about your page? Has the underlying structure of your HTML document been modified?
  - We'll cover CSS in more detail tomorrow - for now, it's enough to realize that **HTML** is responsible for the **structure** of our document, while **CSS** is responsible for the **appearance** of the webpage as it's rendered by the browser.

## Do It Yourself!

It's time to go further and actually create your own webpage from scratch!

### The Story:

> Marketing company Hello Bar has hired you to work with a designer to create their "User Cases" web page. The designer has come up with a visual design and has provided you with a CSS stylesheet. Hello Bar's marketing department has provided you with text content for the page (see below).

Use the command line to create the new folder `hello` inside your homework folder. Navigate inside and create a new `index.html` file. Copy the `hello.css` file into your `hello` folder.

#### The Setup

1. Set up your boilerplate HTML. Remember to include a **doctype** as well as **html**, **head**, **title**, and **body** tag. If you need a reference, remember that you can refer back to the MDN Docs.
2. In addition to the basic HTML tags you read about in the documentation, HTML5 has made new **semantic tags** available for developers to use. These new tags sometimes perform the same function as pre-existing tags, but add another level of meaning to your markup.
  - Inside the `body` tag, add a `header` and `footer` tag. These tags behave the same way the a `div` tag will, but are more meaningful to other developers. (See **Further Resources** below for more on semantic HTML.)
3. Add the following content inside of your header:
  - An `h1` tag containing the follow
4. Add an unordered list element inside of your footer. Add the following list items to it:
  - Sign In
  - User Cases
  - Terms of Use
  - Privacy Policy
  - Help
  - © Hello Bar 2015

#### Make it Pretty!

1. It's time to add ***style*** to your webpage! Add a link to `hello.css` to your document.

```html
<link rel="stylesheet" href="./hello.css">
```

Check out `hello.html` in the browser! What's changed?

#### Finish It Off

1. Now we'll add the final few pieces of content to our page - four new and exciting `div` elements, and a form that visitors can use to log into our page! In between your `header` and `footer` elements, create a new `div`.
2. Add four new `div`s inside the `div` you've already created. Add an image tag inside of each new `div` and give each one of the following sources:
  - `./img/img1.png`
  - `./img/img2.png`
  - `./img/img3.png`
  - `./img/img4.png`
3. Add titles and more information to each of your divs. Use `h2` and paragraph tags to display the following below the image in each of your new divs:
  - **Header:** Get more email subscribers<br>**Paragraph:** Hello Bar sends subscriber data to your email lists in Aweber, Campaign Monitor and MailChimp.
  - **Header:** Increase your +1's, likes, pins, shares and tweets.<br>**Paragraph:** Hello Bar helps promote your content with Buffer, Facebook, Google+, LinkedIn, Pinterest and Twitter.
  - **Header:** Grow your following<br>**Paragraph:** Hello Bar displays follow buttons from Google+, Pinterest and Twitter.
  - **Header:** A/B test your messages<br>**Paragraph:** Test and discover the messages that work best for your website visitors.
4. Check out your page in the browser. Awesome! Now it's time to add that form. Create a `form` element below your four content divs, then add an input and a button inside of it.
  - Add some text inside your button, and give the input a `placeholder` attribute.
5. Check out how your page renders. Scream with delight - you're done.

## Further Resources

- [Semantic HTML: HTML5 Doctor](http://html5doctor.com/lets-talk-about-semantics/) - Good flow chart & explanation of when to use what semantic HTML tag.
