var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')

// db
var db;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/sandbox';
MongoClient.connect(mongoUrl, function(err, database) {
  if (err) { throw err; }
  db = database;
  process.on('exit', db.close);
});

// Routes
app.get('/', function(req, res){
  res.render('index');
})

app.post('/dogs', function(req, res){
<<<<<<< HEAD
  var dog = req.body;
  db.collection('dogs').insert(dog, function(err, result){
  	res.json(result);
  });
=======
  console.log(req.body);
  var dog = req.body;
  console.log(req.params);
  console.log(req.query)
  db.collection('dogs').insert(dog, function(err, result){
    res.json(result);
  });

>>>>>>> c746cc50c4d66b6ae3dae8445636b24693fa0cf1
});

app.get('/dogs', function(req, res){
  db.collection('dogs').find({}).toArray(function(err, results){
    res.json(results);
  })
});

app.listen(process.env.PORT || 3000);
