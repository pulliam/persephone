# Active Record Pattern

Read through the following wikipedia page on the Active Record Pattern

https://en.wikipedia.org/wiki/Active_record_pattern

When you're done ask your neighbor the following questions:

- The Active Record Pattern if applied in Ruby maps a database table to what?

- It maps a row in a database to what?

- Column names are mapped to what?

- How might the Active Record pattern be applied in code and passed on to objects in Ruby?

Given the following tables 

Political Parties

id  | name              | website           | chairman_id
:-- | :--               | :--               | :--
1   | Democratic Party  | www.democrats.org | 76
2   | Republican Party  | www.gop.com       | 29

Politicians

id  | name         | political_party_id
:-- | :--          | :-- 
1   | Bill Clinton | 1
2   | George Bush  | 2

Write out the schema for the above two tables in a file called `schema.sql`

How might adding a new politician to the Politicans table be accomplished with the Active Record pattern?

- Write out pseudo code to add the Green Party
- Write out pseudo code to add Ralph Nader

The wikipedia article states "Typically, foreign key relationships will be exposed as an object instance of the appropriate type via a property."

Given the above tables and the following pseudo code:

```
p1 = Politician.find_by_id(2)
p1.political_party
```

What data type might `p1.political_party` return?

How might the following SQL be expressed in Ruby with the Active Record Pattern?

```
"SELECT * FROM politicians WHERE political_party_id = 3"
```
