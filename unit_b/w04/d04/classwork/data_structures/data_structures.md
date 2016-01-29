# Ruby Arrays, Hashes, and Blocks

## Objectives

- be able to inspect and update Ruby arrays and hashes
- be able to use common array and hash methods
- be able to use enumerable methods that require blocks


## Common Array Methods:

#### Reflection methods

- length
- empty?
- include?
- index

#### Mutation methods:

- push
- <<
- pop
- shift
- unshift
- delete
- insert

#### Enumerable Methods

- each
- each_with_index
- map
- delete_if
- select
- reject
- reduce

#### Other:

- sample
- shuffle
- sort
- sort_by
- uniq
- reverse
- flatten
- join


## Common Hash Methods:

#### Reflection methods:

- length
- empty?
- keys
- values
- fetch
- has_key?
- has_value?


#### Enumerable Methods

- each
- map
- delete_if
- select
- reject
- reduce


## Ruby Arrays


```ruby
turtles = ["Donny", "Leo", "Mikey", "Raph"]
```

#### Main similarities to javascript

- can contain any combination of data types and structures
- are indexed from 0
- uses bracket notation

#### Main differences from javascript

- also has a reverse index, i.e. -1, -2, -3 ...
- has advanced bracket notation for ranges
      - `my_array[0..-1]` returns a new array containing every element from the first index up to and including the last index.
      - `my_array[2, 3]` returns a new array containing 3 elements beginning at index 2.



#### You Do:

Given the following arrays:
```ruby
characters = ["Pooh", "Tigger", "Eeyore", "Piglet", "Rabbit"]
moods = ["manic", "depressed", "anxious", "naïve", "anal"]
animals = ["bear", "pig", "rabbit", "tiger", "donkey"]
```

* Write a command line app that prints for the user the possible `characters`, `moods`, and `animals`.

* Write a command line app that uses the arrays to print out sentences describing each character, e.g. `Pooh is a naïve bear`. 
    * How could we make this task easier?


## Enumerable Methods

Ruby has an amazing set of enumerable methods that allow us to do all sorts of work that require iterating over a collection of objects.

`Enumerable#each` and `Enumerable#map` just to name the most common two.

Many of these enumerable methods require a block. A block is a set of instructions that can be passed into a method. Although similar to a callback function in javascript, blocks are distinct entities with distinct properties that should not be confused with javascript callbacks.

**Example:**

Using the following array:
```ruby
turtles = ["Donny", "Leo", "Mikey", "Raph"]
```
Iterate through the array using the `each` method and print out each name.

```ruby

turtles.each do |turtle|
  puts turtle
end
```

#### You Do:

* Create a command line application that uses the `each` method


Let's programatically update the following arrays:
```ruby
characters = ["Pooh", "Tigger", "Eeyore", "Piglet", "Rabbit"]
moods = ["manic", "depressed", "anxious", "naïve", "anal"]
animals = ["bear", "pig", "rabbit", "tiger", "donkey"]
```
so that the order in one array corresponds to the order in the others.

* Update the arrays using mutation methods like `insert`, `delete`, `pop`, `push`, etc.
* Use the `each` method with the `characters` array to print out sentences describing each character, e.g. `Pooh is a naïve bear`



## Ruby Hashes

#### Main similarities to javascript

- contains key-value pairs
- uses bracket notation

#### Main differences from javascript

- different syntax
- cannot use dot notation
- does not store functions/methods as values
- the keys can be any data type, not just strings
- the keys are most often symbols


**Examples:**
```ruby
wdi_persephone = {
  name: "Persephone",
  size: 24,
  instructors: ["Anna", "Phil", "Sung"]
}

# To lookup the name:
wdi_persephone[:name]
```

is shorthand for

```ruby
wdi_persephone = {
  :name => "Persephone",
  :size => 24,
  :instructors => ["Anna", "Phil", "Sung"]
}

# To lookup the name:
wdi_persephone[:name]
```

If we wanted string keys:
```ruby
wdi_persephone = {
  "name" => "Persephone",
  "size" => 24,
  "instructors" => ["Anna", "Phil", "Sung"]
}

# To lookup the name:
wdi_persephone["name"]
```

#### Iterating Through Hashes

Hash's enumerable methods usually contain two block parameters: `key` and `value`.

```ruby
my_hash.each do |key, value|
  puts "#{key}: #{value}"
end
```

#### You Do:

Given the following hash:
```
tmnt = {
  raphael: "red",
  donnatello: "purple",
  leonardo: "blue",
  michealangelo: "orange"
}
```

* Build a command line application that will iterate through the tmnt hash, create two new arrays called `turtle_names` and `turtle_colors`, and print out the new arrays.

* Build a command line application that uses the Hash's `each` method to print out sentences in the following format: `[turtle_name]'s favorite color is [turtle_color]`. 
    * Don't forget to capitalize the turtle's name!
    * Remember that Hash's `each` method has two block parameters: `key` and `value`.


## Questions and Bangs

Ruby uses a two nifty conventions to give programmers clues about the nature of a method.

#### ?

- `empty?`
- `any?`
- `nil?`

The question mark at the end of a method name tells us that the return value will be a boolean. In other words it answers a true or false question for us. These types of methods are also often called predicates.

#### !

Bang! Bang methods contain an exclamation mark at the end of the method name. This denotes danger! Warning. Warning. The danger being denoted is usually that fact that the method is destructive, meaning that it changes the original object instead of creating a new copy.

Bang methods usually have a non-destructive complement:

- `map` vs. `map!`
- `flatten` vs. `flatten!`
- `select` vs. `select!`
- `shuffle` vs. `shuffle!`
- `reverse` vs. `reverse!`

However, just because a method does not have a bang at the end does not mean it is not destructive:

- `pop`
- `push`
- `insert`
- `delete_if`

Why don't these methods have a bang? Because, it should be obvious that they are destructive. Moreover, there is no non-destructive complement to these methods.

## More You Do

```
tom_cruz = {
  :pilot => "Top Gun",
  :racer => "Days of Thunder",
  :spy => "Mission Impossible",
  :sports_agent => "Jerry Maguire"
}
```

* Create a command line application that uses the `tom_cruz` hash to create an array via the Hash's `map` method. The new array should contain strings of the following format: `Tom Cruise was a [profession] in the movie [movie title]`.

* Iterate through the array of strings, you created with the `map` function and print out each string.

#### You Do: Hashes. Hashes. Hashes!

  * Create a hash where the keys are names of instructors and classmates.
      * Each key points to a hash of hashes.
      * The values are hashes with keys for
          * codeName
          * superPower
          * weapon
          * weaknesses

      Example:
  ```ruby
    people = {
      students: {

      },
      instructors: {
        anna: {
          codename: "kara-A-OK",
          superpower: "singing",
          weapon: "relentless optimism",
          weaknesses: ["puppies", "bees", "soybeans"]
        },
        phil: {
          codename: "the philter",
          superpower: "analogies",
          weapon: "kaftan",
          weaknesses: ["roommates", "ex-girlfriends"]
        },
        sung: {
          codename: "cupcakes",
          superpower: "stoicism",
          weapon: "ascot",
          weaknesses: ["bullets", "doldrums", "happiness"]
        }
      }
    }
  ```
  * Print out a paragraph for each person
    * `[_____]'s secret identity is [_____]. They use their power of [_____] to deliver justice to wrong doers everywhere. Their weapon of choice is [_____] and it strikes fears in the heart of their enemies. Their weaknesses include [_____, _____, _____, ...]`.
    * **Bonus:** If there are more than one weakness, add the string `and` before the last one: `[_____, _____, and _____]`.

