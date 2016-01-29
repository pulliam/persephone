bond_data = [
  { :title => "Skyfall",                         :year => 2012, :actor => "Daniel Craig",   :gross => "$1,108,561,008" },
  { :title => "Thunderball",                     :year => 1965, :actor => "Sean Connery",   :gross => "$1,014,941,117" },
  { :title => "Goldfinger",                      :year => 1964, :actor => "Sean Connery",   :gross => "$912,257,512" },
  { :title => "Live and Let Die",                :year => 1973, :actor => "Roger Moore",    :gross => "$825,110,761" },
  { :title => "You Only Live Twice",             :year => 1967, :actor => "Sean Connery",   :gross => "$756,544,419" },
  { :title => "The Spy Who Loved Me",            :year => 1977, :actor => "Roger Moore",    :gross => "$692,713,752" },
  { :title => "Casino Royale",                   :year => 2006, :actor => "Daniel Craig",   :gross => "$669,789,482" },
  { :title => "Moonraker",                       :year => 1979, :actor => "Roger Moore",    :gross => "$655,872,400" },
  { :title => "Diamonds Are Forever",            :year => 1971, :actor => "Sean Connery",   :gross => "$648,514,469" },
  { :title => "Quantum of Solace",               :year => 2008, :actor => "Daniel Craig",   :gross => "$622,246,378" },
  { :title => "From Russia with Love",           :year => 1963, :actor => "Sean Connery",   :gross => "$576,277,964" },
  { :title => "Die Another Day",                 :year => 2002, :actor => "Pierce Brosnan", :gross => "$543,639,638" },
  { :title => "Goldeneye",                       :year => 1995, :actor => "Pierce Brosnan", :gross => "$529,548,711" },
  { :title => "On Her Majesty's Secret Service", :year => 1969, :actor => "George Lazenby", :gross => "$505,899,782" },
  { :title => "The World is Not Enough",         :year => 1999, :actor => "Pierce Brosnan", :gross => "$491,617,153" },
  { :title => "For Your Eyes Only",              :year => 1981, :actor => "Roger Moore",    :gross => "$486,468,881" },
  { :title => "Tomorrow Never Dies",             :year => 1997, :actor => "Pierce Brosnan", :gross => "$478,946,402" },
  { :title => "The Man with the Golden Gun",     :year => 1974, :actor => "Roger Moore",    :gross => "$448,249,281" },
  { :title => "Dr. No",                          :year => 1962, :actor => "Sean Connery",   :gross => "$440,759,072" },
  { :title => "Octopussy",                       :year => 1983, :actor => "Roger Moore",    :gross => "$426,244,352" },
  { :title => "The Living Daylights",            :year => 1987, :actor => "Timothy Dalton", :gross => "$381,088,866" },
  { :title => "A View to a Kill",                :year => 1985, :actor => "Roger Moore",    :gross => "$321,172,633" },
  { :title => "License to Kill",                 :year => 1989, :actor => "Timothy Dalton", :gross => "$285,157,191" }
]
# Combine your knowledge of iteration and arithmetic to determine the cumulative gross of all the Bond films. 
# Save it to a sensibly-named variable. Print this out to the terminal.

all_money = []
bond_data.each do |index|
	all_money << index[:gross]
end

sum = 0
all_money.each do |e|
  sum += e.delete("$,").to_i
end
print sum


# Create a new array with the names of the all actors who have ever played Bond, but with no duplicates. 
#(One Roger Moore is more than enough.) Assign it to a sensibly-named variable. Print this out to the terminal.

all_actors = Array.new
bond_data.each do |index|
  unless all_actors.include? index[:actor]
  all_actors << index[:actor]
  end
end
print all_actors

# Create a new array of strings from bond_data with the names of all the Bond films. 
#Assign it to a sensibly-named variable. Print this out to the terminal.

movie_names = Array.new
bond_data.each do |index|
  movie_names << index[:title]
end
print movie_names


# Create a new array of hashes of only the bond films released on odd-numbered years. 
#Assign it to a sensibly-named variable. Print this out to the terminal.

movies_that_are_odd = Array.new
bond_data.each do |index|
  if index[:year].odd? 
    movies_that_are_odd << index
  end
end
print movies_that_are_odd


# Create a variable called worst_grossing_bond. 
#Use all the tools at your disposal (and perhaps one or two you have yet to discover) 
#to iterate through all the films and return the film with the lowest gross. 
#Store the returned film hash in the variable worst_grossing_bond. Print this out to the terminal.

# FROM FIRST EXERCISE:
# all_money = []
# bond_data.each do |index|
#   all_money << index[:gross]
# end
print all_money.min 

bond_data.each do |index|
  if index[:gross].include? all_money.min 
    $worst_grossing_bond = index
  end
end
print $worst_grossing_bond

# Similarly, create a variable called highest_grossing_bond and use your programming powers to return the highest 
#grossing film hash, storing it to highest_grossing_bond. Print this out to the terminal.

print all_money.max 

bond_data.each do |index|
  if index[:gross].include? all_money.max 
    $highest_grossing_bond = index
  end
end
print $highest_grossing_bond

# Create a new array, movies_per_actor, where each value in the array is a hash where the key is the Bond actor's name 
#and the value is their total number of films. For example { "Daniel Craig" => 3 } Print this out to the terminal.
# Sort the bond_data array by year of release, with the earliest films first. 
#Store it in a variable called sorted_by_release Print this out to the terminal.