var express       = require('express');
var session       = require('express-session');
var ejs           = require('ejs');
var bodyParser    = require('body-parser');
var request       = require('request');
var crypto        = require('crypto');
var querystring   = require('querystring');

var app           = express();

app.use(session({secret: process.env.SESSION_SECRET}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  var loggedIn = !!req.session.github_access_token;

  console.log(req.session.github_access_token);

  res.render('index', {notice: '', loggedIn: loggedIn});
});

app.get('/sign_in_with_github', function(req, res) {
  var state = crypto.randomBytes(24).toString('hex');
  req.session.githubState = state;
  console.log('state:', state);

  res.redirect('https://github.com/login/oauth/authorize?client_id=' + process.env.GITHUB_OAUTH_CLIENT_ID + '&scope=user&state=' + state);

});

app.get('/oauth/github', function(req, res) {
  var state = req.session.githubState;
  var code = req.query.code;

  console.log('code:', code);

  if (state === req.query.state) {
    console.log('states match!');

    var body = {
      client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
      client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
      code: code,
      state: state
    }

    request.post('https://github.com/login/oauth/access_token', {form: body}, function(error, httpResponse, responseBody) {
        var responseBody = querystring.parse(responseBody);
        req.session.github_access_token = responseBody.access_token;

        console.log('responseBody:', responseBody);
        res.redirect('/');
    });
  } else {
    //abort
    res.redirect('/');
  }
});

app.get('/profile', function(req, res) {
  var loggedIn = !!req.session.github_access_token;

  if (loggedIn) {
    // get info from github api
    var options = {
      url: 'https://api.github.com/user?access_token=' + req.session.github_access_token,
      headers: {
        'User-Agent': 'OAuth Example App'
      }
    };

      request.get(options, function(error, httpResponse, responseBody) {
        var responseBody = JSON.parse(responseBody);
        console.log('responseBody:', responseBody);

        res.render('show', responseBody);
      });
    } else {
    res.redirect('/');
  }

});















app.listen(3000);
