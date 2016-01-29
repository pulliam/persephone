$first_station = ARGV[1] 
$first_stop = ARGV[2] 
$second_station = ARGV[3] 
$second_stop = ARGV[4]

$metro = {
		n: ["times_square", "34th", "28th", "23rd", "union_square", "8th"], 
		l: ["8th", "6th", "union_square", "3rd", "1st"],
		six: ["grand_central", "33rd", "28th", "23rd", "union_square", "astor_place"]
	}

puts "I'm confused" unless ARGV.length == 5 || ARGV.include?("lines") || ARGV.include?("N") || ARGV.include?("L") || ARGV.include?("6")
puts "N", "L", "6" if ARGV.include?("lines") 
puts $metro[:n] if ARGV.include?("N") 
puts $metro[:l] if ARGV.include?("L") 
puts $metro[:six] if ARGV.include?("6")

if ARGV.length == 5 && ARGV[0] == "calculate"
	if $metro.has_key?($first_station.to_sym) && $metro.has_key?($second_station.to_sym) && $metro[$first_station.to_sym].include?($first_stop) && $metro[$first_station.to_sym].include?($second_stop) && $first_station === $second_station
		puts ($metro[$first_station.to_sym].index($first_stop) - $metro[$first_station.to_sym].index($second_stop)).abs
	elsif $metro.has_key?($first_station.to_sym) && $metro.has_key?($second_station.to_sym) && $metro[$first_station.to_sym].include?($first_stop) && $metro[$second_station.to_sym].include?($second_stop) && $first_station != $second_station
		thismanystops_in_first_ride = ($metro[$first_station.to_sym].index($first_stop) - $metro[$first_station.to_sym].index("union_square")).abs
		thismanystops_in_second_ride = ($metro[$second_station.to_sym].index($second_stop) - $metro[$second_station.to_sym].index("union_square")).abs
		puts thismanystops_in_second_ride + thismanystops_in_first_ride
	else
		puts "I'm too confused"
	end
end
