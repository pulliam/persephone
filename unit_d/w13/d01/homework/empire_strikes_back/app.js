var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')
app.use(methodOverride('_method'));

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

app.get('/', 
  function(req, res){
  res.render('index');
});

app.get('/squadrons', 
  function(req, res){
    db.collection('squadrons').find({}).toArray( function(err, results){
    res.render('squadrons_index', {squadrons: results});
    });
});

app.get('/:squadron/pilots', 
  function(req, res){
  db.collection('squadrons').findOne({_id: ObjectId(req.params.squadron)},
    function(err, result){
      res.render('squadron_show', {squadron: result});
    }
  );
});

app.get('/new', 
  function(err, result){
      res.render('new');
    }
  )
});

app.post('/squadron', 
  function(req, res){
  db.collection('cheeses').update(
    {_id: ObjectId(req.params.id)},
    {$set: { name: req.body.cheese.name }},
    function(err, result){
      res.redirect('/cheeses');
    }
  )
});

app.get('/:squadron/pilots/:callSign/edit', 
  function(req, res){
  db.collection('cheeses').findOne(
    {_id: ObjectId(req.params.id)},
    function(err, result){
      res.render('cheese_edit', {cheese: result});
    }
  )
});

app.patch('/:squadron/pilots/:callSign', 
  function(req, res){
  // id will be in req.params
  db.collection('cheeses').update(
    {_id: ObjectId(req.params.id)},
    {$set: { name: req.body.cheese.name }},
    function(err, result){
      res.redirect('/cheeses');
    }
  )
});

app.delete('/:squadron/pilots/:callSign', 
  function(req, res){
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
