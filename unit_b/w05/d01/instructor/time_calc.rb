require "pry"

# Splitting each user input on the colon
splitTime1 = ARGV[0].split(":")
splitTime2 = ARGV[1].split(":")

# Finding the later time & earlier time
if splitTime1[0].to_i > splitTime2[0].to_i
  laterTime = splitTime1
  earlierTime = splitTime2
else
  laterTime = splitTime2
  earlierTime = splitTime1
end

# Alternative: Using the max and min methods!
# Grabbing the max and min so that I'm always subtracting the smaller time from the larger, then splitting them on the colon ("4:00" becomes ["4", "00"], etc.)

# laterTime = ARGV.max {|a,b| a.split(':')[0].to_i <=> b.split(':')[0].to_i }.split(":")
# earlierTime = ARGV.min {|a,b| a.split(':')[0].to_i <=> b.split(':')[0].to_i }.split(":")

# Converting the strings in my arrays to numbers to save myself writing .to_i over and over.
laterTime.map! do |number|
  number.to_i
end
earlierTime.map! do |number|
  number.to_i
end

# Finds the difference between the hours.
hour_diff = (laterTime[0] - earlierTime[0])

# If the later time's minutes are less than the earlier time's minutes, essentially "carry the one" over from the hours and add sixty minutes to the later time's minutes.

if laterTime[1] < earlierTime[1]
  hour_diff -= 1
  minute_diff = laterTime[1] + 60 - earlierTime[1]
else
  minute_diff = laterTime[1] - earlierTime[1]
end

# Puts it out!
puts "Difference: #{hour_diff} hours, #{minute_diff} minutes."
