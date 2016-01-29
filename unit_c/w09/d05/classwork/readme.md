Let's say you did the following

You can try this out by cloning this repo:
https://github.com/phlco/wrong_structure

```
$ mkdir project_sprint
$ cd project_sprint
$ git init
$ rails new sample_app
```

# OH NO

Heroku depends on your git repo being in the base of your Rails app!

```
.
├── readme.md
├── .git             # <= 1. but you did it here.
└── sample_app
    ├── Gemfile      # <= 1. You should have initiatlized in here
    ├── Gemfile.lock
    ├── README.rdoc
    ├── app
# ...
```

If you try to deploy to Heroku you'll get an error.

```
$ heroku create
$ git add .
$ git commit -m 'initial commit'
$ git push heroku master
# ! Push rejected, no Cedar-supported app detected
```

We need to deploy the sub directory `sample_app`!

You can deploy to heroku with the `git subtree` command

# PHEW

```
git subtree push --prefix RAILS_DIR_NAME heroku master
```

So if my Rails app is inside a directory called "sample_app" you can run

```
$ git subtree push --prefix sample_app heroku master
# You can run your other Heroku commands normally
$ heroku addons:create heroku-postgresql:hobby-dev
$ heroku run rake db:migrate
$ heroku open
```


