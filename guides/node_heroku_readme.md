# Deploying a Node app to Heroku

Welcome to the home stretch! We've deployed Rails applications to Heroku in the past, but now you may want to deploy a Node-based application (one that runs on an Express server, for example). Here are a few steps to get you started and troubleshooting like a pro:

[Heroku's Step-by-step Guide](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction) is a fantastic walkthrough of the steps you'll need to take to get your app up and running. Here's a quick synopsis:

- [ ] `heroku create` to create a Heroku app and add a git remote connection to your remote server 
- [ ] Add a `start` script to your `package.json` and create a `Procfile` that declares what command to use to start your app
- [ ] Set up your environmental variables using `heroku config`
- [ ] Set up any addons you need (most likely a database). **Note** - _Heroku may ask you for your credit card information for certain addons. Always choose the **"Hobby Dev"** option if you do not want to be charged for a plan._

Remember, when you run into errors deploying, this checklist and `heroku logs --tail` are your best friends!