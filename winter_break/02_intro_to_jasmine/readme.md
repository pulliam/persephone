# This is a test

![:image](http://i.kinja-img.com/gawker-media/image/upload/s--AW1Mur6m--/972362987667599938.jpg)

# What is testing?

```js
describe("something we want to test", function(){

   it("has specificiations of what we expect our code to do", function(){
        expect(2 + 2).toEqual(4)
    });

});
```

Testing is the process of making sure your code does what it's supposed to.

Manual testing, or error-driven development, is just what it sounds like: checking all the code works as expected after you change any source code, including testing your application from your web interface. This is limited by the time you need to test everything whenever you change anything. The larger the code base gets, the harder it is to check every line and every page every time a change is made.

Automated testing is achieved by writing code that checks your code. This may involve writing some code that plays through scenarios that address various possible input values and what the expected outcome is.

When you write very small tests that check very small sections of classes or models, we'd call that "unit" testing.

As your code base grows, so does you test coverage. You should get to a situation where you can run your test code at any time, and every single line of your code gets passed through to ensure it's still returning what you expected it to when it was first written.

Now, you can try to test after you've developed a product, but here are some problems with that approach:

- Will you have the time?
- Will your PM let you do this? Or will you have to begin creating the next bit of functionality?

TDD stands for test-driven development. Also called red/green development, in TDD, you write the tests first, before writing any code and then write code that makes the test pass.

The test will initially fail - that's the point of the 'red' - and the expectations of the test will drive how you will write your actual code - this is referred to as your implementation - until the test passes, or goes 'green'.

Frequently, TDD is approached with pair programming - two developers working together at one machine. Often, one person writes a test; then, the other writes the implementation, and they alternate throughout the day. In an interview, you might be given some test code and be asked to write the implementation code; or you might be asked to write the tests for some outline functionality to demonstrate your familiarity with this process.

The process is also referred to as red/green/refactor because once the test passes (and it's "green"), you can review the code you've written and any other parts of the code that's affected to see if it can be cleaned up at all. No new functionality is added at this stage - the desired outcome is still for the tests to pass, just as they had before, but with more efficient code.

A popular JavaScript testing library is called "Jasmine." It's modeled after "RSpec" a testing library for Ruby. Both have very similar syntax with "Describe", "It" and "Expect".
