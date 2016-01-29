Given the following *HTTP requests*
write a Sinatra app that returns the appropriate *HTTP response.*

# Request

```http
GET '/greet/sung' HTTP/1.1
Host: localhost:3000

```

# Reponse

```http
HTTP/1.1 200 OK
# headers...

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Good Morning!</title>
  </head>
  <body>
    <h1>Hello Sung!</h1>
  </body>
</html>
```

# Request

```http
GET '/greet/anna' HTTP/1.1
Host: localhost:3000

```

# Response

```http
HTTP/1.1 200 OK
# headers...

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Good Morning!</title>
  </head>
  <body>
    <h1>Hello Anna!</h1>
  </body>
</html>
```

# Request

```http
GET '/greet/taylor?time=evening' HTTP/1.1
Host: localhost:3000

```

# Response

```http
HTTP/1.1 200 OK
# headers...

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Good Evening!</title>
  </head>
  <body>
    <h1>Evenin' Taylor!</h1>
  </body>
</html>
```

# Questions you might find yourself asking

- Do I need to make a layout.erb file? Sure!

- Do I need to make a views folder? Probably!

- Are we doing this with templates? I sure would.

- Are there any static assets? Not currently.

- Do I need to make a public folder. Maybe not so much.

# Challenger!

Request

```
GET '/greet/taylor?time=evening&jquery=true' HTTP/1.1
Host: localhost:3000

HTTP/1.1 200 OK
# headers...

<!doctype html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Good Evening!</title>
    <script src="js/jquery.js"></script>
  </head>
  <body>
    <script>
      $('button').on('click', function(event){
        console.log('Evening, Taylor!')
      });
    </script>
  </body>
</html>
```
