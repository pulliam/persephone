# Lab Prompt!

As preparation for the group, project we're going to do a mini day long project sprint.

By the end of the day you should have the basic MVP of a Rails web app.

# Setup

We've been tasked with creating a vacation rental app.

Required Technology
- Rails 4
- jQuery
- HTML
- CSS

# Groups 

Group 1   | Group 2  | Group 3  | Group 4  | Group 5
:--       | :--      | :--      | :--      | :-- 
Taylor    | Suhyun   | Alex     | Kim      | Jess   
Bennett   | Frances  | De       | Sergey   | Dana       
Isabel    | Emily    | Julia    | Chris    | Ona      
Meredith  | Thais    | Natasha  | Amadeo   | Nathan         
Johnny    | Anusha   |          |          |          

# Day Agenda

Time       | Activity
:--        |:--
9am        | Planning
10am to 12 | 20 minute pairing sessions with group members
1:30pm     | Scrum
4:00pm     | Demo
4:30pm     | Kwiki Retro

# Planning

In your teams from 9 to 9:30

- [ ] Set up your desks into a pod!
- [ ] Elect someone to create a trello board and invite your team members
- [ ] Elect someone to create your git repo and invite your team as collaborators
- [ ] Elect someone to sketch out some simple wireframes from the user stories
- [ ] Elect someone to model the ERD based on the user stories

From 9:30 to 9:50

- [ ] Add user stories to trello
- [ ] Add tasks to trello
- [ ] Prioritize tasks and user stories
- [ ] Decide on MVP features
- [ ] Create a README.md and upload your wireframes

Before writing any code you'll set up the following: 

- Domain modeling and ERD
- Wireframes
- Trello board
- User stories and tasks
- Assign tasks and user stories

## Trello Setup

Add tasks and user stories to your Trello board.

### Tasks

- Setup Rails App
- Setup ERD
- Create models
- Test associations
- Seed database

### User Stories

- a user can sign up with their email, password, password confirmation
- a user can login
- a logged-in user can update their profile to include a picture and a short bio
- a user can create a listing
- a listing can have a photo, an address, a neighborhood, a price per night, and a description
- a user can edit their own listings
- a user can write their bio and listing descriptions in markdown
- a user can't edit other users' listings
- a user can search by neighborhood
- when a user searches by neighborhood they can sort by price
- a user can book a listing if it's available
- when a user requests to book a listing, it remains "pending" until the owner approves or disaproves
- a user can not see a location's exact address until their booking is confirmed
- the owner of a listing can view pending bookings
- a user can see a list of proposed bookings and confirm or deny them
- a user can see upcoming bookings separated from old bookings
- a user can view a history of their bookings, both confirmed and denied
- after a user's stay they can write a review of their experience
- after a user's stay, the owner of that listing can write a review about the guest
- when a user views a listing they can see the weather for that location
- a user can browse listings without being logged in
- when a non logged in user browses listings, after 20 seconds a "sign up" modal appears

# Tech Requirements

- CSS
  - Include [Font Awesome's CDN](http://fortawesome.github.io/Font-Awesome/get-started/#bootstrapcdn) and take a look at the [examples](https://fortawesome.github.io/Font-Awesome/examples/)

- Server Side Validation with ActiveRecord
  - A user's email must be unique
  - password must be 8 characters in length
  - password and password_confirmation must match

- Client Side Validation with JavaScript
  - password must be 8 characters in length
  - password and password_confirmation must match

# Pairings

Each pair will work off of one computer. 

10 to 10:20 - First pairing session Driver/Navigator

One person will "Drive" and the other will "Navigate" which means the edriver controls the keyboard and focuses on the immediate task of coding, and the navigator acts as a reviewer, observing and thinking about more strategic architectural issue.

- [ ] Attach your names to a trello card
- [ ] Move the card to doing
- [ ] When completed merge master into your branch
- [ ] Push up your branch
- [ ] Alert the rest of your team
- [ ] Have another team member look over your request
- [ ] Then merge in the changes yourself
- [ ] Move your card to done
- [ ] Alert the rest of your team
- [ ] Take another card switch driver and navigator positions and repeat!

10:25 to 10:30 - Group sync up

- [ ] Review board and progress made

10:40 to 11:00 - Second pairing session - "Back seat driver" - Driver only types what Navigator tells them to. 

- [ ] See above

11:10 to 11:30 - Third pairing session - Ping Pong - switch navigator and driver every 5 minutes

- [ ] See above. No talking.

11:40 to 12 - Fourth Pairing session - switch navigator and driver every 10 minutes

- [ ] See above. No mouse
