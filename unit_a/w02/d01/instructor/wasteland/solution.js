console.log("main.js linked");


var birds = [
  "Luther the Bird",
  "Tim the Bird",
  "Lucy the Bird",
  "Sara the Bird",
  "Tommy the Bird",
  "Billy the Bird",
];


var house = document.createElement('div');
house.setAttribute('class', 'dwelling');

var body = document.body;
body.appendChild(house)

var topLevelHeader = document.createElement('h1');
var span = document.createElement('span'); 

span.textContent = "Seeming Wasteland";

span.className = "shadowed";

topLevelHeader.appendChild(span);

body.appendChild(topLevelHeader);

var waldo = document.createElement('div');

waldo.id = "waldo";

body.appendChild(waldo);

var thisList = document.createElement('ul');


var unorderedList = document.createElement('ul');
for (var i = 0; i < birds.length; i++){
    var birdLi = document.createElement('li');
    birdLi.className = 'bird';
    birdLi.textContent = birds[i];
    unorderedList.appendChild(birdLi);
}
document.body.appendChild(unorderedList);


body.appendChild(thisList);

var image = document.createElement('img');
body.appendChild(image);

var newDeeev = document.createElement('div');
body.appendChild(newDeeev);

var h2 = document.createElement('h2');
body.appendChild(h2);

var h3 = document.createElement('h3');
body.appendChild(h3);

var article = document.createElement('article');
body.appendChild(article);

span.textContent = 'TEEMING FUNLAAAANND!!!!'




