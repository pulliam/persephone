# Robot Army

![robot](http://share.gifyoutube.com/ZG4w7N.gif)

Life has been pretty sweet working at Mad Scientist Incorporated - the benefits are good, and you think Igor is considering you for a promotion. The news just came in: "Tomorrow, we're going to take over the world!" Sounds great. One small thing - you're going to need an army of robots to do it. Time to prove your worth as an evil minion and churn out some cyber soldiers!

### Objectives

1. Practice creating and defining Ruby classes and instances.
- Define class and instance variables.
- Keep your brain turned on (whirrr click) - what similarities and differences do you see between what we're doing now in Ruby and what you've done before in JavaScript?

**Remember** - Mad scientists always experiment! Require `pry` at the top of your file and use `binding.pry` liberally to "dive inside" your code at specific points. Test all of your assumptions and debug with abandon!

## Part One: Defining the Blueprint

![blueprint](http://artisaverb.info/Garage/BluePrint.jpg)

Before you can start production, you're going to need a solid blueprint to work with. Touch a new `robot_army.rb` file and do your work inside it.

You've got some specs on this robot from the UX division of the corporation.

The robot should:

- Have an **id number, health level, power level, location,** and **leader**.
    - All robots need to have their **id** specified at the time of creation. Default should be "000".
    - All robots are born at "The Factory" by default.
    - All robots should have a `health` level of 10 and a `power` level of 10 to begin with, but different levels can be specified when creating a robot.
    - All robots should have the same leader ("Doctor Sinistre"). This should not be able to be changed, and cannot be specified at the time of creation.
  - Be able to **communicate** important information.
    - Your robot should be able to **report for duty**.
    - Your robot should have an intimidating **battle cry**.
  - Your robots need to be able to perform **basic functions** and **fight** for their leader.
    - Your robots should be able to `move` to a `location`, fight for their leader, and recharge their batteries.

### Let's Get Started!

1. Create a new Robot class and define an `initialize` function that will set up your robot for success. What parameters does your function need to take? What instance variables will you need to create?
    - ***Test out your code!!!*** Once you have your class definition written, this is the perfect time to see if you get any errors. Use `pry` to pause the exection of your code and make sure you can create instances of your robot.
- Create **getter** and **setter** methods for your robot's attributes. Feel free to write these out one by one or use the `attr_accessor`/`attr_reader`/`attr_writer` methods where appropriate.
    - What **attributes** should be readable and writeable? Which should be read-only?
    - ***Test your code!*** Try out your getters and setters! See if they work.
- **Define methods** that your robot will need to use to communicate:
    - `report_for_duty` - returns a string: `"Soldier [ROBOT'S ID HERE] reporting for duty!"`
    - `battle_cry` - returns a string: `"FOR [ROBOT'S LEADER] - ONCE MORE, UNTO THE BREACH!"` 
    - You guessed it - ***Test your code!*** Try instantiating a new robot and testing its methods. Do they return what you expect?
- **Define methods** that your robot will need to function:
    - `move` - This method should take a location and update that particular robot's `@location`. Robot batteries are limited - every time they move, their **power** level will decrease by one. If their power level is less than one when `move` is run, return an error message.
    - `fight` - Every time a robot fights, decrease their power level by one! If their power level is less than one, return an error message.
    - `recharge` - Gotta recharge those batteries - this method should restore the robot's power to its max level.
- Register all your robots!
    - Create a `class variable` called `army` that will hold all of your soldiers. This should be an empty array.
    - Make sure that your robot soldiers are pushed into that array when they're created! That way, you can keep track of all of them.

## Part Two

![assembly line](http://www.lgcnsblog.com/wp-content/uploads/2014/09/robot_02.png)

### Assembly Line

Awesome, your blueprints look great, and your prototypes *(angry robots, not JavaScript prototypes)* are walking, talking, and fighting with gusto! Time to go into mass production.

1. Write code that will create 50 new robot soldiers with the default attributes. Make sure you're giving them all unique IDs!
- Write code to create ten new "super-soldiers" - these should have health levels of 20 and power levels of 15! Give these robots special IDs (for example, a number prefixed with "SUPER-").
- Once your soldiers are created, loop through your army and print out each soldier's information (consider using Ruby's `.inspect` method.)  

### Roll Call

1. Now that your robots exist, let's take roll call! Write code that will `puts` out every existing robot's `report_for_duty`.

![robot army](http://41.media.tumblr.com/16a7339f8c81307b68c169cf5404fc94/tumblr_nnr0f459eI1up0nwko1_500.jpg)

***Excellent! Your army is ready for world domination.***

## Bonus

#### Hack a robot 

- Viva le resistance! **Single out a single robot** (it doesn't matter which, though you may want to target a super-soldier for most impact on the war effort). Add a new method to this robot with the power to change that robot's `leader` attribute. Declare yourself that robot's leader and print out their battle cry!
- Now, take your hacking skills to the next level - define a method that will change **every robot's leader** attribute to a name you specify. What kind of method might this be?
 

