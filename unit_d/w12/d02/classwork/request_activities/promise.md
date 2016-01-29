Read through the following

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Analyze the updated code below. How are promises implemented differently than callbacks?

```
var request = require('request');
var randomUser = {};

var url = 'https://randomuser.me/api/'

randomUser.get = function(){
  var promise = new Promise(function(resolve, reject){
    request(url, function(error, response, body){
      var data = JSON.parse(body);
      resolve(data.results[0].user);
    });
  });
  return promise;
}

module.exports = randomUser;
```

then to use

```
var randomUser = require('./randomUser.js');
randomUser.get().then(function(user){
  console.log(user);
});
```
