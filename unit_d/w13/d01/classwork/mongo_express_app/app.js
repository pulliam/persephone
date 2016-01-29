var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var mongoUrl = 'mongodb://localhost:27017/myDb';
var ObjectId = require('mongodb').ObjectId;

// Configuration
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// DB setup
var db;
MongoClient.connect(mongoUrl, function(err, database) {
  if (err) {
    console.log(err);
  }
  console.log("Connected correctly to server");
  db = database;
  process.on('exit', db.close);
});

// Routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/cheeses', function (req, res){
	db.collection("xis").find().toArray(function(err, results){
		// res.json(results);
		// res.send(results[0]);
		res.render("cheeses_index", {xises: results});
	})
});

app.get('/cheeses/:id', function(req, res){
	db.collection('xis').find({_id: ObjectId(req.params.id)}).toArray(
		function(err, result){
			res.render("cheese_show", {xis: result});
		})
})


app.listen(process.env.PORT || 3000);
