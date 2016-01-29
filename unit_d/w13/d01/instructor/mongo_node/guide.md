## Getting Started

MongoDB requires a mongo server to be running in order to connect.

> You can run this command from anywhere in the terminal

```sh
$ mongod
```

Install `mongodb` with npm.

> This assumes you've already run `npm init -y`!

```sh
npm install --save mongodb
```

In Node require the MongoClient and assign the database connection to a global
variable via the callback.

> This allows us to use `db` later on, like in express routes!

```js
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/sandbox';

var db;

MongoClient.connect(mongoUrl, function(err, database) {
  if (err) {
    console.log(err);
  }
  console.log("Connected correctly to server");

  db = database;

  process.on('exit', db.close);
});
```

# Usage

Translating from native MongoDB syntax to the Node Client is relatively simple.
Results are retrieved via a callback or promise.

Native Mongo

```js
db.kittens.insert({name: 'Violet'});
```

MongoClient in Node

```js
// callback
db.collection('kittens').insert({name: 'Violet'}, function(err, result){
  console.log(result);
});

// promise
db.collection('kittens').insert({name: 'Violet'}).then(console.log);
```

# Inserting

```js
db.collection('kittens').insert({name: 'Tiny'}, function(err, result) {
  console.log(result);
});
```

# Updating

One Document

```js
db.collection('kittens').update(
  {name: 'Tiny'},
  {$set: {color: 'orange'}},
  function(err, result) {
    console.log(result);
  });
```

Multiple Documents

> This requires `{multi: true}`

```js
db.collection('kittens').update(
  {},
  {$set: {color: 'orange'}},
  {multi: true},
  function(err, result) {
    console.log(result);
  });
```

# Querying

Find all

> Note the `toArray()` method is invoked

```js
db.collection('kittens').find({}).toArray(function(err, results){
  console.log(results);
});
```

Find One

```js
db.collection('kittens').findOne({name: 'Tiny'}, function(err, result){
  console.log(result);
});
```

# Sorting

> Note! To sort on a field use 1 for ascending or -1 for descending

```js
db.collection('kittens').find({}).sort({name: 1}).toArray(function(err, result){
  console.log(result);
});
```

# Limiting

```js
db.collection('kittens').find({}).limit(2).toArray(function(err, result){
  console.log(result);
});
```

## Resources

- https://github.com/mongodb/node-mongodb-native
- https://docs.mongodb.org/ecosystem/drivers/node-js/
