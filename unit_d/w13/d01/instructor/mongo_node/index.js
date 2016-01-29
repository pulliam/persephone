var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/sandbox';

var db; /// useful in express

MongoClient.connect(mongoUrl, function(err, database) {
  if (err) {
    console.log(err);
  }
  console.log("Connected correctly to server");

  db = database;

  db.collection("kittens").insert({name: 'Violet'}, function(err, result){
    console.log(result);
  })

  db.collection("kittens").insert({name: 'Mildred'}).then(console.log)


  process.on('exit', db.close);
});
