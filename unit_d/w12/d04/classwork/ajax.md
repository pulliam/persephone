# Ajax!

If you remember, Ajax performs requests to the server via JavaScript, which means the
browser doesn't reload the page and our server response is typically in JSON.

Read through the following code and discuss with your neighbor in what order would the
alerts fire. Why?

```js
alert(1);

$(document).ready(function(){
  alert(2);
  $('#leo-me').on('click', function(event){
    alert(3);
    $.ajax({
      url: '/leo',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){
      alert(4);
      console.log(response);
    })
    alert(5);
  })
  alert(6);
});

alert(7);
```

Scan through the jQuery ajax docs http://api.jquery.com/jquery.ajax/

- What is dataType?
- What is .done?

# Start up `ajax_app`

Read through app.js.

Refer to the [Express docs](http://expressjs.com/en/api.html) to answer What is the difference between res.render, res.send and res.json?

Update the Ajax request to "/leo" so that when the client receives there response, Leo's name and image are appended to the DOM.

Create a new button on `index.ejs` with the text random color.
When a user clicks "random color" perform an Ajax GET request to "/random_color"
In your app.js handle the GET request to "/random_color" and send back a JSON response in the format
{color: "blue"}
When the client receives the response, append the color's text to an LI tag on the page.
