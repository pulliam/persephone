# ActiveRecord documentation

The goal for each group is to read through the documentation and try to answer the following questions.  Be prepared to demonstrate the code. Can you create a simple schema and ActiveRecord class to demonstrate a concept?

http://guides.rubyonrails.org/active_record_querying.html

Find the ActiveRecord commands to perform the following

- Find by a column name

- How to order results

- How to find the first 5 results

- How to find the next 5 results

http://guides.rubyonrails.org/active_record_validations.html

Find the ActiveRecord commands to validate the following

- A user's password must be between 8 and 16 characters

- A user's email must be unique

- A user's password can't be blank

- A user's password and password_confirmation must match

http://guides.rubyonrails.org/association_basics.html

Given a houses table with "id" and "name" and a students table with column fields
for "id", "name" and "house_id"

Create ActiveRecord models for House and Student.

- What ActiveRecord association would you use between houses and students?

- What's the ActiveRecord code to find all the students for a house?

- How would you implement a spells table so that all students could have more than one spell?

http://guides.rubyonrails.org/active_record_callbacks.html

Given a students table with column fields for "id", "name" and "house_id"

- How would you implement a callback to assign a random number to house_id when a student is created?

- How would you implement a callback so that if a user doesn't supply an image_url we give them a default picture?
