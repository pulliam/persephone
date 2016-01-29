console.log('ROCKNROLLL');

//create an array of song line

beatOnTheBrat = ['Beat on the brat',
  'Beat on the brat with a baseball bat',
  'Oh yeah, oh yeah, uh-oh',
  'What can you do?',
  'With a brat like that always on your back',
  'What can you lose?'
];

// create function called repeatedBehavior

// can we create a counter (i??) outside of our function perhaps???

// We can call this variable anything - I chose `i` because that's what we've been using in our for loops
var i = 0;

var repeatedBehavior = function() {
  //consolg log a line of my song.
  // console.log(beatOnTheBrat[i]);

  //create a new paragraph element
  var newLine = document.createElement('p');
  // Give it textContent of a song line with index of i
  newLine.textContent = beatOnTheBrat[i];
  // Stick it to the DOM!
  document.body.appendChild(newLine);
  // increment our i variable so that we don't log the same line over and over.
  i++;
};

// Execute the repeatedBehavior function once every second
window.setInterval(repeatedBehavior, 1000);








