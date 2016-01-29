console.log('Linked.');

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = [
  'The Shire',
  'Rivendell',
  'Mordor'
];

var body = document.querySelector('body');
// Part 1

var makeMiddleEarth = function() {
  // create a section tag with an id of middle-earth
  var section = document.createElement('section');
  section.setAttribute("id", "middle-earth");
  for (var i = 0; i < lands.length; i++) {
  // add each land as an article tag
  var articleElement = document.createElement("article");
  section.appendChild(articleElement);
  // inside each article tag include an h1 with the name of the land
  var letterH1 = document.createElement("h1");
  letterH1.textContent = lands[i];
  articleElement.appendChild(letterH1);
  } // append middle-earth to the document's body
  document.body.appendChild(section);
};

var makeMiddleEarthID = window.setTimeout(makeMiddleEarth, 2000);

var makeHobbits = function(){
  var firstArticle = document.querySelectorAll("article")[0];
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  var hobbitsUL = document.createElement("ul");
  for(var i = 0; i < hobbits.length; i++) {
    var hobbitsListItem = document.createElement("li");
    hobbitsListItem.setAttribute("class", "hobbits"); // give each hobbit a class of hobbit
    hobbitsListItem.textContent = hobbits[i];
    hobbitsUL.appendChild(hobbitsListItem);
      if (hobbits[i] === 'Frodo Baggins'){
        hobbitsListItem.setAttribute("id", "Frodo")
      }
  }
  firstArticle.appendChild(hobbitsUL);
}

var makeHobbitsID = window.setTimeout(makeHobbits, 4000);

// Part 3

var keepItSecretKeepItSafe = function() {
  var newDiv = document.createElement('div');
  newDiv.setAttribute("id", "the-ring");
  newDiv.setAttribute("class", "magic-imbued-jewelry");
  newDiv.addEventListener('click', nazgulScreech);
  var frodoBearer = document.querySelector("#Frodo");
  frodoBearer.appendChild(newDiv);
}

var keepItSecretKeepItSafeID = window.setTimeout(keepItSecretKeepItSafe, 6000);
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, 
  //the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo

  // Part 4

var makeBuddies = function() {
  var asideAside = document.createElement('aside');
  var asideUL = document.createElement('ul');
  for (var i = 0; i < buddies.length; i++) {
    var asideLI = document.createElement('li');
    asideLI.textContent = buddies[i]
    asideUL.appendChild(asideLI);
  }
  asideAside.appendChild(asideUL)
  var RivendellVar = document.querySelectorAll("h1")[1];
  RivendellVar.appendChild(asideAside);

  console.log(RivendellVar)
};

var makeBuddiesID = window.setTimeout(makeBuddies, 8000);

  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert the aside as a child element of rivendell


// Part 5

var beautifulStranger = function() {
var striderElement = document.querySelectorAll("li")[7];
striderElement.textContent = "Aragorn";
  // change the 'Strider' textnode to 'Aragorn'
}

beautifulStranger();

// Part 6

var leaveTheShire = function() {
  // assemble the hobbits and move them to Rivendell
}

// Part 7

var forgeTheFellowShip = function() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined the party
}

// Part 8

var theBalrog = function() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
}

// Part 9

hornOfGondor = function() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
}

// Part 10

var itsDangerousToGoAlone = function(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}

// Part 11

var weWantsIt = function() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}

// Part 12

var thereAndBackAgain = function() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
