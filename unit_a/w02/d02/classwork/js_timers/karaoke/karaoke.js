console.log('Ready to rock n\' roll');

song = [
'Hello there', 
'the angel from my nightmare', 
'The shadow in the background of the morgue',
'The unsuspecting victim',
'of darkness in the valley',
'We can live like Jack and Sally if we want',
'Where you can always find me',
'And we\'ll have Halloween on Christmas',
'And in the night we\'ll wish this never end',
'We\'ll wish this never ends'
];

// var repeatedBehavior = function(){
// 	var randomIndex = Math.floor(Math.random() * song.length);
//     window.alert(sing[randomIndex]);
// }
// var setIntervalforLinesID = window.setInterval(repeatedBehavior, 2000);


var changeBColor = function(){
	document.body.classList.toggle('screenOn');
}
var startTvOn = window.setTimeout(changeBColor, 1000)


var index = 0;
var repeatedBehaviorinOrder = function(){
	if(index < song.length){
	var newLine = document.createElement('p');
	newLine.textContent = song[index];
	document.querySelector('.karaoke_screen').appendChild(newLine);
	index++;
	} else {
		window.clearInterval(repeatLines);
	}
};

var repeatLines = window.setInterval(repeatedBehaviorinOrder, 2000)





