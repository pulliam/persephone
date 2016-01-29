# JavaScript Challenge!

![](challenge_accepted.jpeg)

### Objectives:

1. Practice **creating, modifying, and accessing values** inside of **arrays**.
  - What **methods** allow us to add and remove elements from an array?
- Determine the **datatype** of a variable.
- **Iterate**, or loop through, a series of elements inside of an array and do something with each one. Practice using `for` loops.
- Practice creating simple **nested arrays**.


#### Resources:

- [MDN Docs on Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### The Challenges:

Do your work tonight in a new `homework.js` file inside of today's homework folder. Create an index.html page and link your javascript file to it using the `<script>` tag. Tackle these challenges one-by-one, leaving comments in your code to let us know which is which! Open up the Chrome developer's console to test out your code and see it run!


```javascript
// homework.js

// 1. Grab Bag
// your code goes here!
// ...etc...
```

#### 1. Grab Bag

- Create a new array called `grabBag` that contains the following data:
  - `"shoe"`
  - `true`
  - `99`
  - `null`
- Using bracket notation, log the second item in the array to your console.
- Write a **for loop** that iterates through your array and logs each element.
- Now, modify your code so that your loop logs the `typeof` each element.
- Let's make it crowded! Add the following piece of data to the **end** of your `grabBag` array:
  - `[3,6,9]`
- Add the following to the **beginning** of your `grabBag` array:
  - `undefined`
- Loop through your array again and log the `typeof` each element in your `grabBag`.
- Now, remove the number `99` from your `grabBag` and *save it to a variable* named `thatNumberIRemoved`. Log this number to the console.

#### 2. What's in Your Closet?

Below, we've given you examples of Anna and Sung's closets modeled as data in JavaScript.

```javascript
var annasCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];
// Check out this sweet nested data structure!!
var sungsCloset = [
  [
    // These are sung's shirts
    "lavender button-up",
    "dark purple button-up",
    "light purple button-up",
    "mauve button-up",
  ],[
    // These are sung's pants
    "dress slacks",
    "jeans",
    "PJs"
  ],[
    // Sungcessories
    "silk ascot",
    "striped tie",
    "driving gloves"
  ]
];
```

- What's Anna wearing today? Using bracket notation to access items in `annasCloset`, log the sentence "Anna is rocking that " + *the third item in Anna's closet* + " today!" to the console.
- Anna can't find her left shoe. Remove this item from her closet and save it to a variable named `annaShoe`.
- Anna just bought some sweet shades! Add `"raybans"` to her closet **after `"yellow knit hat"`.**
- Anna spilled coffee on her hat... modify this item to read `"stained knit hat"` instead of yellow.
- Time to do laundry - loop through Anna's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.
- Sung wants to do inventory on his closet. Using **bracket notation**, log the arrays containing all of Sung's shirts, pants, and accessories.
- Put together an outfit for Sung!
  - Using **bracket notation**, access the first element in Sung's `shirts` array.
  - In the same way, access one item from Sung's pants array and one from his accessories array and log a sentence about what Sung's wearing. Example:
    - `"Sung is looking fierce in a lavender button-up, dress slacks and a silk ascot."`
  - Modify your code to put together 3 separate outfits. Mix and match!
- Anna's left shoe has traveled through time and space and turned up in Sung's accessories drawer! Remember the variable we saved Anna's shoe to earlier on? Use that to add Anna's lost shoe to Sung's accessories array.
- Get more specific about what kind of PJs Sung's wearing this winter. Modify the name of his PJ pants to `Footie Pajamas`.

#### 3. California Dreamin'

Phil is moving to LA to pursue his lifelong dream of opening up a boutique kaftan-and-succulent store just outside of Echo Park. His shelves are currently empty, but he's just received his first shipment of goods. Let's get him stocked up!

Here's your shipment:

```javascript
var theGoods = [
  "dreamy silk kaftan",
  "jade plant",
  "desert cactus",
  "embroidered kaftan",
  "bejeweled kaftan",
  "hens-and-chicks",
  "super expensive kaftan",
  "succulent echeveria paul bunyan"
];
```

- Create a new array that will represent Phil's store and save it to a sensibly-named variable. Your array should have the following elements:
  - The store name, as a string
  - Store address
  - Proprietor's name
  - An empty array for kaftans
  - An empty array for succulents
- Let's get organized! Move all of the items from `theGoods` into either the `kaftans` or the `succulents` array, depending on where they belong.
- Write code that will print out an **numbered** inventory list for each section.<br>Example:<br>
  ```
  Succulents:
  1. jade plant
  2. desert cactus
  3. hens-and-chicks
  4. succulent echeveria paul bunyan
  ```
- THERE'S BEEN A TRAGIC FIRE! Write code to loop through every item in the kaftan array and rename each to `"charred ash pile"`.
- After this unfortunate turn of events, Phil has decided to begin selling handmade artisanal soaps instead. Add a `handmadeSoaps` array to your store. **This array should contain four nested arrays** with the following elements:
  - name of soap
  - price
  - scent
- Write code to loop through your `handmadeSoaps` array and log each nested array to the console. Once you've got that working, modify your code so that it prints out a numbered list of each soap, its scent, and its price.<br>Example:
  - `1. Seaside Dream, lavender scented: $14`

### Bonus:

#### Grab Bag Part II

Time for some exploration! Research how to get a random number between 1 and 10 using **Math.random**. (Hint: The MDN docs for the Math library are exhaustive, but might be a bit confusing to a beginner - feel free to expand your search!)

**Your goal:**

Write code that grabs a **random element** out of your `grabBag` array (back in step 1) and logs it to the console! Every time you reload your page, a different element should be logged.
