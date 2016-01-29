# A SHIELDed Chatroom

![agents](aos.jpg)

The Agents of S.H.E.I.L.D. (Strategic Homeland Intervention, Enforcement, and Logistics Division) need a secretive way to chat with each other about the fate of the world! Your mission: create a simple chatroom with a filter that will remove any sensitive data from all messages. This chatroom will be a bit one-sided at the moment as it won't be connected to anything, but we're going to get some good practice using logic and the jQuery library. There is no starter code for this exercise.

***For this exercise, you MUST use the [jQuery library](https://api.jquery.com/).***

### Objectives

- Get more practice problem solving.
- Use JavaScript to perform basic string/data manipulation.
- Practice using jQuery to manipulate the DOM.

### Part One: The Basics

Create a new HTML page and link your scripts to it. You'll build a simple page with an input for **messages**, an input for a **username**, and an empty **list** for those messages to be displayed in. Don't worry about styling it for now.

- Your user should be able to hit enter after they finish typing their message and see it displayed on the screen.
- The input box should clear when the user hits enter.
- When the page loads, make sure the user's `focus` is on the new message input so that they don't need to click it. There may be a helpful jQuery method for that...

### Part Two: Watch Your Mouth!

Add a new [checkbox](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) to your HTML page with the label "Clean." When [checked](https://developer.mozilla.org/en-US/docs/Web/CSS/%3Achecked), this checkbox will tell our program to scan user messages for a list of banned words and remove anything deemed offensive.

- Create your own list of at least five banned words. These can be any words you like - perhaps this chatroom strictly bars the discussion of pandas and wicker chairs?
- If your user attempts to submit a message that contains one of your banned words, replace the offending word with a string of your choice.

#### Example:

- **User's name:** Fitz
- **Banned words:** hydra, fury, inhuman, hub, daisy

> **User types:** I think Hydra has infiltrated the Hub!

> **Displayed on the page:** Fitz: I think #### has infiltrated the ####!

> **OR:** Fitz: I think _a kitten_ has infiltrated the _litterbox_!

### Part Three: See No Evil
  
Now, your users want ALL of the messages in the room displayed a certain way - not just the ones they type. Make sure that when your "clean" checkbox is ticked, ALL messages (not just new ones) do not display banned words.

BUT WAIT! There's a catch - if they uncheck the box, ***the original message***, banned words and all, ***should be restored***. Your program should not modify the users' original message. Think about how you're storing your data - how could you tackle this conundrum?

### Bonus: Say What?!?

Add new checkboxes to your page that allow users to filter messages in interesting ways. Examples could include:

- **Scramble** - Remove all vowels and reverse the remaining letters in each word in each message.
- **Scream** - EVERYTHING IN CAPS AND PUNCTUATED WILDLY!!!!!111!1
- **Typo-ridden** - Snaekily swap the psoitions of letetrs in random wrods.

Any effects you create should be layer-able!