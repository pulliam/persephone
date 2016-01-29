var addSubtoScreen = function (){
	console.log(document.querySelector('img'));
	var image = document.querySelector('img'); // DOM Node or null
	if (image){
		console.log(image);
		document.body.removeChild(image);
	} else {
		var subPic = document.createElement('img');
		subPic.setAttribute('src', 'http://s3.amazonaws.com/etntmedia/media/images/ext/809257793/mcdonalds-ham-cheese-egg-english-muffin-best-worst-breakfast-sandwiches-md.jpg');
		document.body.appendChild(subPic);
	}
};

document.addEventListener('keypress', addSubtoScreen);


var moveSub = function(){
	var image = document.querySelector('img');
	if (event.keyCode === 39){
		image.setAttribute('class', 'movementRight');
	} else if (event.keyCode === 37){
		image.setAttribute('class', 'movementLeft');
	} else if (event.keyCode === 38){
		image.setAttribute('class', 'movementUp');
	} else if (event.keyCode === 40){
		image.setAttribute('class', 'movementDown');
	} 

}


