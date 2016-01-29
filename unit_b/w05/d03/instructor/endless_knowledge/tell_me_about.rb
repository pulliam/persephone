# Gonna do some testing~~
require "pry"

# Let's lay out and structure our data. I'm using an _array_ of _hashes_ 
# to contain my terms and their definitions since I know I'll be looking 
# them up by name, but I may want to add more later.

DEFINITIONS = [
 { :term => "each", :definition => ".each is a Ruby term that can be called on an array. It takes a block of code and calls it once for each element, passing that element to the block."},
 { :term => "push", :definition => "pushes new element in array" },
 { :term => "select", :definition => "Returns a new array containing all elements of ary for which the given block returns a true value."},
 { :term => "reverse", :definition => "reverses your array" },
 { :term => "pop", :definition => "Removes the last element in your array" },
 { :term => "length", :definition => "Tells you how long an array or string is"},
 { :term => "inspect", :definition => "creates a string representatin of itself" },
 { :term => "map", :definition => "Like each but returns a new array"},
 { :term => "shuffle", :definition => "return a new array with elements shuffled" },
 { :term => "sort", :definition => "return a new array with self sorted"}
]

# First, I'm going to create my Definition class.
# I know my program is going to be dealing with definitions, 
# so it makes sense to package up methods and data specific 
# to these definitions inside an object - a class!

# Here's my _class definition_ - my blueprint.

class Definition

  # What needs to happen when a new instance of my class is created?
  # The `initialize` function will be run when I call Definition.new.
  # I can set it up to take in parameters, should I desire!
  def initialize(term, definition)
    # This is where I can set _instance variables_ and perform 
    # tasks on "instantiation" (refers to when I create a new instance).
    @term = term
    @definition = definition
  end

  # I'm going to want to _get_ information out of my instances, so I'll 
  # set up _getter_ methods! A getter method returns the current value 
  # of an instance variable.

  def term
    @term
  end

  def definition
    @definition
  end

  # I could also do this in one line:
  # attr_reader :term, :definition

end



# Test your code!!
# Try out your Definition class.
binding.pry
# Try typing in the following:
# test_def = Definition.new("kitten", "a small baby cat")
# test_def.term
# test_def.definition

# Cool, my Definition class seems to be working!
# My Definition class has fairly limited functionality - it can tell me
# about itself. I want my program to be able to find a word that the 
# user types in, though! Should I add methods to my Definition class to
# do so??

# We want to think about the separate functions of our program and divide
# up responsibilities in a way that makes sense. There are a lot of ways
# we could design our program - I decided to separate out the logic for the
# definition from the logic to deal with my user's input/finding the words.
# To do so, I created a new Dictionary class! Logically, it makes sense -
# my dictionary should contain a bunch of words, and I should be able to
# get definitions out of it if I know what word I'm looking for. It would
# also be nice if it had an index - the ability to tell me where to find the
# word I'm looking for. Let's DO IT!

class Dictionary
  # When I create a new dictionary, I want to be able to pass in the
  # words I want in there. That way, I could theoretically create
  # multiple dictionaries (one for kitten-related terms, one for programming, etc)!
  def initialize(words)
    # When I create a new instance of my dictionary, here are the things
    # I want to happen.

    # I'm setting up an instance variable that I'll use to store all my terms!
    @words = {}
    # Iterate though whatever the user passed in and create a new definition
    # for each element in the array I'm expecting
    words.each do |word|
      # Make a new definition here with the term & definition!
      definition = Definition.new(word[:term], word[:definition])
      # Add it to my @words hash as the value of a new key
      @words[word[:term]] = definition
    end

  end

  # Now, I want a way for my dictionary to list out all the words it contains.
  def word_list
    # Returning only the terms of each definition as an array.
    list_of_terms = @words.map do |key, definition_instance|
      definition_instance.term
    end
  end

  # Cool! Now let's define a way for our dictionary to FIND a particular word.
  def look_up(term)
    # First, let's convert our user input to lowercase.
    term = term.downcase
    # If the word doesn't exist in my hash, let the user know.
    if !@words[term] 
      return "Sorry, I don't have a definition for \"#{term}\"..."
    # Otherwise, spit out my definition. 
    else
      @words[term].definition
    end

  end

end

# Test your code!!
# Try out your Dictionary class.
binding.pry
# Try typing in the following:
# dict = Dictionary.new(DEFINITIONS)
# dict.word_list
# dict.look_up("each")
# dict.look_up("bananas")

# ---------- END CLASS DEFINITIONS ----------
# Generally, it's a good idea to separate these out into separate files
# for organizational purposes and so that your classes can be _required_ in
# other places if necessary. For this exercise, I've just stuck to one file.

# ---------- PROGRAM LOGIC STARTS HERE. ----------

# Giving my user input a more semantic name than ARGV[0]
user_input = ARGV[0]
# Creating a new instance of a dictionary with my DEFINTIONS info
dict = Dictionary.new(DEFINITIONS)

# This is a "case statement!" It's a lot like a switch statement in JS.
case user_input
  when nil
    puts "Type in a Ruby enumerable term and I shall try to define it!\nFor a list of terms, type \"list\"." 
  when "list"
    puts "\nAll my terms:\n-------------\n"
    dict.word_list.each do |word|
      puts word
    end
  else
    puts "\n----  WOW ----\n\n"
    puts dict.look_up(user_input)
    puts "\n---  COOL! ---\n"
end

# ---------- THE END ----------

# In this case, the functionality of our Definition class was pretty simple
# and could have been accomplished with a hash - however, we now have the 
# power to add new methods to our Definition class and make it superpowered!
# For example, we could add an `html_string` method that returns something like:

# "<li><strong>TERM:</strong><br>Defintion here!!</li>"

# Can you think of other possible useful methods?








