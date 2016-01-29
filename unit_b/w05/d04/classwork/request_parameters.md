# Parameters

Create a new file called `request_params.rb`

Given the following HTTP requests, figure out all the key value pairs as Ruby hashes.

# Part 1
First use Ruby's `puts` to print each hash of HTTP parameters to the terminal

Example:

```rb
{
    :name => "Sung",
    :well_shod => "true"
}
```

```http
POST /cast HTTP/1.1
Host: bigfish.io

reel=wire&bait=fish
```

```http
GET /hot_date?sunset=true HTTP/1.1
Host: hotdate.io

```

```http
POST /exgirlfriends HTTP/1.1
Host: breakups.biz

name=Toony&reason=irreconcilable_differences
```

```http
POST /vote HTTP/1.1
Host: terribleshow.io

contestant_id=4&voter_id=3&referrer=nytimes
```

```http
GET /armpits?hairy=true&hippie=false HTTP/1.1
Host: sniff.me

```

```http
POST /armpits HTTP/1.1
Host: sniff.me

user[name]=emily&user[hippie]=true&user[hairy]=true&referrer=email
```

```http
POST /armpits/7 HTTP/1.1
Host: sniff.me

brand=toms&_method=patch
```

```http
POST /armpits/11 HTTP/1.1
Host: sniff.me

shave=true&_method=patch
```

```http
GET /new/text?redirect_to=%2Fdashboard HTTP/1.1
Host: www.tumblr.com

```

```http
POST /new/text?redirect_to=%2Fdashboard HTTP/1.1
Host: www.tumblr.com

email=dogbeachguy%40gmail.com&body=first%20day%20at%20the%20beach!
```

# Challenges

Can you create a method called "to_url" that takes the hash and returns the key value pairs with "=" and "&"

```
to_url({name: "Anna", image: "anna.jpg"})
# "name=Anna&image=anna.jpg"
```

Can you create a "to_params" method that takes the original string and creates the params hash programatically?

```
to_params("name=Anna&image=anna.jpg")
# {name: "Anna", image: "anna.jpg"}
```

Can you create a request class that does the following:

```
r = Request.new({method: "GET", path: "/", host: "www.google.com"})
r.method #= "GET"
r.path #=> "/"
r.host #=> "www.google.com"
r.protocol #=> "HTTP/1.1"
r.to_s #=> "GET / HTTP/1.1\nHost: www.google.com\n\n"
```
