// Requirements
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser');
var session = require('express-session')
var bcrypt = require('bcrypt');
var MongoStore = require('connect-mongo')(session)

var authenticateUser = function(name, password, callback) {
  db.collection('students').findOne({name: name}, function(err, data) {
    if (err) {throw err;}
    bcrypt.compare(password, data.password_digest, function(err, passwordsMatch) {
      if (passwordsMatch) {
        callback(data);
      } else {
        callback(false);
      }
    })
  });
};

// Middleware

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'))
app.use(bodyParser());
app.use(bodyParser.json());
// logger
app.use(function(req, res, next) {
  console.log(req.method, req.url, '\n body:', req.body, '\n session:', req.session);
  console.log("Wow a change")
  next();
})

var mongoUrl = "mongodb://localhost:27017/shoutout_app_dev";

app.use(session({
  secret: 'waffles',
  store: new MongoStore({ url: mongoUrl })
}))


// DB Setup
var db;

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
    
    var name = req.session.name || false;
    res.render('index', {students: students, name: name, err: false});
  });
});

app.post('/login', function(req, res) {
  // req.session.name = req.body.username;
  authenticateUser(req.body.username, req.body.password, function(student) {
    if (student) {
      req.session.name = student.name;
      req.session.userId = student._id;
    }
    res.redirect('/');
  });
});

app.get('/logout', function(req, res) {
  req.session.name = null;
  req.session.userId = null;
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

  // res.json([{name: "Anna", shoutout:
  //     {content: "Way to go on that aggregate function..."}
  // }])
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