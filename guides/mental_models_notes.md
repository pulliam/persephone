# Mental Modelling

![](https://cdn.shopify.com/proxy/9c7bd2599dadf6f4d2e07cdb1b622b0fc625d97b7f36eb5e9dc4e5b40e55454b/growingedgeadventures.com/wp-content/uploads/2014/12/Change-Your-Brain-image.jpg?5e4f73)

As you learn new things, you should create a mental model of how they work. It's going to have inaccuracies and wrong assumptions, but that's OK. As you learn more about the topic and test your assumptions, your mental model should become clearer and more accurate. Your mental model will allow you hypothesis about what will happen in a given situation and make educated guesses. As your mental model becomes more accurate, you'll get better at predicting the behavior or result. The great thing about computers is that give you a lot of quick feedback that you can use to continuously test and refine your mental model.

> How to create a hypothesis:
> 
> 1. A hypothesis is an educated guess about how things work.
> 2. Most of the time a hypothesis is written like this: `"If _____ [I do this] _____, then _____[this]_____ will happen."...` 
> 3. Your hypothesis should be something that you can actually test, what's called a testable > hypothesis.

More information:
[Wiki Scientific Method](https://simple.wikipedia.org/wiki/Scientific_method)


## Review Topics:

### CRUD.

CRUD is not only for Databases. It refers to the abstract functions that can be performed on any piece of data, e.g. an array, a javascript object, a ruby hash, a ruby object, a row in a database, a document in the database, and so much more!

We often talk about a 'CRUD App' because it is simply an interface, i.e. API, for CRUDing information.

- Create
- Read/Retrieve
- Update
- Delete

### RESTful routing

REST is a convention that 1) standardizes routes, making them guessable based on the resource name and 2) uses the minimum amount of information necessary to describe a specific route, thereby saving namespace. 

|Action  |VERB      |Path                 |Used For|
|--------|----------|---------------------|--------|
|Index   |GET       |'/resources'         |Display a list of the resources|
|Show    |GET       |'/resources/:id'     |Display a **specific** resource|
|New     |GET       |'/resources/new'     |Return an HTML form for create a new resource|
|Create  |POST      |'/resources'         |Create a new resource|
|Edit    |GET       |'/resources/:id/edit'|Return an HTML form for editing a **specific** resource|
|Update  |PATCH/PUT |'/resources/:id'     |Update a **specific** resource|
|Delete  |DELETE    |'/resources/:id'     |Delete a **specific** resource|

### Browser HTML initiated vs AJAX requests

- Browser requests initiated via HTML, i.e. link/script/img/form, can only use GET (link/script/img) and POST (form).
- AJAX requests can create any type of request: GET/POST/PATCH/PUT/DELETE.
- Other HTTP libraries or applications like HTTParty, Request, and CURL can also all use the full set of HTTP Verbs.

### Parts of a HTTP request/response

Example Client Request:
```
GET /index.html HTTP/1.1
Host: www.example.com

```

Example Server Response:
```
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)
Last-Modified: Wed, 08 Jan 2003 23:11:55 GMT
ETag: "3f80f-1b6-3e1cb03b"
Content-Type: text/html; charset=UTF-8
Content-Length: 138
Accept-Ranges: bytes
Connection: close

<html>
<head>
  <title>An Example Page</title>
</head>
<body>
  Hello World, this is a very simple HTML document.
</body>
</html>
```

- HTTP Verb
- URL
    - Path
    - Query Parameters
- HTTP Protocol Version Number
- Headers
- Body
    - on Requests:
        - Usually an encoded set of key value pairs based on the HTML form that submitted/initiated the request.
        - Can be any type of string, including JSON, which is what is usually sent in an AJAX request body.
    - on Responses:
        - Usually an HTML string.
        - Can be any type of string.
        - Usually JSON or XML when responding to an AJAX request.

### What types of requests can have a body?
  - POST
  - PATCH/PUT

### How HTML/link/script/img tags gets downloaded.

When you type 'google.com' into your browser and hit enter, your browser makes a **HTTP GET** request.

Example Client Request:
```
GET / HTTP/1.1
Host: google.com

```

google.com returns a response with a HTML string in its body. The browser reads the HTML string and renders it onto the screen.

When it sees a link, script, or img tag, it makes an additional request to get each additional piece of information.

### Server vs. Client-side templating.
Templating refers to the process in which tokens, e.g. `<%= movie.title %>` or `{{ name }}`  in a template string are replaced with data.
The difference between Server and Client-side templating is **when/where** the template **rendering** occurs.

- Server-side templating refers to the process in which strings are created via template rendering on the Server-side.
    - Before responding to a request
        - The server takes a template and merges in relevant data using token replacement.
    - Now that the template has been rendered into a complete HTML string.
        - The server sends the rendered HTML string back as the response body.
- Client-side templating refers to the process in which HTML strings are created via template rendering on the Client-side.
    - All data that the browser knows about has to have come from a server at one point or another.
        - That means that the template that is going to eventually be rendered on the browser through the process of token replacement must have originally come from the server. But, the **process** in which data was merged into the template through token replacement, i.e. **rendering**, occurred on the browser, NOT the server.
        - Where did we get the data to use with the template?
            - It came from:
                - User input.
                - Data sent back with the original HTTP request but not yet rendered onto the DOM.
                - Additional data retrieved through AJAX.
                - Some combination of the above.


