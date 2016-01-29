puts("First name?")
first_name = gets
first_name = first_name.chomp  #you need to use chomp because when interpolation is used (below). chomp removes the \n!


puts("Last name?")
last_name = gets.chomp

puts("age?")
age = gets.to_i

puts ("Hello #{first_name} #{last_name.chomp}")
is_running = true

while is_running

  puts("First name?")
  first_name = gets

  puts("Last name?")
  last_name = gets

  puts("age?")
  age = gets

  puts("Hello #{first_name} #{last_name}.")

  if age + 50 < 100
    puts "What's the rush?"
  else
    puts "Times wasting! Where's that novel?!"
  end

end
