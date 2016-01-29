console.log("linked");

var blueSquare = document.querySelector('.blue.square');
var redSquare = document.querySelector('.red.square');
var whiteSquare = document.querySelector('.white.square');

var toggleRedSquare = function(event){
  console.log(event);

  if (!redSquare.classList.contains('hidden')) {
    redSquare.classList.add('hidden');
  } else {
    redSquare.classList.remove('hidden');
  }
};

var toggleBlueSquareColor = function(event){
  console.log(event);

  if (blueSquare.classList.contains('blue')) {
      blueSquare.classList.remove('blue');
      blueSquare.classList.add('purple');
  } else {
      blueSquare.classList.remove('purple');
      blueSquare.classList.add('blue');
  }
};

var toggleXandO = function(event) {
  console.log(event);

  var target = event.target;

  if (target.textContent === 'X') {
    target.textContent = 'O';
  } else if (target.textContent === 'O') {
    target.textContent = '';
  } else {
    target.textContent = 'X';
  }
};

blueSquare.addEventListener('click', toggleRedSquare);
redSquare.addEventListener('click', toggleBlueSquareColor);
whiteSquare.addEventListener('click', toggleXandO);
blueSquare.addEventListener('click', toggleXandO);
redSquare.addEventListener('click', toggleXandO);


var handleKeypress = function(event) {
  console.log(event.keyCode);

  if (event.keyCode === 13) {
    blueSquare.removeEventListener('click', toggleRedSquare);
    redSquare.addEventListener('click', toggleBlueSquareColor);
    whiteSquare.removeEventListener('click', toggleXandO);
    blueSquare.removeEventListener('click', toggleXandO);
    redSquare.removeEventListener('click', toggleXandO);
    document.removeEventListener('keypress', handleKeypress);
  }
};




document.addEventListener('keypress', handleKeypress);

















<<<<<<< HEAD
=======

>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
