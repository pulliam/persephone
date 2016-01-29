var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/sandbox';

var db;

MongoClient.connect(mongoUrl, function(err, database) {
  if (err) {
    console.log(err);
  }
  console.log("Connected correctly to server");

  db = database;

  db.collection("xis").insert( {name: "Cheedar", color: "Yellow", origin: "USA"}, 
  	function(err, result){
  		console.log(result);
  	}
  );

  db.collection("xis").find().toArray( 
  	function(err, results){
  	console.log(results);
  	}
  );

  process.on('exit', db.close);
});