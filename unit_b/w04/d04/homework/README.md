## Her Majesty's Secret Service

![:image](http://atlantablackstar.com/wp-content/uploads/2013/01/aa-James-Bond-logo.jpg)

You'll be writing code using `.each` to iterate through the data in `bond_data.rb`.

Q will debrief you with your new tools for the mission:

> about .each

> `.each` is a method that [Arrays](http://www.ruby-doc.org/core-2.1.5/Array.html#method-i-each) and [Hashes](http://ruby-doc.org/core-2.1.2/Hash.html#method-i-each) know how to do. It allows you to perform an action upon *each* element or key-value pair. You customize those actions by using a **block**

> about blocks

> Blocks are nameless chunks of code that we pass to methods, often for repeated execution. Multi-line blocks should be written with `do` and `end`. Single-line blocks should be written with `{` and `}`

```rb
villains = ["Le Chiffre", "Mr. Big", "Sir Hugo Drax"]

# Here we customize each to reverse each element in the array
reversed_names = []
villains.each do |villain|
  reversed_names.push(villain.reverse)
end
reversed_names #=> ["erffihC eL", "giB .rM", "xarD oguH riS"]
```
```rb
bond_girls = ["Vesper Lynd", "Judy Havelock", "Mary Goodnight"]
# here we use each to create an array of upcased bond girls
upcased_girls = []
bond_girls.each { |girl| upcased_girls << girl.upcase }
upcased_girls #=> ["VESPER LYND", "JUDY HAVELOCK", "MARY GOODNIGHT"]

```

### The Problem

One of GA's core principals is to "bring data to the conversation." Our problem is we can't really talk about James Bond unless we have some data on who really was the best Bond.  Tonight you'll use the information in `bond_data.rb` to answer some tough questions.

#### Instructions

## Setup
1. Create a new file called `bond_answers.rb`
2. Include the data from the `bond_data.rb` file at the top of `bond_answers.rb`
3. Check out the [Ruby docs on enumerables](http://ruby-doc.org/core-2.2.3/Enumerable.html)!

### Completion

**Finish at least up to Number 6.** As always: more is better; healthy living is best. Only do the bonus if you have completed every single part. Do not expect to get the bonus finished EVER.

Run your `bond_answers` file after you make changes/progress to check and see if you are thrown any errors. Print each variable out to the terminal so that you can see the result of your calculations!

**Example:**

> `$ ruby bond_answers.md` <br>
> `> 1. Cumulative Gross: SOME NUMBER HERE`<br>
> `> 2. All Bond Actors: LIST OF BONDS HERE`<br>
> `> ...etc`

1. Combine your knowledge of iteration and arithmetic to determine the cumulative gross of all the Bond films. Save it to a sensibly-named variable. Print this out to the terminal.

1. Create a new array with the names of the all actors who have ever played Bond, but with no duplicates. (One Roger Moore is more than enough.) Assign it to a sensibly-named variable. Print this out to the terminal.

1. Create a new array of strings from `bond_data` with the names of all the Bond films. Assign it to a sensibly-named variable. Print this out to the terminal.

1. Create a new array of hashes of only the bond films released on odd-numbered years. Assign it to a sensibly-named variable. Print this out to the terminal. 

1. Create a variable called `worst_grossing_bond`. Use all the tools at your disposal (and perhaps one or two you have yet to discover) to iterate through all the films and return the film with the lowest gross. Store the returned film hash in the variable `worst_grossing_bond`. Print this out to the terminal.

1. Similarly, create a variable called `highest_grossing_bond` and use your programming powers to return the highest grossing film hash, storing it to `highest_grossing_bond`. Print this out to the terminal.

1. Create a new array, `movies_per_actor`, where each value in the array is a hash where the key is the Bond actor's name and the value is their total number of films.  For example `{ "Daniel Craig" => 3 }` Print this out to the terminal.

1. Sort the `bond_data` array by year of release, with the earliest films first. Store it in a variable called `sorted_by_release` Print this out to the terminal.

#### Bonus

1. Find a method to use on your `movies_per_actor` array that identifies __and returns__ the hash of the actor who starred in the least number of films. Save this to a variable and print it out to the terminal.

1. Find a method to sort the `bond_data` array of hashes by gross, with the highest grossing films first. Store it in a variable called `sorted_by_gross`. Print this out to the terminal.
