var express = require('express');
var session = require('express-session');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var request = require('request');
var crypto = require('crypto');
var querystring = require('querystring');

var app = express();

app.use(session({secret: process.env.SESSION_SECRET}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {

	var logged = !!req.session.github_access_token;

	res.render('index', {notice: '', loggedIn: logged});

});

app.get('/sign_in_with_github', function (req, res){

	var state = crypto.randomBytes(24).toString('hex'); //creates a random key
	req.session.githubState = state;                    //We do this to store that info to the other route

	console.log('State: ', state);

	res.redirect('https://github.com/login/oauth/authorize?client_id=' + 
		process.env.GITHUB_OAUTH_CLIENT_ID + '&scope=user&state=' + state);

});

app.get('/oauth/github', function (req, res){
	var state = req.session.githubState              //And now we access it from here.
	var code = req.query.code;                       //req.query is what we are getting from github url response.

	console.log('code: ', code);

	if (state === req.query.state) {                 //If the state matches the github state
		console.log('states match!');

		var body = {
			client_id: process.env.GITHUB_OAUTH_CLIENT_ID,
			client_secret: process.env.GITHUB_OAUTH_CLIENT_SECRET,
			code: code,
			state: state
		}

		request.post('https://github.com/login/oauth/access_token', {form: body},
			function(error, httpResponse, responseBody){

				var responseBody = querystring.parse(responseBody);   //this became a parsed object

				req.session.github_access_token = responseBody.access_token;    //we are setting a session variable

				console.log('responseBody ', responseBody);
				res.redirect('/');
		});

	} else {     //If it doesnt, abort.
		redirect('/');
	}

});

app.get('/profile', function(req, res) {

	var loggedIn = !!req.session.github_access_token;

	if (loggedIn){

		var options = {
			url: 'https://api.github.com/user?access_token=' + req.session.github_access_token,
			headers: {
				'User-Agent': 'OAuth Example App'
			}
		}

		request.get(options, function(error, httpResponse, responseBody){

			var responseBody = JSON.parse(responseBody);

			res.render('show', responseBody);

		})

	} else {
		res.redirect('/');
	}

});


app.listen(3000);
