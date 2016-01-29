# WEEKDAY WARRIORS

![](http://www.hixxysoft.com/Images/unepic-pc-role-playing-game-1.jpg)


## Part 1: Create Hero Class

* Create a `Hero` class (Create a file named `hero.rb` for this class).
    * Heroes should initialize with four instance variables/attributes:
        * `@health`: An integer (10–1000) representing their health.
        * `@damage`: An integer (0–100) representing the amount of damage they do with an attack.
        * `@attack`: An integer (0–100) representing the likelihood they will hit their target.
        * `@evasion`: An integer (0–100) representing the likelihood of evading an attack.
    * Heroes should have the following getter methods:
        * `#damage`
        * `#attack`
        * `#evasion`
    * Heroes should have the following setter methods:
        * `#health=`
* Create an instance of the `Hero` class called `tiny` inside of weekday_warriors.rb.
    * `tiny`'s `@health` should be `1000`
    * `tiny`'s `@damage` should be `100`
    * `tiny`'s `@attack` should be `25`
    * `tiny`'s `@evasion` should be `0`
* Create an instance of the `Hero` class called `dancer` inside of weekday_warriors.rb.
    * `tiny`'s `@health` should be `500`
    * `tiny`'s `@damage` should be `20`
    * `tiny`'s `@attack` should be `80`
    * `tiny`'s `@evasion` should be `80`


## Part 2: Create Monster Class
Create a `Monster` class that have the same attributes as the hero inside of a new `monster.rb` file.


## Part 3: Class Attributes

* Add a class variable/attribute called `@@band` to the `Hero` class.
* Add a class variable/attribute called `@@horde` to the `Moster` class.

## Part 4: Instance Methods
Make sure to show what is going on in the fight by puts'ing out the hits/misses/deaths/wins

* Add the following instance methods to the Hero and Monster classes.
    * `#dead?`
        * This method returns `true` if `@health` is <= 0, otherwise it returns `false`.
    * `roll_dice`
        * Returns a random number between 0 and 100.
    * `#hit_percentage`
        * This methods accepts one argument, the defending character.
        * Returns a number based on this formula: ( (attack value of self) / (evasion value of defending character) ) * 10.
    * `#attacks`
        * This method accepts one argument, the defending hero or monster.
        * Determine if the hero scores a hit
            * If the `roll_dice` is higher than `hit_percentage`, the hero misses, i.e. pass `true` with the attackee's `defend` message.
            * If the `roll_dice` is lower than `hit_percentage`, the hero lands a hit, i.e. pass `false` with the attackees `defend` message.
            * reduce the health of the enemy
        * check to see if the enemy is dead
        * if the enemy is `dead?`, return `true`, else return `false`.
    * `#defends`
        * Called inside of the attacks method,
        * This method accepts two arguments, the attacking hero or monster and a boolean indicating if a hit occurred. If a hit occurred, reduce `self`'s health by attacker's `damage`.
    * `#register`
        * This method adds `self` to the `band` or `horde`.
        * Update the `Hero#initialize` method so that it `register`s itself.
        * Update the `Monster#initialize` method so that it `register`s itself.

## Part 5: Class Methods

* Create a class method called `.all` to `Hero` that returns the band of heroes.
* Create a class method called `.all` to `Monster` that returns the horde of monsters.

## Part 6: Private Methods

We don't want any else to be able register us, so let's make that `register`  a private method. Let's also remove the `health=` setter since, we don't want other people reaching in and willy nilly changing our health.

## Part 7: Monster Inheritance

* Make at least 3 subclasses of the `Monster` class.
* These subclass monsters should have default values for their attributes.
* The monsters should be slightly different from each other. 
  Examples:
    * one enemy has a lot of health but a very small attack
    * one enemy has high damage but very low attack

## Part 8: Character Class

* Create a `Character` class to DRY up the commonalities between the `Hero` and `Monster` classes.
    * 
* Have the DRYed up `Hero` and `Monster` class inherit from the `Character` class.


## Bonuses: The Game Object and the Invisible Hand

Create a `Game` class with a `#start` method.

* When a `game` is instantiated
    * A hero is created.
    * Ten monsters are instantiated/created, each being a randomly chosen subclass of `Monster`.
    * The hero and the monsters are stored inside of the `game`.
* When the `game#start` method is called:
    * The hero and monsters take turns attacking each other using the `attacks` method.
    * Fighting continues until all ten monsters are defeated or the hero dies.
* Bonus:
    * Refactor the game so that the game, an impartial object, generates the dice roll instead of the attacker.

## More Bonuses

* Level up. Give the hero a level and experience. Everytime a player gets a certain amount of experience (from fighting an enemy), 'level' him up by giving him better stats. If the hero gets to level 10, the hero wins and the game ends.
* "Scale" the enemies based on the heroes level (they get harder as the hero levels)
