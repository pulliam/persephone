# Always Beekeepin' it Real

![beeee](http://blogimg.ngfiles.com/18000/18279/878883638_dig.jpg)

This is not a full solution; it's simply the front-end implementation of the beekeeping app. It uses a tool called [`json-server`](https://github.com/typicode/json-server), a program that creates a fake RESTful server from a JSON file.

To install json-server:

`$ npm install -g json-server`

To run the server:

`$ json-server --watch bees.json`

[Docs](https://github.com/typicode/json-server)

Also, the edit functionality is different from what you're used to - the text elements on the page are `contenteditable`. This was done to obviate the need for a modal/separate form.

### Resources:

1. [Demo of `contenteditable`](http://html5demos.com/contenteditable)
1. [MDN Example](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_Editable)
1. [HTML5 Doctor Article](http://html5doctor.com/the-contenteditable-attribute/)