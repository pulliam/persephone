mta_lines = {
  "N" => ["Times_Square", "34th", "28th", "23rd", "Union_Square"],
  "L" => ["8th", "6th", "Union_Square", "3rd", "1st"],
  "6" => ["Grand_Central", "33rd", "28th", "23rd", "Union_Square", "Astor_Place"],
  "Q" => ["Times_Square", "Herald_Square", "Union_Square", "Canal_St"]
}


command = ARGV[0]
first_line = ARGV[1]
first_stop = ARGV[2]
second_line = ARGV[3]
second_stop = ARGV[4]


if command == "lines"
  
  mta_lines.each do |key, value|
    puts key
  end

end


if command == "stops"

  print mta_lines[first_line]

end


if command == "calculate"
  
  if ARGV.length < 5
    puts "You must provide the 4 arguments: First Line, First Stop, Second Line, Second Stop"
  
  else
    start = mta_lines[first_line].index(first_stop) 
    stop = mta_lines[second_line].index(second_stop)
    dist_one = start - mta_lines[first_line].index("Union_Square")
    dist_two = stop - mta_lines[second_line].index("Union_Square")

    puts dist_one.abs + dist_two.abs
  end

end