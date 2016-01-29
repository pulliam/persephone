# Hello From the Other Sii-iide

### ***Requests and Responses in the world of the Internet***

![](http://i.imgur.com/dS1RtwV.jpg)

Welcome to the wonderful world of the internet - requests and responses, clients and servers! Tonight, you'll be writing a server and setting up various routes that it will respond to.

#### Objectives:

- Practice writing a simple server using **Ruby & Sinatra**
- Practice adding **routes handlers** to your server
- Grab information using **query strings** and **dynamic routes**.

### Part One: Server Setup

- Create a new `server.rb` file. Write the minimum amount of code required for your server to run, then **test it out** by running it on your machine (localhost!) and **[`curl`ing](https://github.com/ga-students/wdi-persephone/blob/master/unit_b/w05/d02/classwork/protocols/curl.md) your routes**. For reference, refer to this afternoon's example server.
- Your server should send over the following information in response to the following request:
    - **Request:** `GET /`
    - **Response:** `"<h1>Hello World!</h1>"`

### Part Two: Route Handlers

#### A. Palindrome redux!

  - **Write a route handler (`/palindrome`)** that accepts a `word` in a query string and returns a string of HTML letting the user know whether or not it's a palindrome.
    - **Example 1:**
        - **Request:** `GET '/palindrome?word="Anna"'`
        - **Response:** `"<h1>Anna is a palindrome!</h1>"`
    - **Example 2:**
        - **Request:** `GET '/palindrome?word="philco"'`
        - **Response:** `"<h1>philco is <strong>not</strong> a palindrome.</h1>"`

#### B. Calculator

  - Write a new route handler `/calculator/:num1/:num2` that will take the `num1` and `num2`, add them together, and return the result as a string of HTML.
      - **Example 1:**
          - **Request:** `GET /calculator/2/3`
          - **Response:** `<p>2 + 3 = <strong>5</strong><p>`
  - Once you have that working (and not before), modify your route handler to accept an operator in addition to the two numbers: <br>`/calculator/:operator/:num1/:num2`
      - **Example 2:**
          - **Request:** `GET /calculator/add/2/3`
          - **Response:** `<p>2 + 3 = <strong>5</strong><p>`
      - **Example 3:**
          - **Request:** `GET /calculator/subtract/10/3`
          - **Response:** `<p>10 - 3 = <strong>7</strong><p>`

#### C. Fortune Cookie

  - Write a new route handler **`/fortune`** that returns a random fortune to the user with every request! Here's some data to get you started:

```ruby
# Note the capital letters here - what 
# does that tell you about what kind of
# variable this is?
FORTUNES = [
  'If you refuse to accept anything but the best, you very often get it.',
  'Today it\'s up to you to create the peacefulness you long for.',
  'A smile is your passport into the hearts of others.',
  'A good way to keep healthy is to eat more Chinese food.',
  'Hard work pays off in the future, laziness pays off now.',
  'Change can hurt, but it leads a path to something better.',
  'Hidden in a valley beside an open stream- This will be the type of place where you will find your dream.',
  'Your shoes will make you happy today.',
  'You already know the answer to the questions lingering inside your head.',
  'A short stranger will soon enter your life with blessings to share.',
  'Everyone agrees. You are the best.'
]
```

Include this constant inside of your `App` module, but *outside of* your `Server` class.

  - **Example 1:**
      - **Request:** `GET /fortune`
      - **Response:** `<p>Everyone agrees. You are the best.</p>`
  - **Example 2:**
      - **Request:** `GET /fortune`
      - **Response:** `<p>Change can hurt, but it leads a path to something better.</p>`

## Just Browsin'

Once you've written these route handlers and tested them out with `curl`, try entering your server's routes into your browser's URL bar instead of `curl`ing them. What do you think is happening "behind the scenes?" What's different? What's the same?
