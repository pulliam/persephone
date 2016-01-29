// Create a <div> element, save it to a variable called 'house' and give it the class of 'dwelling'
// Append the house div to the body.
// Create two new elements, an <h1> saved to the variable 'topLevelHeader' and a <span> with the variable 'span'
// Check out this article for a second. It explains why the <span> tag is useful in HTML.
// Give the span the textContent of "seeming wasteland".
// Give the span the class of 'shadowed'
// Append the span to the topLevelHeader.
// Append the topLevelHeader to the body.
// Create a div element and save it to the variable waldo.
// Give this div the id of waldo.
// Append the div to the <body> tag.
// Create a ul element and save it to a sensibly named variable.
// Uncomment the birds array. Iterate through the array, and create an li for each bird. Give each <li> the class of 'bird' and the text value of the bird's name. Append an li with the class of 'bird' to the ul.
// append the ul to the DOM.
// Add 5 more elements (each of a different tag) to the DOM so that the wasteland is lush. Feel free to get creative with the css.
// Once the wasteland is no longer a wasteland, change the span tag's text to 'Teeming Funland'


console.log("main.js linked");
var house = document.createElement('div')
document.body.appendChild(house)
house.setAttribute('class', 'dwelling')
var topLeverHeader = document.createElement('h1')
var span = document.createElement('span')
span.textContent = "seeming wasteland"
span.textContent = "seeming wasteland"
span.setAttribute = ('class', 'shadowed')
topLeverHeader.appendChild(span)
document.createElement('div')
var waldo = document.createElement('div')
waldo.setAttribute("id", "waldo")
document.body.appendChild(waldo)
var sensibleVar = document.createElement('ul')

var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];



