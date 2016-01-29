# Express

[Express Home](http://expressjs.com/)

## Setup

### package.json

The package.json file tells us and NPM about our current program. In this case, our program is going to be a web server. We can manually create the package.json file or have it initialized for us using the `npm init` command. `npm init` will ask you several questions. You can use the defaults by pressing enter, except for the 'entry point' which should be `app.js` or whatever the main file for your program is. In other words, if you were to run your application using the `node` command, which file would you run? Don't worry if you entered something incorrectly, you can update the package.json file manually.

Now we need to tell our package.json what libraries we want to use. Our package.json also acts as version control for our packages, similar to the way GEMFILE works in Ruby. We can either add a package manually to the package.json under dependencies or we can use the `npm install [packageName] --save` command, which will install the library and update the package.json file. To install express, we would run `npm install express --save`.

Simple example package.json file

```json
{
  "name": "sample_app",
  "version": "1.0.0",
  "description": "sample express app",
  "main": "app.js",
  "dependencies": {
    "express": "^4.13.3"
  }
}
```

Command Recap:
```bash
npm init
```
```bash
entry point: (index.js) app.js
```
```bash
npm install express --save
```

### File Structure

```bash
.
├── app.js
├── package.json
├── public
│   ├── css
│   ├── imgs
│   └── js
└── views
```

### app.js

#### The simplest server:
```javascript
// requires the express function
var express = require('express');
// calls the express function to create a server instance
var app = express();

/*
 * configures the server to have a root route that
 * sends a 'hello world' string 
 * through the callback or request handler, 
 * which tells the server what to do for that route.
 * The callback gives us access to the
 * request and response objects.
 */
app.get('/', function(req, res){
  res.send('hello world');
});

/*
 * now that the server is configured
 * we tell it to listen on port 3000
 * for incoming requests
 */
app.listen(3000);
```

#### With Static Files:

[Static Files Guide](http://expressjs.com/en/starter/static-files.html)

```javascript
var express = require('express');
var app = express();

// add static directory
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

#### More complete setup:

- method override
- body parser
- view engine

```javascript
// require all of the necessary modules and packages
var express    = require('express');
var ejs        = require('ejs');
var fs         = require('fs');
var bodyParser = require('body-parser');

// instantiate an Express server
var app        = express();

/****************************************************
  Middleware
****************************************************/

// add static directory
app.use(express.static(__dirname + '/public'));

// get a reference to the particular type of HTTP body parser we need
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});

// Tells the app to use the urlencoding body-parser to parse our body data. (middleware)
app.use(urlencodedBodyParser);

// allow for method override
var methodOverride = require('method-override');

// tell the app what override method to use (middleware)
app.use(methodOverride('_method'));

/****************************************************
  Application Settings
****************************************************/

// Sets the up app to render templates using EJS, our favorite.
// this sets the res.render method to use EJS
app.set('view engine', 'ejs');

/****************************************************
  Routes and Route Handlers
****************************************************/

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);
```

#### View Engine EJS

Embedded Javascript. EJS uses the same delimiters as ERB: Squids (<%=) and Flounders (<%).
The difference is that javascript code inbetween those delimiters instead of Ruby.

However, unlike Ruby code that used instance variables to access data inside of ERB templates, we need to explicitly pass EJS, the variables we want access to inside of our EJS template. The variables are called locals.

If we look at the res.render method signature from the Express Docs:
```javascript
res.render(view [, locals] [, callback])
```
Renders a view and sends the rendered HTML string to the client. Optional parameters:

- locals, an object whose properties define local variables for the view.
- callback, a callback function. If provided, the method returns both the possible error and rendered string, but does not perform an automated response. When an error occurs, the method invokes next(err) internally.

We can see that the second optional argument is a locals object.

Example:
```javascript
// pass a local variable to the view named user.ejs
// inside of user.ejs, we can access the variables name and sex
res.render('user', { name: 'Austin', sex: 'Yes, please.' });
```

#### Advanced Middleware: Cookies

- [Cookie Parser Package](https://github.com/expressjs/cookie-parser)
- [Cookie Session Package](https://github.com/expressjs/cookie-session)

## HTTP Route Methods

- app.get(path, callback)
- app.post(path, callback)
- app.put(path, callback)
- app.patch(path, callback)
- app.delete(path, callback)

Links:

- [Routing Guide](http://expressjs.com/en/guide/routing.html)
- [Full List of Route Methods](http://expressjs.com/en/4x/api.html#app.METHOD)

## Request Object

[Request Object Docs](http://expressjs.com/en/api.html#req)

Important Properties:

- req.body
- req.params
- req.query

All Properties:

- req.app
- req.baseUrl
- req.body
- req.cookies
- req.fresh
- req.hostname
- req.ip
- req.ips
- req.originalUrl
- req.params
- req.path
- req.protocol
- req.query
- req.route
- req.secure
- req.signedCookies
- req.stale
- req.subdomains
- req.xhr

Methods:

- req.accepts()
- req.acceptsCharsets()
- req.acceptsEncoding()
- req.acceptsLanguages()
- req.get()
- req.is()
- req.param()

## Response Object
[Response Object Docs](http://expressjs.com/en/api.html#res)

Important Methods

- res.append()
- res.end()
- [res.render()](http://expressjs.com/en/4x/api.html#res.render)
- res.send()

Additional Methods:

- res.append()
- res.attachment()
- res.cookie()
- res.clearCookie()
- res.download()
- res.end()
- res.format()
- res.get()
- res.json()
- res.location()
- res.redirect()
- res.render()
- res.send()
- res.sendFile()
- res.sendStatus()
- res.set()
- res.status()
- res.type()
- res.vary()

Properties

- res.app
- res.headersSent
- res.locals


## Middleware

[Setting and Writing Middleware](http://expressjs.com/en/4x/api.html#app.use)

## Settings

[List of Settings](http://expressjs.com/en/4x/api.html#app.settings.table)
