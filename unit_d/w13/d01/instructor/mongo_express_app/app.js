var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// Configuration
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// DB setup
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = "mongodb://localhost:27017/myDb";
var db;
MongoClient.connect(mongoUrl, function(err, database){
  if (err) {
    console.log(err);
  }
  console.log("connected!");
  db = database;
  process.on('exit', db.close);
})

// custom middleware to log req body, params and query
app.use(function(req, res, next){
  console.log("body:", req.body, "params:", req.params, "query:", req.query);
  next();
});

app.get('/', function(req, res){
  res.render('index');
});

app.get('/cheeses', function(req, res){
  // query the db for cheeses
  db.collection('cheeses').find({}).toArray(function(err, results){
    console.log(results);
    // render out all the cheeses
    res.render('cheeses_index', {cheeses: results});
  })
});

app.get('/cheeses/:id', function(req, res){
  db.collection('cheeses').findOne(
    // have to require ObjectId from mongodb
    {_id: ObjectId(req.params.id)},
    function(err, result){
      res.render('cheese_show', {cheese: result});
    }
  );
});

app.get('/cheeses/:id/edit', function(req, res){
  db.collection('cheeses').findOne(
    {_id: ObjectId(req.params.id)},
    function(err, result){
      res.render('cheese_edit', {cheese: result});
    }
  )
});

app.patch('/cheeses/:id', function(req, res){
  // id will be in req.params
  db.collection('cheeses').update(
    {_id: ObjectId(req.params.id)},
    {$set: { name: req.body.cheese.name }},
    function(err, result){
      res.redirect('/cheeses');
    }
  )
});

app.listen(process.env.PORT || 3000);
