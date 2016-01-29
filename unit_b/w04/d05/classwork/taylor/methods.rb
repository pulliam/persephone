# Correct the following code to print out Taylor's face.

################################################################################
# Part 1
################################################################################

# require the ruby gem Pry
require "pry"
# Require the local file taylors.rb
require_relative "taylor.rb"
# Include the methods from the Taylor module
include Taylor

# Create the additional methods for repeat, double, stutter

puts(IMAGES[0][:head])
exit unless sing("I stay out too late") == "♬I stay out too late♬"
exit unless sing("Got nothing in my brain").include?("♬Got nothing in my brain♬")
exit unless mmm_mmm("That's what people say") == ("That's what people say, mmm-mmm")
binding.pry

puts(IMAGES[0][:face])
exit unless back_up("I'm dancing on my own", 4) == "I'm dancing on my own (dancing on my own)"
exit unless back_up("I make the moves up as I go", 5).include?("(moves up as I go)")
exit unless mmm_mmm("And that's what they don't see") == "And that's what they don't see, mmm-mmm"
exit unless mmm_mmm("That's what they don't see").include?(", mmm-mmm")
binding.pry

puts(IMAGES[0][:mouth])
binding.pry
exit unless repeat("'Cause the players gonna play") == ("'Cause the players gonna play, play, play, play, play")
exit unless repeat("And the haters gonna hate").include?("hate, hate, hate, hate, hate")
exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

# Puts Taylor's neck
binding.pry
exit unless repeat("Baby, I'm just gonna shake").include?("shake, shake, shake, shake, shake")
exit unless repeat("Heart-breakers gonna break").include?("break, break, break, break, break")

binding.pry
exit unless repeat("And the fakers gonna fake").include?("fake, fake, fake, fake, fake")
exit unless double("I shake it off") == "I shake it off, I shake it off"

# Puts Taylor's shoulders
binding.pry
exit unless stutter("I shake it off, I shake it off") == ("I, I, I shake it off, I shake it off")
