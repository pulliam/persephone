# Morning Exercise

## First

We're going to practice some Git and GitHub collaboration so let's first make sure we have the command line tool "hub" installed. Hub integrates GitHub with the Git command line. 
> You can check if a command line application is installed by running `which APP_NAME`

Let's try it with "hub"

```
$ which hub
```

if hub isn't installed you can install it with brew

```
$ brew install hub
```

## Second

Navigate to your desktop and create a new directory called "hub_test"

Initialize a new git repo inside hub_test 
> hub provides a command called "create" which you can run inside a local repo and it will create a corresponding repo on GitHub and add it as a remote.

```
$ hub create
```

Try adding a readme.md and pushing it to GitHub.

## Third

Let's practice creating a new branch to work on. 
> You can run git checkout to switch to an existing branch or run it with "- b BRANCH_NAME" to make and switch to a new one.

Create new branches for any new feature or task. Give your branch a short action focused descriptive name in kebab-case.

```
$ git checkout -b create-landing-page
```

Create an index.html page with an h1 tag that says "good morning"

Try pushing this branch's work to GitHub. We'll push this branch by including the name as an argument.

```
$ git push origin create-landing-page
```

try opening this repo with hub's browse command

```
$ hub browse
```

Try reviewing the changes and merging them in.

Be sure to pull your work down since master has been merged.

## Fourth

Connect with your neighbor. One of you should add the other as a collaborator giving them push pull access.  The new collaborator should delete their hub_test and clone down the new repo

Create a new branch called "add-jquery" and add jquery to index.html

push your work, create a pull request up and have the maintainer merge it in.

## Fifth

Trade off between computers and practice implementing the following with new branches and pull requests for each.

- On index.html create a button that displays "quiz me"

- add JS so that when "quiz me" is clicked it will show a random quiz question from an array. 
> start with an array with one question. don't waste your time!

- Add a button that says "10 second timer" that when pressed countsdown from 10 to 0

- Add a new form with a text input to enter a new question.

- Add a button that says "create question" that takes the form input and adds it to the question array.

# Resources 
- https://help.github.com/articles/using-pull-requests/
- https://guides.github.com/introduction/flow/
