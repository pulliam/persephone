// Requirements

var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');

// Middleware

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser());
app.use(bodyParser.json());
// logger
app.use(function(req, res, next) {
  console.log(req.method, req.url, '\n body:', req.body, '\n session:', req.session);
  next();
})

// DB Setup

var db;
var mongoUrl = "mongodb://localhost:27017/shoutout_app_dev";
MongoClient.connect(mongoUrl, function(err, database) {
  if (err) { throw err };
  db = database;
  process.on('exit', function() {
    db.close();
  })
});

// Routes

app.get('/', function(req, res) {
  db.collection('students').find({}).toArray(function(err, students) {
    
    var name = false;
    res.render('index', {students: students, name: name});
  });
});

app.post('/login', function(req, res) {
  res.redirect('/');
});

app.get('/logout', function(req, res) {
  res.redirect('/');
})

app.post('/shoutouts', function(req, res) {
  var shoutout = {};
  shoutout.content = req.body.content
  shoutout.created_at = new Date().toISOString();
  db.collection('students').update({name: req.body.student},{ $push: { shoutouts : shoutout } }, function(err, data) {
    console.log(data);
    res.redirect('/');
  })
});

// Routes I'm planning to hit with AJAX
app.get('/api/students/random', function(req, res) {

  var limit = parseInt(req.query.limit) || 1; 

  db.collection('students').aggregate([{$sample: { size: limit }}]).toArray(function(err, data) {
    res.json(data);
  })
});

app.get('/api/shoutouts/random', function(req, res) {

  var limit = parseInt(req.query.limit) || 1; 
  
  db.collection('students').aggregate([{$sample: { size: limit }}]).toArray(function(err, data) {
    var randomShoutouts = data.map(function(student) {
      var randShoutoutIndex = Math.floor(Math.random() * student.shoutouts.length);
      return { name: student.name, shoutout: student.shoutouts[randShoutoutIndex] };
    })
    res.json(randomShoutouts);
  })

});

// Listening

app.listen(3000, function() {
  console.log('Application listening on port 3000.');
});