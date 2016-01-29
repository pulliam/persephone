# You Down With O.O.P.?
Today, we learned the basics of **constructor** functions and **prototypal** object-oriented programming.

### Learning Objectives:

- To get practice and build muscle memory writing constructors functions
- To get practice instantiating objects of your own design

### Completion

Please finish up to part 5. Leave comments for us telling us what part of the hw you're working on, and also where you are lost and may need feedback.

As always, more is better, but healthy living is best!

__Create a file called prototypes.js for in today's `homework` folder for this assignment__

## Part 1 - Put My T-Shirt On
  - Define a __Shirt__ object constructor
    - upon __instantiation__ (meaning the creation of a new `Shirt` object, we should pass 3 arguments)
        - `size`
        - `color`
        - `text`
  - Instantiate a new shirt, `pearlJamTee`, which is extra-large, a nicely faded black, and says "Yield Tour 1998"
  - Instantiate another new shirt, `hipsterPlaid` which is size medium, the color red, says "NO LOGO" on the back

> What's your favorite shirt? Create your own shirt object!


## Part 2 - Baby You Can Drive My Car

  - Define a `Car` constructor function. It should be initialized with 4 arguments.
    - `year`
    - `make`
    - `model`
    - `color`
  - Write a method on the `Car` prototype called `startEngine` that returns the string `"Vrum vrum vrum!"`
  - Instantiate a new car, `dadsMiata`, which is a red Miata and was produced by Mazda in 1992.
    - Call `dadsMiata`'s `startEngine` method
  - Instantiate one more car, `myFirstCar`, which was a maroon 1995 Oldsmobile Cutlass Cierra SL.

> Instantiate your first car!

## Part 3 - Like Dylan in the Movies

- Define an object constructor function called `Movie` that takes a `title`, `year`, `director`, and `rating` when you initialize it.
- Create a method called `prettyPrint` that formats a string like the following:
"The Discreet Charm of the Bourgeoisie (1972) by Luis Buñuel"
- Instantiate the following movies:
    - Adaptation by Spike Jonze, 2002, rated R
    - Jurassic Park by Steven Spielberg, 1993, rated PG-13
    - My Neighbor Totoro by Hayao Miyazaki, 1993, rated G

> What's your favorite movie? Create your own movie objects, one for each rating.

## Part 4 - Band on the Run

- Create an object constructor function called `Band` that gets initialized with a `name`
- A band should have an instance attribute/property called `influences` that points to an array. Upon initialization all bands `influences` should contain "The Velvet Underground" and "The Beatles"
- Add a method on the `Band` prototype called `ripOff`, that takes a band parameter, to add additional bands to a band's `influences`

#### We hate it when our friends become successful

- Create a method on the `Band` prototype called `soundsLike` that takes a band's name
    - return `true` if the supplied band is in the influences array
    - otherwise return `false`

## Part 5 - All together now
- Create a constructor called `Musician` that takes a `name` and `instrument` as parameters
- Create a method on the prototype of `Musician` called `jam` that returns a string in the format "NAME is jammin' on INSTRUMENT"
- A band should have an instance attribute/property called `members` that has a default value of an empty array
- Create a method on the `Band` prototype called `join`
    - `join` should take an instance of `Musician` and add it to the band's `members` array
- Create a method on the `Band` prototype called `rockOut`
    - `rockOut` calls `jam` on each `Musician` in the band
- Create a method on the `Band` prototype called `artisticDifferences` that takes a `bandMember` parameter
    - If `artisticDifferences` returns true, it should remove that member from the band, i.e. the band's `members` array

Create the following bands and musicians

  - The Beatles
    - John Lennon, guitar
    - Paul McCartney, bass
    - George Harrison, guitar
    - Ringo Starr, drums

  - The Pixies
    - Black Francis, guitar
    - Kim Deal, bass
    - Joey Santiago, guitar
    - David Lovering, drums

## Bonus

## Part 6 - Heavy Metal Drummer

Bands are nothing without a steady back beat...

- If we call `rockOut` on a band without a drummer just **return** the string "crickets..."

> Do you like music? Create your favorite bands!  Who did you love to listen to when you were lonely and sad?


#### Paperback Writer

- Create a constructor called `Author` that takes a `name` and a `genre` at initialization.
- If an author is alive, we can call their `write` method and they will return a `new Book` object.  Wait, did we say to create a `Book` constructor? No?! Better make one and make sure it has a `title` on instantiation! Remember to have the write method pass the title to the `Book` constructor.
- If you call `die` on an instance of Author they will no longer be living.
- Wait, did we say they were alive?
- If an author is dead, when we call `write` return `false`
- If you call `theCompleteWorks` on an Author it should return all the book objects written by that author as an array.

> Do you like to read? Do you think everybody has a novel inside them? Create your favorite author instance objects!


### Additional Readings

Here's some mind blowing material for your consideration.

- [Bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
- [Call](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)

### Gist Rewind

Here's the [feedback](https://gist.github.com/sunsheeppoplar/c0af39be44191a71b24a) from last Thursday's (W02/D04) calculator and to-do list homework. 
