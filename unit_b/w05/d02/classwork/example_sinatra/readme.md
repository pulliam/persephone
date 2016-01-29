# Vocab

- Sinatra - a web application library and DSL
- DSL - a domain specific language - a computer langauge for a specific problem domain.
- Web Application - a client/server application versus a desktop app
- Rack - a web server interface in Ruby
- Middleware - Software that provides as service. It can be described as the dash in client-server, or the -to- in peer-to-peer.

# Application Layout

```
example_sinatra/
├── config.ru # The configuration file for Rack.
└── server.rb # The Ruby code that runs ontop of Rack.
```

# Take a look

Read through `server.rb` and `config.ru` What does it look like they're doing?

# modu-wha?

A module is a collection of methods and constants. Think of it like a namespace 
or even more plainly like a trapper-keeper.

We access contants inside of modules with the `::` operator. 

```rb
module DogPound
    class Dog
    end
end
```

So to access the `Dog` class we'd write `DogPound::Dog` and treat it like
normal 

```rb
d1 = DogPound::Dog.new
```

# Start the server

We'll use `rack`'s command line tool `rackup` to start a web server, listen on a port, and execute code based on requests.

```
# run from inside the sinatra app. It's looking for the config.ru file.
$ rackup
```

> What does the server output?

> Many command line tools follow a convention of using a help flag `-h` to show usage and options.

- Does Rack have one? 

- How would you listen on port 3000?


# Activities

Spend the next 15 minutes familiarizing yourself with the Sinatra documentation and find answers to the following:

- Where is the Sinatra documentation?
- Are we using a classical or modular style?
- What is a Route?
- What does the return value of a route block do?
- What is the params hash?
- How would we link '/public/css/style.css' in our HTML?
- Explain the difference between '/index.html' and '/'
- How do we serve static assets in Sinatra?
- What do filters do?

## Bonus

Take a look at `server.rb`.  We haven't written much code, but it seems to be 
doing a lot. 

- Where do you think the code is defined? 
- Do you think you can find the source code on github?
