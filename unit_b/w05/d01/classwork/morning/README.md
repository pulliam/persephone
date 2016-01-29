# Command that Line!

#### Objectives: 

- Get more practice creating command line programs and taking user input
- Get some more reps solving problems logically

### ASCII Dog, New Tricks

Create a Ruby command line program that provides (almost) all the joy of owning a pet, but with none of that pesky cleanup!

Copy the data below into a new, appropriately named Ruby file, and think about how you'll accomplish the following tasks.

```ruby
dog_tricks = {
  :default => "\n     (\\\\ \n(\\___/ ố`-○\n (     /```\n |_)``_)",
  :sit => "\n     (\\\\ \n    _/ ố`-○\n   /   /```\n(\\|  )||\n ‾ ‾`` ‾",
  :beg => "\n    (\\\\\n    / ố`-○\n   | _ .``\n   |  ∂∂\n (\\| ) )\n  ‾ ‾‾ ‾",
  :shake => "\n     (\\\\ \n    _/ ố`-○\n   /   _```\n(\\|  )|¬∂\n ‾ ‾``‾",
  :play_dead => "\n   _   _\n  | )-) )>-_\n-<(_____ x__○\n        (/",
  :confused => "\n    (\\_/) ?\n    [. .]\n?  / \\○/|\n(\\( )\\ Y|\n ‾ ``‾```"
}
```

1. If the user runs the program with no arguments, they should be given a list of instructions. Example: `ruby dog.rb` should result in the following:

```
     (\\
(\___/ ố`-○
 (     /```
 |_)``_)

Hello! I am dog.

Commands:
 sit
 beg
 shake
 play_dead 

```

2. If the user enters one of the commands, display the correct ASCII image. Example: `ruby dog.rb sit` should result in this: 

```
     (\\
    _/ ố`-○
   /   /```
(\|  )||
 ‾ ‾`` ‾
```

3. If the user enters an incorrect command, display an error. Example: `ruby dog.rb ply_dead` should result in the following:

```
    (\_/) ?
    [. .]
?  / \○/|
(\( )\ Y|
 ‾ ``‾```
Dog doesn't know that trick!

Commands:
 sit
 beg
 shake
 play_dead 

```

### It Takes Time!

Write a simple Ruby command line program that takes in two times and calculates the difference between them! Military time (0:00 - 23:59) is fine.

1. Start with the difference between two hours. Example: `ruby time_calc.rb 24 12` should return:

```
Difference: 12 hours.
```

2. Now, modify your code to take minutes as well. Examples:

```
$ ruby time_calc.rb 12:30 24:00

> Difference: 11 hours, 30 minutes.

$ ruby time_calc.rb 1:22 4:45

> Difference: 3 hours, 23 minutes.
```

## Bonus!

- Refactor your dog program to print out a random dog noise (arf, bark, woof, yelp, whimper, etc) along with every ASCII image.
- Refactor your time calculation program so that you can enter AM and PM times as well as military time.