require 'pry'

dog_tricks = {
  :default => "\n     (\\\\ \n(\\___/ ố`-○\n (     /```\n |_)``_)",
  :sit => "\n     (\\\\ \n    _/ ố`-○\n   /   /```\n(\\|  )||\n ‾ ‾`` ‾",
  :beg => "\n    (\\\\\n    / ố`-○\n   | _ .``\n   |  ∂∂\n (\\| ) )\n  ‾ ‾‾ ‾",
  :shake => "\n     (\\\\ \n    _/ ố`-○\n   /   _```\n(\\|  )|¬∂\n ‾ ‾``‾",
  :play_dead => "\n   _   _\n  | )-) )>-_\n-<(_____ x__○\n        (/",
  :confused => "\n    (\\_/) ?\n    [. .]\n?  / \\○/|\n(\\( )\\ Y|\n ‾ ``‾```"
}

# Did the user give me input??
if ARGV[0] == nil
  # If so, give them instructions
  puts dog_tricks[:default]
  puts "\nHello! I am dog.\n\nCommands:\n sit\n beg\n shake\n play_dead\n\n"
# otherwise, display the correct ascii image!
else
  #  Convert user input to symbol
  command = ARGV[0].to_sym
  #  Check to see if the symbol is a key in my dog_tricks hash
  if dog_tricks.has_key? command
    puts dog_tricks[command]
  else
    # If it's not in my hash, error message
    puts dog_tricks[:confused]
    puts "\nDog doesn't know that trick!\n\nCommands:\n sit\n beg\n shake\n play_dead\n\n"
  end
end






