# ADVANCED RAILS MIGRATIONS

Remember in project 2 we had to hand write all of those pesky migration files and get all the wording just write. 
Welllllll ruby can help you! 

* In the terminal you can type 
Ex: 
``` 
rails generate model Product name:string description:text
```
This will create a migration for you! That looks something like this:
```
class CreateProducts < ActiveRecord::Migration
 def change
   create_table :products do |t|
     t.string :name
     t.text :description

     t.timestamps null: false
   end
 end
end
```

Or, 
```
$ rails generate migration AddPartNumberToProducts
```
```
class AddPartNumberToProducts < ActiveRecord::Migration
  def change
  end
end
```

And:
```
$ rails generate migration RemovePartNumberFromProducts part_number:string
```
```
class RemovePartNumberFromProducts < ActiveRecord::Migration
  def up
    remove_column :products, :part_number
  end
 
  def down
    add_column :products, :part_number, :string
  end
end
```

## Example 1: Changing a table

* add_column
* add_index
* add_reference
* add_timestamps
* add_foreign_key
* create_table
* create_join_table
* drop_table (must supply a block)
* drop_join_table (must supply a block)
* remove_timestamps
* rename_column
* rename_index
* remove_reference
* rename_table

```
class AddDetailsToProducts < ActiveRecord::Migration
  def change    # Shortcut for up and down (only if down = drop table/obvious)
    add_column :products, :price, :decimal
    add_reference :products, :supplier     
    change_column :products, :part_number, :text
    remove_foreign_key :accounts, :branches
  end
end
```

```
create_table :products, id: false do |t|   # If you don't want the id primary key
  t.string :name
end
```

```
change_table :products do |t|
  t.remove :description, :name    # Removes columns of table (here, two at the same time)
  t.string :part_number           # Adds new column to table
  t.index :part_number            # Adds new column to table
  t.rename :upccode, :upc_code    # Renames the column name (key)
end
```

## Example 2: Reversing Tables

Reversible makes it possible to tell a migration using change (instead of up and down) how to reverse migrations that Active Record doesn't know how to reverse by default.
So you can specify code to be executed whether migrating forward or rolling back, even inside a migration implemented within a change method.

## Change Method:

The change method is the new and preferred way of writing migrations, instead of up and down. Using change, you can automatically figure out how to reverse your migration, negating the need for you to implement both the up and down methods.

Example:

```
def change
  change_table :products do |t|
    t.string :color
  end
end
```

I don't need to specify down, the active record KNOWS that the reverse is:
```
def down
  change_table :products do |t|
    t.remove :color
  end
end
```

However, Active Record isn't magic. It can only automatically reverse migrations with a limited set of instructions. For example, add_column, add_index, create_table, and so on can all be easily reversed, as all Active Record has to do is drop the column, index or table. 

## Why do we use it?

So we don't need to create new tables everytime we want to change a record.
