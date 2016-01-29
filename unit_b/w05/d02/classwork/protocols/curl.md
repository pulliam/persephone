# CURL

> cURL is a command line tool for transfering data via various protocols.

The basic syntax is as follows

```
$ curl [-X HTTP-METHOD] [-d DATA] PATH
```

### Parameters

- HTTP-METHOD - `GET` or `POST`

- DATA - key value pairs separated by an equals sign, '=' and each pair separated by an ampersand

example: `fname=taylor&lname=swift&fans=swifties`.

- PATH - the URL to a resource

### Flags

-v Verbose

-I Just show the response headers

## Let's try it out

> Can you start a netcat server on your localhost on port 3000

> In another window try curling to it.

## Examples

```
$ curl -X GET http://www.nytimes.com
```

> curl *defaults* to GET so `-X GET` is optional.

```
$ curl -X POST -d animal=ferret http://requestb.in/piuix9pi
```

## Activity

Practice curling the following URLs from the command line.
Pract using the `-v` and `-I` flags.

```
https://httpbin.org/html
```

Observe the responses and perform additional GET requests based off the location redirects until you reach a status code of 200.

```
http://www.newyorktimes.com
```

```
http://www.twitter.com
```

```
https://www.thefacebook.com/
```

### Questions

- What other status codes did you receive?

- What other headers did you see?

- How many requests did it take to reach 200?

