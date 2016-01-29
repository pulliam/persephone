# many to many

If it's a pure relationship use `has_and_belongs_to_many` and create a join table.


```
    wizard        spells wizards know     spell
+------------+     +-------------+     +-----------+
|            |1    |             |    1|           |
|            +-----+             +-----+           |
|            |    *|             |*    |           |
+------------+     +-------------+     +-----------+
```

wizards

id  | name
:-- | :--
1   | Harry
2   | Draco
3   | Hermione

spells

id  | name             | is_deadly
:-- | :--              | :--
1   | Accio            | f
2   | Avada Kedavra    | t
3   | Expecto Patronus | f

> Join Tables are just the names of the two tables pluralized in alphabetical order and only
contain foreign keys for the other two tables.

spells_wizards

spell_id | wizard_id
:--      | :--
1        | 1
1        | 2
1        | 3
2        | 2
3        | 1
```

class Wizard < ActiveRecord::Base
  has_and_belongs_to_many :spells
end

class Spell < ActiveRecord::Base
  has_and_belongs_to_many :wizards
end
```

# has many through

```
  reader          subscription        periodical
+--------+      +------------+       +-------------+
|        |1     |            |*      |             |
|        +------+            +-------+             |
|        |     *|            |      1|             |
+--------+      +------------+       +-------------+
```

If there's additional information between a relationship
use has_many :through

readers

id  | name    |
:-- | :--     |
1   | Hillary |
2   | Maeve   |
3   | Kate    |

periodical

id  | name
:-- | :--
1   | New York Times
2   | New Yorker

subscription

id  | reader_id     | periodical_id | starts_on  | subscription_length
:-- | :--           | :--           | :--        | :--
1   | 1             | 1             | 11/18/2015 | 90
2   | 2             | 1             | 6/17/2014  | 30
3   | 3             | 1             | 11/05/2014 | 365
4   | 2             | 2             | 6/17/2014  | 90


```
class Reader < AcitveRecord::Base
  has_many :subscriptions
  has_many :periodicals, through: :subscriptions
end

class Periodical < AcitveRecord::Base
  has_many :subscriptions
  has_many :readers, through: :subscriptions
end

class Subscription < AcitveRecord::Base
  belongs_to :reader
  belongs_to :periodical
end
```

# Activities

Use the included "db_config.rb" it will create a sqlite3 database called "sandbox"

Create a hogwarts_schema.sql file for the wizards, students and spells tables.

Create a subscriptions_schema.sql file for the subcribers, periodicals and subscriptions tables.

Create ActiveRecord models for each class. Be sure to name the files properly.

Create an assertions.rb file that requires "db_config" and all of your models.

Create test data and try out each association.

# Additional Methods

## Wizards and Spells

Create a predicate method for spells called `deadly?`

Create a method for wizards called "cast!" that returns a string of the wizards name and a random spell they know in the format "WIZARD NAME casts RANDOM SPELL NAME!"

Create a method for wizards called "learn!" that adds a random spell to their arsenal

Create a predicate method for wizards called `knows?` that takes the same of a spell as a string.

## Subscribers

Create a predicate method for reader `reads?` that takes the name of a periodical as a string

Create a predicate method for subscription `expired?` that returns true if the start on date is passed the lenght of the subscription

# Refactor

If we want to track when students learned spells, or tier their spell ability, for instance "Accio Level 3" how would you update your tables?
