var blueWire = document.querySelector('#blue');
var redWire = document.querySelector('#red');
var greenWire = document.querySelector('#green');

clicksCounting = 0;
var cutTheGreenWire = function (){
	if (clicksCounting < 1){
	clicksCounting++
	greenWire.classList.add('cut');
	window.alert('You killed Us!');
	} else {
		window.alert('Game is Over');
	}
}

var cutTheBlueWire = function (){
	if (clicksCounting < 1){
	clicksCounting++
	blueWire.classList.add('cut');
	window.alert('You Saved Us All!');
	} else {
		window.alert('Game is Over');
	}
}

var cutTheRedWire = function (){
	if (clicksCounting < 1){
	clicksCounting++
	redWire.classList.add('cut');
	window.alert('You killed Us!');
	} else {
		window.alert('Game is Over');
	}
}

greenWire.addEventListener('click', cutTheGreenWire);
blueWire.addEventListener('click', cutTheBlueWire);
redWire.addEventListener('click', cutTheRedWire);


var resetPage = function(){
	document.location.reload();
}
resetButton.addEventListener('click', resetPage)