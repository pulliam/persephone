# This is a test!

![:image](http://blog.schwern.net/images/Derpy_Please_Stand_By_blog.jpeg)

Today we're going to work on passing tests in Ruby with [Rspec](http://www.relishapp.com/rspec/).

## Water Bottle

Work first in `water_bottle`

The file structure is similar to what we worked on yesterday with Jasmine

```
.
├── lib
│   └── water_bottle.rb       # where you'll write your code
├── spec
│   ├── spec_helper.rb
│   └── water_bottle_spec.rb  # code that tests water_bottle.rb
├── .rspec                    # a hidden file to configure rspec's output
└── readme.md
```

Write your code in `lib/water_bottle.rb` to make the tests in `spec/water_bottle_spec.rb` pass.

Because we're testing server side code, there's no browser to see the output. Instead you'll run your Rspec tests with the `rspec` command in the terminal and specify the folder where your tests are.

For example to run the water_bottle specs from inside the `water_bottle` folder you'd run:

```sh
rspec spec/
```

And you might see some errors like this:

```
 Failure/Error: wb = WaterBottle.new("Mudd", 16)

 ArgumentError:
   wrong number of arguments (2 for 0)
```

What's that error mean? We need to write code that won't raise that error.  The initialize method
has been set, but it's not expecting two arguments.

```
def initialize(brand, amount)
end
```

"Hey we didn't set any instance variables!" you might say.  True. Right now we're just testing that
the initialize method takes two parameters and we dont have any reason to hold onto that data yet.
Onto the next test

```
rspec spec/
```

We'll get different failing specs because we fulfilled the initializer spec.

```
1) WaterBottle .new sets capacity and brand
   Failure/Error: expect( wb.capacity ).to eq 16

   NoMethodError:
     undefined method `capacity' for #<WaterBottle:0x007f9a6a8bcae8>
   # ./spec/water_bottle_spec.rb:9:in `block (3 levels) in <top (required)>'
```

Looks like we need to define a "capacity" method on the object.  It's supposed to return 16 so let's try that.  Let's do the brand method too.

```
def capacity
  @capacity
end
def brand
  @brand
end
```

We could have simply returned "Mudd" and 16, which would be fine. We don't know if we'll be instantiating multiple water bottles, but we'll go ahead and use instance variables for now.

```
1) WaterBottle .new is empty
     Failure/Error: expect( wb ).to be_empty
       expected `#<WaterBottle:0x007ffb2a232648>.empty?` to return true, got nil
     # ./spec/water_bottle_spec.rb:15:in `block (3 levels) in <top (required)>'
```

The above error in the test says "be_empty" which is an rspec predicate matcher. It's looking for a corresponding method on the object "empty?"

```
def empty?
  true
end
```

We've made all the above tests pass! Now it's on to "pending" tasks. Pending have a leading "x"
and aren't run.

```
  xdescribe "#fill" do
```

If we remove the leading "x" from "xdesribe" and rerun the specs, Rspec will recognize the test and run it.

```
  describe "#fill" do
```

# Pig Latin

After Water Bottle try your hand at Pig Latin
