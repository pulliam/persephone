# Collaboration with Git and Github

## Introduction

> ***Note:*** _This will be a pair programming activity, so you'll be working with one other person during this lab._

Let's apply what we've learned from class to share and update each other's code.  With a partner, you're going going to alternate between who 'drives' (who's typing) and who 'navigates' (who decides what you're doing) while following the requirements under "Exercise" below. The goal will be to create a project, have a partner fork, clone, and edit the project, submit the changes as a pull request, and then have the changes merged.

If you get stuck, "rubber duck" it with your partner and do some research together! If you need help and can't find the answers you need, ask an instructor for assistance.

## Resources

- [Git documentation](https://git-scm.com/documentation)
- [Forking on github](https://help.github.com/articles/fork-a-repo/)
- [Syncing a fork](https://help.github.com/articles/syncing-a-fork/)

## Exercise

Partners will be referred to as **partner1** and **partner2**.

### Part 1

**With partner1 driving:**

- Create a folder called `git-and-github-practice`.
- Initiate a git repository from **within** this folder.
- Create a new repository on Github with the same name as your repo's folder (`git-and-github-practice`) and [**add an "origin" remote**](https://help.github.com/articles/configuring-a-remote-for-a-fork/) to your local repo (on your machine).
- Within that folder, create the following files: `index.html` `style.css`
- Create a simple index page with **partner1**'s name as a header. Add their morning beverage of choice (image optional) and favorite motivational or demotivational quote as list items below.
- Add & commit your changes with a sensible commit message, and push to GitHub. Make sure you check to see that your changes were pushed up!


**With partner2 driving, from their computer:**

- Get your partner's link to the GitHub repository, fork it, and clone it down onto your machine.
- Open your copy of `index.html` in Sublime and add `partner2`'s name as another header, along with another list of beverages and inspiration.
- Below your content, add a `footer`. Inside this footer, include a link to this project's repo on GitHub.
- Link your stylesheet to your HTML document.
- Commit your changes and **submit a pull request** back to **partner1**'s original repo.

**With partner1 driving:**

- Merge your partner's pull request into your own code using GitHub's web interface.

### Part 2

**With partner2 driving**:

- Time to flip it around! Navigate *up and out* of your local `git-and-github-practice` folder. Follow the workflow from Part 1 above to create a new local repo called `git-and-github-practice-two`. Create a new Github repo (also called `git-and-github-practice-two`), then add an **origin** remote that links your new local repo and your new Github repo.
- Copy the `index.html` and `style.css` files that you used in Part 1 to this new repo.
- Add, commit, and push up your files to your new repo.

**With partner1 driving:**

- Get your partner's link to the new GitHub repository.
- Fork it to your account and clone it down to your local machine.
- Open the project and add some style! Change the default font for the body of your page, the `list-style-type` of your ul, and the background color and text color of the footer.
- Add/commit your changes and submit a pull request back to **partner2**.


**With partner2 driving:**

- Merge the pull request using the GitHub interface.

**Bonus**:

- Use the [syncing a fork](https://help.github.com/articles/syncing-a-fork/) documentation to update **partner2**'s local version of `git-and-github-practice` without copying and pasting any code
- Push the updated local copy to GitHub.

#### Deliverable

At the end of this lab, you should have two separate GitHub repositories that have merged pull requests.
