tmnt = {
  raphael: "red",
  donnatello: "purple",
  leonardo: "blue",
  michealangelo: "orange"
}

# Build a command line application that will iterate through the tmnt hash, 
#create two new arrays called turtle_names and turtle_colors, and print out the new arrays.

turtle_colors = tmnt.values
turtle_names = tmnt.keys
print turtle_names

# Build a command line application that uses the Hash's each method to print out sentences in the following format:
# [turtle_name]'s favorite color is [turtle_color].

turtle_names.each_with_index do |turtle, index|
	puts "#{turtle}'s favorite color is #{turtle_colors[index]}"
end

# Don't forget to capitalize the turtle's name!

turtle_names.each_with_index do |turtle, index|
	puts "#{turtle.capitalize}'s favorite color is #{turtle_colors[index]}"
end

# Remember that Hash's each method has two block parameters: key and value.
