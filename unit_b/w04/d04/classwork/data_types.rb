
# 1 + "1" --> String can't be coerced into Fixnum

# "1" + 1 -->  No implicit conversion of Fixnum into String 

# 1 + "1" # type error

# "1" + 1 # type error

# true + "a" -->  undefined method `+' for true:TrueClass (NoMethodError)

# "a" + true --> no implicit conversion of true into String

# "a".+(true) --> no implicit conversion of true into String

# true - true --> undefined method `-' for true:

# true + false --> undefined method `+' for true:TrueClass 

# false * true --> undefined method `*' for false:FalseClas

# false.*(true) --> undefined method `*' for false:FalseClass 


# "a" + "b" -->	WORKS!
# "a".+("b") -- > WORKS!

"a" + "b"

"a".+("b")

# "a" * "b" --> no implicit conversion of String into Integer

# "a" * 7 --> WORKS!

# 7 * "a" --> String can't be coerced into Fixnum

# 1 + 1.5 --> 	WORKS!

# 1.5 + 1 --> WORKS!

# (1..2) + (1..2) --> undefined method `+' for 1..2:Range
# (1..2).+(1..2) -->undefined method `+' for 1..2:Range 

# /a/ + /b/ --> undefined method `+' for /a/:Regexp (

# "a" + "b" --> WORKS!

# :a + :b -->  undefined method `+' for :a:Symbol (

# "a" + :b --> no implicit conversion of Symbol into String 

# :a + "b" --> undefined method `+' for :a:Symbol 	
# :a.+("b") --> undefined method `+' for :a:Symbol 

# "Happy " + 5 + "th birthday!" -->  no implicit conversion of Fixnum into String (TypeError)

# "Happy #{5}th birthday!" --> WORKS!! 
#{} WORKS LIKE A SCAPE OF STRING.

# "Happy Birthday " + :harriet --> no implicit conversion of Symbol into String

# "Happy Birthday #{:harriet}" --> WORKS!
#Note that the scape is used too to mix up diferent types of data that cant be mixed together normally	


# coffee --> undefined local variable or method `coffee' 

# 5.upcase --> undefined method `upcase' for 5:Fixnum 

