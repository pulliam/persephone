# WDI Week 08 Assessment

Congrats on making it through week eight!

This week, we completed our second project sprint and began learning Ruby on Rails.

> Write your answers in the prompts in the boxes below:

## Basic Ruby & JavaScript

Translate the following data into a Ruby hash and a JavaScript object:

Abner is a handsome, 26 year old Buddhist who lives in Fort Greene with three 
roommates - Jim, Jeb, and Joe.

### Ruby Hash (1 point)

```question
abner = {
  :name => "Abner",
  :age => 26,
  :religion => "Buddhist",
  :is_handsome: true,
  :location => "Fort Greene",
  :roommates => ["Jim", "Jeb", "Joe"]
}
```

### JavaScript Object (1 point)

```question
var abner = {
  name: "Abner",
  age: 26,
  religion: "Buddhist",
  is_handsome: true,
  location: "Fort Greene",
  roommates: ["Jim", "Jeb", "Joe"]
}
```

### Ruby OOP (4 points)
<!-- 
    1 point for class, 
    1 point for instance method
    1 point for class method
    1 point for correct methods 
-->
Define a plain Ruby class (no inheritance) for Pigs with an instance method "oinks?" that returns `true` and a class method "all" that takes a number as an argument and puts "OINK" however many times you specify when invoked.

```question
class Pig 
    def oinks? 
        true
    end
    def self.all(n)
        n.times do
            puts "OINK"
        end
    end
end
```

## Rails Conventions

### Rails Naming Convention Matrix for Cell Phones. ( 9 points )

Fill in the table below:

```table
Component  | file or folder name       | class name           | plural or singular?
---        | ---                       | ---                  | ---
Model      | cell_phone.rb             | CellPhone            | sing
View       | cell_phones               | n/a                  | plur
Controller | cell_phones_controller.rb | CellPhonesController | plur
```

### ActiveRecord Association Matrix (5 points)

Given the following ERD, identify with 1's and *'s the relationships between
each entity. 

*Write in the names of foreign keys in the correct boxes.*

<!-- 
    1 point for each foreign key
    dancer_id
    dance_move_id
    dance_id
    dance_move_id
    style_id
-->
```erd
    Dancer             DanceMovesKnown         DanceMove
 +----------+          +-------------+      +------------+
 |          | 1      * |  dancer_id  | *  1 |            |
 |          +----------+ dance_move_id------+            |
 |          |          |             |      |            |
 |          |          |             |      |            |
 +-----+----+          +-------------+      +------------+
       | 1                                       1 |
       |                                           | *  
       |                                   dance_moves_styles
       | *                                   +----------+
    Costume                                  | style_id |
+-------------+                              | dance_move_id
|  dancer_id  |                              +----------+
|             |                                    | *
|             |                                  1 |
|             |                                  Style             
+-------------+                             +-------------+             
                                            |             |             
                                            |             |             
                                            |             |             
                                            +-------------+ 
```

### Rails Routes Matrix - The 7 deadly routes! (21 points)

Given `resources :clam_bakes` fill in the following table with the HTTP verb, path and
corresponding controller action.

```table
    | verb      | path                 | Controller#Action
--- | --------- | -------------------  | ------------------
 1  |  GET      | /clam_bakes          | clam_bakes#index 
 2  | POST      | /clam_bakes          | clam_bakes#create
 3  |  GET      | /clam_bakes/new      | clam_bakes#new
 4  |  GET      | /clam_bakes/:id      | clam_bakes#show
 5  |  GET      | /clam_bakes/:id/edit | clam_bakes#edit
 6  | PUT/PATCH | /clam_bakes/:id      | clam_bakes#update
 7  | DELETE    | /clambakes/:id       | clam_bakes#delete
```

### DB Stuff ( 6 points ) 

```table
Task                | Purpose
---                 | ---
rake db:create      | Creates app's databases in your PG server.
rake db:migrate     | Runs any pending migrations in `db/migrate` folder.
rake db:seed        | Runs `seeds.rb` file.
rake db:drop        | Drops all of your app's databases.
rake db:schema:load | Drops all tables in your database, then creates your schema anew from your `schema.rb` file.
rake db:reset       | Drops the databases for this app, loads your current schema and re-seeds your database.
```

### Controllers (4 Points)

Write in the code to make the following functional in a Rails application

<!-- 
1 point for new waffle 
1 point for create waffle 
1 point for redirect 
1 point to render  
-->

```question
class WafflesController < ApplicationController
  def new
    @waffle = Waffle.new
  end

  def create
    @waffle = Waffle.new
    if @waffle.save
      redirect_to waffles_path
    else
      render :new
    end
  end

  def waffle_params
    params.require(:waffle).permit(:is_buttered, :is_gluten_free)
  end
end
```

### Migrations ( 2 points ) 

Fill in this migration to add a new column called `mustache_length` (string) to the `bros` table.

<!-- 
1 point for up 
1 point for down  
-->

```question
class AddMustacheLengthColumnToBrosTable < ActiveRecord::Migration
  
  def up
    add_column :bros, :mustache_length, :string
  end

  def down
    remove_column :bros, :mustache_length
  end

end
```

## CSS ( 4 points ) 

Given the following HTML: 

```
<div class="pirate black-beard">
  <p><strong>Black</strong> Beard</p>
</div>
<div class="pirate dead">
  <p><strong>Red</strong> Beard</p>
</div>
<div class="pirate blue-beard">
  <p><strong>Blue</strong> Beard</p>
</div>
<div class="privateer dead">
  <p><strong>Pink</strong> Beard</p>
</div>
```

1. Write a css rule to make each div with a class of pirate have a blue border.
2. Write a css rule for Blue Beard that targets the `strong` tag inside of his div. 
This rule should make *only* the `strong` tag's text blue.
3. Write two final CSS rules - if the pirate is dead, their div should have a background color of `blanchedalmond`. If they are dead and NOT a pirate, they should have a background color of `rebeccapurple`.

```question
.pirate {
    
}

.blue-beard strong {
    
}
/* OR */
.blue-beard > p > strong {
    
}

.dead {
    
}
.pirate.dead {
    
}
```
