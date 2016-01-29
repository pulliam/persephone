var express = require('express');
var app = express();
var fs = require('fs');
var bezz = require('./lib/bees.json');
var bodyParser = require('body-parser');
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
var urlencodedBodyParser = bodyParser.urlencoded({extended: false});
app.use(urlencodedBodyParser);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/bezzforall', function (req, res) {
  res.json(bezz);
});

app.post('/beez', function (req, res) {
  var body = req.body;

  fs.readFile('./lib/bees.json', 'utf-8', 
    function(error, data){

      var existingHives = JSON.parse(data);

      var idOf = parseInt(body.id);
      var numberOf = body.num_bees;
      var locationOf = body.location;
      var notesOf = body.notes;

      var newData = {
        id: idOf, 
        num_bees: numberOf,
        location: locationOf,
        notes: notesOf
      }

      existingHives.hives.push(newData);
      var newDataJson = JSON.stringify(existingHives);

      fs.writeFile('./lib/bees.json', newDataJson, 
        function(error){
        if (!error){
         res.redirect('/');
        } else {
          console.log(error);
        }
      });
  });

});

app.listen(3000); 