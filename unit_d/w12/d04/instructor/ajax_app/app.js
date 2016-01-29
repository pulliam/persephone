var express    = require('express');
var ejs        = require('ejs');
var bodyParser = require('body-parser');
var app        = express();
var fs         = require('fs');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
var methodOverride = require('method-override');
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('index', {greeting: "sup"});
});

app.get('/toby', function(req, res){
  res.send("hi dreamboy");
});

app.get('/leo', function(req, res){
  var leo = {
    name: "Leonardo DiCaprio",
    img: "http://static2.hypable.com/wp-content/uploads/2013/05/Leonardo-DiCaprio-as-Arnie-Grape-in-What-s-Eating-Gilbert-Grape-leonardo-dicaprio-15238660-1152-656.jpg",
    link: "http://www.eonline.com/news/728806/watch-19-year-old-leonardo-dicaprio-react-to-being-labeled-a-teenage-heartthrob-i-didn-t-dig-that"
  }
  res.json(leo)
});

app.post('/random_color', function(req, res){
  // TODO actually make this random later.
  res.json("hi");
})

app.listen(3000);
