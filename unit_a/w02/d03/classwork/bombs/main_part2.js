//I TRIED TO GET STARTED IN THIS CODE
//I COULD NOT GET IT TO WORK THOUGH.

var blueWire = document.querySelector('#blue');
var redWire = document.querySelector('#red');
var greenWire = document.querySelector('#green');
var resetButton = document.querySelector('#reset');
var wire = document.querySelector('.wire');

clicksCounting = 0;

clickCountingArray = [0, 1, 2];

function letsWintheGame (){
	if (wire.classList.hasAttribute('id', 'blue') && clicksCounting === 0){
		blueWire.classList.add('cut');
		clicksCounting++
		
	} else if (wire.classList.hasAttribute('id', 'green') && clicksCounting === 1){
		greenWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'red') && clicksCounting === 2){
		redWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'red') && clicksCounting === 1){
		redWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'red') && clicksCounting === 0){
		redWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'green') && clicksCounting === 0){
		greenWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'green') && clicksCounting === 2){
		greenWire.classList.add('cut');
		clicksCounting++

	} else if (wire.classList.hasAttribute('id', 'blue') && clicksCounting === 1){
		blueWire.classList.add('cut');
		clicksCounting++
		
	} else if (wire.classList.hasAttribute('id', 'blue') && clicksCounting === 2){
		blueWire.classList.add('cut');
		clicksCounting++
		
	} else {
		window.alert('Game Over');

	}
	
}


greenWire.addEventListener('click', cutTheGreenWire);
blueWire.addEventListener('click', cutTheBlueWire);
redWire.addEventListener('click', cutTheRedWire);



var resetPage = function(){
	document.location.reload();
}
resetButton.addEventListener('click', resetPage);






