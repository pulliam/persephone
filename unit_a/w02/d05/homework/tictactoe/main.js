var gameBoard = document.getElementById('game-board-grid');
var allColumns = document.querySelectorAll('.col-1-3');

var square1by1 = document.querySelector('.onexone');
var square1by2 = document.querySelector('.onextwo');
var square1by3 = document.querySelector('.onexthree');

var square2by1 = document.querySelector('.twoxone');
var square2by2 = document.querySelector('.twoxtwo');
var square2by3 = document.querySelector('.twoxthree');

var square3by1 = document.querySelector('.threexone');
var square3by2 = document.querySelector('.threextwo');
var square3by3 = document.querySelector('.threexthree');

var allSquares = document.querySelectorAll('.rows');

var firstColumn = document.querySelectorAll('.column-one');
var secondColumn = document.querySelectorAll('.column-two');
var thirdColumn = document.querySelectorAll('.column-three');
var firstRow = document.querySelectorAll('.row-one');
var secondRow = document.querySelectorAll('.row-two');
var thirdRow = document.querySelectorAll('.row-three');
var diagonalOne = document.querySelectorAll('.cornerone');
var diagonalTwo = document.querySelectorAll('.cornertwo');
var middle = document.querySelector('.middle');

var resetButton = document.querySelector('.reset');

var gameStatus = document.getElementById('game-status');

var numberOfPlays = 0;

var addAPlay = function(event){
	numberOfPlays++;
	// if (firstColumn.textContent === 'X' || firstColumn.textContent === 'O'){
	// 	window.alert('Game Over');
	// 	square1by1.removeEventListener('click', addAPlay);
	// 	square1by2.removeEventListener('click', addAPlay);
	// 	square1by3.removeEventListener('click', addAPlay);
	// }
	if (numberOfPlays % 2 === 0){
		event.target.textContent = 'X';
		event.target.style.backgroundColor = "aliceblue";
		gameStatus.textContent = 'O Turn';
		event.target.removeEventListener('click', addAPlay);
		event.target.addEventListener('click', function(){
			window.alert('THIS IS TAKEN, YOU MAD!');
		})

	} else {
		event.target.textContent = 'O';
		event.target.style.backgroundColor = "pink";
		gameStatus.textContent = 'X Turn';
		event.target.removeEventListener('click', addAPlay);
		event.target.addEventListener('click', function(){
			window.alert('THIS IS TAKEN, YOU MAD!');
		})
	}	
}

square1by1.addEventListener('click', addAPlay);
square1by2.addEventListener('click', addAPlay);
square1by3.addEventListener('click', addAPlay);
square2by1.addEventListener('click', addAPlay);
square2by2.addEventListener('click', addAPlay);
square2by3.addEventListener('click', addAPlay);
square3by1.addEventListener('click', addAPlay);
square3by2.addEventListener('click', addAPlay);
square3by3.addEventListener('click', addAPlay);

var resetPage = function(){
	document.location.reload();
}
resetButton.addEventListener('click', resetPage)
