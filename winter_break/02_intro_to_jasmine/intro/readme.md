# This is a test

## How you'll work.

Take a look at this directory's file structure, then read through "intro_spec.js", "intro.js", and "SpecRunner.html".  How do they all fit together?

```
.
├── lib
│   ├── jasmine-2.2.0 # test suite code
│   ├── jquery-2.1.3  # dependency
│   └── intro.js      # where you'll write your code
├── spec
│   └── intro_spec.js # code that tests intro.js
├── SpecRunner.html   # file to load test suite, dependencies, specs and our code
└── readme.md         # this file
```

Start by opening "SpecRunner.html" in the browser. You should see some "red" Don't panic!
That's good. It means our tests aren't passing.

Your specs are testing out "intro.js" so that's where you'll write your code.
Start by setting up your Sublie with your "specs" on the left and your code on the right.

You'll start out with failing tests for code that hasn't yet been written. It may feel unintuitive, but you state your goal and then start working towards it until your tests turn "green"

```js
sleepIn returns true for Saturday
ReferenceError: sleepIn is not defined
```

The first line is what *should* happen and the next line is what *actually* happened.  So we can fix the first error by defining "sleepIn" inside of "intro.js"

```js
var sleepIn = function(){}
```

If we take a look at how the spec is written we can see what our code should look like, at least from the outside.

```js
it('returns true for Saturday', function(){
  expect( sleepIn('Saturday') ).toBe(true);
});
```

We're invoking "sleepIn" with one argument and it should return "true"

```js
var sleepIn = function(dayName){
  if (dayName === "Saturday") {
    return true;
  }
}
```

We can define a function called "sleepIn" that takes a "dayName" and returns "true" for "Saturday"

```js
var sleepIn = function(dayName) {
  if (dayName === 'Saturday') {
    return true;
  }
}
```

After we do that we can check our SpecRunner again and hit refresh

```
sleepIn returns true for Sunday
Expected undefined to be true.
Error: Expected undefined to be true.
```

We didn't break anything, we just made our first spec pass. Now we've got a new error we can fix
by making our function handle "Sunday" too.

```js
var sleepIn = function(dayName) {
  if (dayName === 'Saturday') {
    return true;
  } else if (dayName === 'Sunday') {
    return true;
  } else {
    return false;
  }
}
```

Now we can check the "SpecRunner" again and hit refresh. If it all turns green we're in the green!

After you've gone from red to green, the next step is to refactor. You should never refactor without tests, because they provide a harness to ensure your code still works the same way after you refactor it.

First we can remove the "else if" and use the OR operator. Then we should check the SpecRunner before moving on.

```js
var sleepIn = function(dayName) {
  if (dayName === 'Saturday' || dayName === 'Sunday') {
    return true;
  } else {
    return false;
  }
}
```

If everything is still green than we continue to refactor.

```js
var sleepIn = function(dayName) {
  return dayName === 'Saturday' || dayName === 'Sunday';
}
```

A final check shows that everything still works and we can move on!

# Pending specs

Specs with a leading "x" are marked as "pending." That means they're not run.  If we take off the "x" we can rerun our specs and see what else we have to do.

```js
it('returns false for Monday', function(){
  expect( sleepIn('Monday') ).toBe(false);
});
```

Coninue removing the "x"'s from the specs one at a time and follow the "red, green, refactor" pattern.
