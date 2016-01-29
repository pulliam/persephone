dog_tricks = {
  :default => "\n     (\\\\ \n(\\___/ ố`-○\n (     /```\n |_)``_)",
  :sit => "\n     (\\\\ \n    _/ ố`-○\n   /   /```\n(\\|  )||\n ‾ ‾`` ‾",
  :beg => "\n    (\\\\\n    / ố`-○\n   | _ .``\n   |  ∂∂\n (\\| ) )\n  ‾ ‾‾ ‾",
  :shake => "\n     (\\\\ \n    _/ ố`-○\n   /   _```\n(\\|  )|¬∂\n ‾ ‾``‾",
  :play_dead => "\n   _   _\n  | )-) )>-_\n-<(_____ x__○\n        (/",
  :confused => "\n    (\\_/) ?\n    [. .]\n?  / \\○/|\n(\\( )\\ Y|\n ‾ ``‾```"
}
if ARGV.empty? 
	puts dog_tricks[:default] 
	puts "\n Hello! I am a dog \n Commands: \n sit \n beg \n shake \n play_dead"
end
dog_tricks.has_key? ARGV[0].to_sym
	puts dog_tricks[ARGV[0].to_sym]
