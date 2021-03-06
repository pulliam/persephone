## Band.io

![image](http://thisiswhyyoureold.com/wp-content/uploads/2012/08/hair-band.jpg)

Concert managers the world over have had it up to here with the lousy concert management apps out there, and have enlisted your help in building a Rails app so that their friends and former-colleagues can effectively manage their schedules.

#### Homework Objectives 
  - gain additional experience using the following:
    - [Active Record Migrations](http://api.rubyonrails.org/classes/ActiveRecord/Migration.html)
    - [Active Record Validations](http://guides.rubyonrails.org/active_record_validations.html)
    - [Active Record Associations](http://guides.rubyonrails.org/association_basics.html)
    - [Strong params](http://edgeapi.rubyonrails.org/classes/ActionController/Parameters.html#method-i-require)
    - [Form helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/FormHelper.html)
    - [Link helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/UrlHelper.html)
    - [Asset helpers](http://api.rubyonrails.org/classes/ActionView/Helpers/AssetUrlHelper.html)

#### Completion 

Completion for tonight's homework is to get through part 6. 

#### Part 1: Migrations and Models

Write migrations for the following models:

- A __Venue__ can have many events, as well as many bands (through events), and has the following attributes:

  - `name` (mandatory)
  - `city` (mandatory)
  - `state` (mandatory)
  - `is_family_friendly` (defaults to false)

- An __Event__ belongs to a venue __and__ a band, and has the following attributes:

  - `performs_on` (mandatory date)
  - `is_alcohol_served` (defaults to true)
  - `band_id` (mandatory)
  - `venue_id` (mandatory)

- A __Band__ has many events, and the following attributes:

  - `name` (unique and mandatory)
  - `genre` (mandatory)
  - `has_explicit_lyrics` (defaults to false)

You can use the following seed data to get started: 

```rb
Band.destroy_all
Venue.destroy_all
Event.destroy_all

v1 = Venue.create({name: "Stone Balloon",  city: "Newark",    state: "DE", is_family_friendly: true })
v2 = Venue.create({name: "T.T. the Bears", city: "Cambridge", state: "MA"})
v3 = Venue.create({name: "Paradise Rock Club", city: "Boston", state: "MA"})
v4 = Venue.create({name: "Theatre of Living Arts", city: "Philadelphia", state: "PA", is_family_friendly: true})
v5 = Venue.create({name: "The Echo", city: "Los Angeles", state: "CA"})

b1 = Band.create({name: "Tramps Like Us", genre: "Tribute Band", has_explicit_lyrics: false})
b2 = Band.create({name: "KISS ALIVE!",    genre: "Tribute Band", has_explicit_lyrics: true})
b3 = Band.create({name: "unSung Heroes",  genre: "K Pop",        has_explicit_lyrics: true})
b4 = Band.create({name: "Chris Johnson and the B Street Band", genre: "Tribute Band", has_explicit_lyrics: false})

e1 = Event.create({performs_on: Date.parse("Dec 12, 2015"), band: b1, venue: v1})
e2 = Event.create({performs_on: Date.parse("Dec 13, 2015"), band: b1, venue: v2})
e2 = Event.create({performs_on: Date.parse("Dec 13, 2015"), band: b2, venue: v1})
e3 = Event.create({performs_on: Date.parse("Dec 14, 2015"), band: b3, venue: v1})
```

# Update!

Make `genres` it's own table! Create a new migration so that bands can have 
any genres and a genre can have many bands.

This might require some seed file updating!

#### Part 2: The Root Path

- When the user visits the root path, they should be presented with a page that has links to the following: 
  - `/venues` (which will eventually list all the venues)
  - `/bands` (which will eventually list all the bands)
  - `/events` (which will eventually list all the events)
  - `/venues/new` (which will eventually hold a form to create a venue)
  - `/bands/new` (which will eventually hold a form to create a band)

#### Part 3: Index Views!

Implement the index views for `/bands`, `/venues`, and `/events`.

#### Part 4: Show Views!

Implement a show view for a given band, venue, or event.

#### Part 5: Functional Forms!

Make the forms for creating new venues and new bands work. 
(Don't worry about editing and deleting, just creation.)

#### Part 6: Adding to the Venue Show Page

When the user visits the "show" page of a particular venue, they should be presented with (in addition to the venue's basic info) a link to `/venues/WHATEVER_VENUE_ID/events/new`, which will hold a form for creating a new event

#### Part 7: The New Event Form

When the user visits `/venues/WHATEVER_VENUE_ID/events/new`, they should be presented with a form for creating a new event. Make the form meet the following specifications:

- if the venue looking to book the event is family-friendly, 
only family-friendly bands should be listed as options.

#### Bonus

- Try adding https://github.com/ctran/annotate_models
- Add predicate methods on your Active Record models.
- on the root path, add a simple form for searching all events (across all venues) that occurred on a particular date (look into the [html 'date' input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input)). Upon submitting the search form, the user should be redirected to `/search_results`, which should render a list of the results for their search.
- Events that takes place in Utah venues can't serve alcohol
- Don't allow a band to be scheduled on 3 consecutive nights unless all 3 nights take place at the same venue
- Allow an event to have many bands, like a festival
