var express    = require('express');
var ejs        = require('ejs');
var bodyParser = require('body-parser');
var app        = express();
var fs         = require('fs');
// requiring json WHAAAAA
var blackSquadron = require('./lib/black_squadron.json');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index');
});

app.get('/black_squadron', function(req, res){
  res.json(blackSquadron);
})

app.listen(3000);
