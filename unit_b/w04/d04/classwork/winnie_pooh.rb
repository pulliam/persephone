# Write a command line app that prints for the user the possible characters, moods, and animals.

characters = ["Pooh", "Tigger", "Eeyore", "Piglet", "Rabbit"]
moods = ["manic", "depressed", "anxious", "naïve", "anal"]
animals = ["bear", "pig", "rabbit", "tiger", "donkey"]

puts "The Characters are: #{characters}" 
puts "The Moods are: #{moods}"
puts "The Animals are: #{animals}"
#OR! (MORE SAFE!):
# puts characters[0]
# puts characters[1]
# puts characters[2] ....
#OR, THE BEST! :
characters.each do |character|
	puts character                #this prints out every character
end



# Write a command line app that uses the arrays to print out sentences describing each character, e.g. Pooh is a naïve bear.
# How could we make this task easier?



#FIRST OPTION: (RANDOM)
puts ("Crazy Sentence: #{characters.sample} is a #{moods.sample} #{animals.sample}");

#SECOND OPTION:
characters.each_with_index do |character, index|         #the each_with_index method will look for index numbers as well
 	puts "#{character} is a #{moods[index]} #{animals[index]}"    #I use the index numbers on the loop to compare to the ones in the other arrays. 
end

#Now All I gotta do is change the position of the animals and moods in the other arrays, to correspond right!
