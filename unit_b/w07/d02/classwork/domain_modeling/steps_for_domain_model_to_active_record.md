# From Domain Modeling to ActiveRecord

## Step 1 - Model the Domain

- Draw boxes for classes with singularized names
- Write the attributes in the boxes
- Identify the Relationships with lines
- Use crosses and crows feet or numbers and astericks to identify the type of relationship

```
   Mother            Child
+----------+       +--------+
|  name    |1      |  name  |
|          +-------+        |
|          |      *|        |
+----------+       +--------+
```

## Step 2 - Create the Schema

- Create the tables with pluralized names
- Turn relationships into primary and foreign keys
- Foreign Keys go on the astericks or crows feet side.
- Turn attributes into columns

```sql
CREATE TABLE mothers {
  id INTEGER PRIMARY KEY,
  name VARCHAR
};

CREATE TABLE children {
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  mother_id INTEGER REFERENCES mothers(id)
};
```

## Step 3 - Test our assertions

- Test out the relationship with a simple grid of tables
- Could we get all the children for a mother with a SQL query?

Mothers

id  | name
:-- | :--
1   | Nora
2   | Sally

Children

id  | name    | mother_id
:-- | :--     | :--
1   | Corrine | 1
2   | Sean    | 2
3   | Cole    | 1

```sql
INSERT INTO mothers (name) VALUES 'Nora';
INSERT INTO children (name, mother_id) VALUES 'Corrine';
SELECT * FROM children WHERE mother_id = 1;
```

## Step 4 - Translate into ActiveRecord

- Create "models" singular named classes that inherit from ActiveRecord
- Create individual files for each class
- notify ActiveRecord of the database relationships

```
# mother.rb
class Mother < ActiveRecord::Base
  has_many :children
end

# child.rb
class Child < ActiveRecord::Base
  belongs_to :mother
end
```

## Step 5 - Test our assertions

- Creat some test data
- Specify what should happen
- If our schema is correct, ActiveRecord should be able to
infer our table names and corresponding foreign keys to execute
the correct SQL query.

```
require_relative "db_config.rb"
require_relative "mother.rb"
require_relative "child.rb"

# This should create two rows in the mothers table
m1 = Mother.create({name: "Nora"})
m2 = Mother.create({name: "Sally"})

# This should create a new row in the children table with mother_id assigned to
# what m1's id is.
c1 = Child.new({name: "Corrine"})
c1.mother_id = m1.id
c1.save

# This should create another row in the children table with the same mother id
c2 = Child.create({name: "Cole", mother_id: m1.id})

# Test both sides of our associations
# this method should be defined because of `has_many`
m1.children
# this method should be defined because of `belongs_to`
c2.mother
# this should access the correct child’s name "Corrine"
m1.children.first.name == "Corrine"
# this should access the correct mother’s name "Nora"
c2.mother.name == "Nora"
```
