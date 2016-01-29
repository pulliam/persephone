require("sqlite3")

$db = SQLite3::Database.new("paramours.db")
# $db.execute("SELECT * FROM blackbook")

	# post('/entries/create') do 
	if ARGV[0] == 'post' && ARGV[1] == '/entries/create'
		this = []
		newARGV = ARGV[2].gsub('&', ' ').split
		this.push(newARGV)
		puts this
		# ruby little_black_book.rb post /entries/create first_name=Suzi&
		# last_name=Q&sex=female&number=2156098248
		# &email=suzi.q@gmail.com&is_married=false
		# f_name = this[0]
		# l_name = this[1]
		# b_year = this[2]
		# sex = this[3]
		# p_number = this[4]
		# email = this[5]
		# is_married = this[6]
	 # 	$db.execute("INSERT INTO blackbook (first_name, last_name, birth_year, sex, p_number, email, is_married) VALUE('#{f_name}', '#{l_name}', '#{b_year}', '#{sex}', '#{p_number}', '#{email}', '#{is_married}')")
	end # get 
##
# get('/entries') do
	
# end # get 
# ##
# get('/entries/:id') do
	
# end # get 
# ##
# patch('/entries/:id') do
	
# end # get 
# ##
# delete('/entries/:id') do
	
# end # get 
# ##

# The Little Black Book has the following command paths:
# post /entries/create
# get /entries
# get /entries/:id
# patch /entries/:id
# delete /entries/:id
