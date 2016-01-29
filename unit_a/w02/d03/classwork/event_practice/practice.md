# Listen To Me!

![HEY LISTEN](hey_listen.png)

### Objectives:

- Practice **adding** and **removing** **listeners** to DOM elements for various **events**.

## Instructions:

- Make a new `practice` folder inside today's `classwork` folder and create a new `index.html`, `style.css`, and `main.js` file to do your work in. Write your code in `main.js` and make sure it runs when you load your page. 
- Feel free to create your own classes and IDs. **Make sure you choose names that make sense,** both for your variables and for your classes/IDs. Style at will!
- **Remember:** ***Always psuedocode first.*** Figure out where you're going before you try to get there. If you like, draw or make notes on your desk or the wall with whiteboard markers and a partner.

### Challenge 1: Hamster Dance

- Create an "Add Hamster" button on your page. Every time this button is clicked, add a new image of a hamster to the `body` of your page!
- If the user clicks the button more than 5 times, alert them: "That's quite enough hamsters for you."
- If the user clicks on a hamster image, it should be removed from the DOM.

### Challenge 2: Sung's Sandwich

- Find an image of Starbucks sausage-egg-and-cheese sandwich online and display it on your page. Every time the user hits the **enter** key, the `visibility` of the sandwich should toggle.
- **Sandwich on the move!!** Refactor your code so that the sandwich will move 10px to the left, right, up, or down depending on which button is pressed.

### Bonus: I Need Some Input (or, "To-do List")

- Research **how to grab the text `value` from an input element** using "vanilla" JavaScript.
- Create a input and a button in your HTML document. Using JS, save a reference to each as a variable.
- Add an event listener to your button. When the button is clicked, your page should pop up an **alert** that contains the text they typed into the input box.
- Refactor! Add a header that contains the text "To-Do List". Create a new `ul` in your HTML doc beneath it. Now, instead of alerting the user what they typed in, append the text they entered as a new `li` element inside of the `ul` you created.
- **Super Bonus:** Allow users to click on `li`'s to remove them.
