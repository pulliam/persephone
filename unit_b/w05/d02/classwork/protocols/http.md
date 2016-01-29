# HTTP Protocol - Are you down with HTTP?

![:image](https://http.cat/200)

## Yes, you do know me.

> HTTP resources are identified and located on the network by uniform resource locators (URLs),

> HTTP is the protocol to exchange or transfer hypertext.

> HTTP is a stateless protocol, which means each request is treated as an independent transaction  that is unrelated to any previous request so that the communication consists of independent pairs of request and response.

> A disadvantage of statelessness is that it may be necessary to include additional information in every request, and this extra information will need to be interpreted by the server.

## The Request

The request message consists of the following:

- A request line, for example `GET /images/logo.png HTTP/1.1`, which requests a 
resource called `/images/logo.png` from the server.
- Request header fields (key value pairs), such as `Accept-Language: en`.
- An empty line.
- An optional message body.

In the HTTP/1.1 protocol, all header fields except Host are optional.

## The Response

The response message consists of the following:

- A Status-Line, which include the status code and reason message. 
(e.g., `HTTP/1.1 200 OK`, which indicates that the client's request succeeded)
- Response header fields, such as `Content-Type: text/html`.
- An empty line
- An optional message body

## Examples

Request

```
GET /index.html HTTP/1.1
Host: www.example.com

```

Response

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

# Activity

Identify host, path and any query parameters or URL fragments in the following URLs

> scheme:[//[user:password@]host[:port]][/]path[?query][#fragment]

```
https://tools.usps.com/go/TrackConfirmAction.action?tLabels=9400111699000141024323
```

```
http://www.nytimes.com/2015/11/17/science/haramiyid-jawbone-in-rock-may-clear-up-a-mammal-family-mystery.html?action=click&pgtype=Homepage&version=Moth-Visible&moduleDetail=inside-nyt-region-0&module=inside-nyt-region&region=inside-nyt-region&WT.nav=inside-nyt-region&_r=0/#search
```

```
https://www.etsy.com/c/electronics-and-accessories/electronics-cases/phone-cases?ship_to=US&max=700
```

```
https://mail.google.com/mail/u/0/#search/is%3Aunread/15112a0e67445130
```
