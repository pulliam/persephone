require 'time'

if ARGV[1] == '-'
	new_time = Time.parse(ARGV[0])
	new_time1 = Time.parse(ARGV[2])
	midnight = Time.local(2010,2,13,0,0,0)
	seconds1 = (new_time - midnight).to_i
	seconds2 = (new_time1 - midnight).to_i
	total = seconds1 - seconds2
	puts Time.at(total).utc.strftime("%H:%M:%S")
end
