tom_cruz = {
  :pilot => "Top Gun",
  :racer => "Days of Thunder",
  :spy => "Mission Impossible",
  :sports_agent => "Jerry Maguire"
}

# Create a command line application that uses the tom_cruz hash to create an array via the Hash's map method. 
# The new array should contain strings of the following format: Tom Cruise was a [profession] in the movie [movie title].

tom_cruz_keys = tom_cruz.keys  #make two arrays for keys, other for values
tom_cruz_values = tom_cruz.values

tom_cruz_pretty_array = Array.new   #make a new array for the sentences

tom_cruz_keys.each_with_index do |profession, indexOfMovieTitle|
	tom_cruz_pretty_array << "Tom Cruize was a #{profession} in the movie #{tom_cruz_values[indexOfMovieTitle]}"
	#cacth the sentence with the block with the values (its the ruby loop), and then push to array.
end

print tom_cruz_pretty_array 
#print the array.


# Iterate through the array of strings, you created with the map function and print out each string.

tom_cruz_pretty_array.each do |sentence|
	puts sentence                #this prints out every element in the array. (Not as array!, just as separate strings.)
end
