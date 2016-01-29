 var hamsterButton = document.querySelector('button');

var counterClicks = 0;
var showHamsters = function (){
 	if (counterClicks < 5){
		counterClicks++;
 		var newImage = document.createElement('img');
 		newImage.setAttribute('src', 'http://www.animatedimages.org/data/media/517/animated-hamster-image-0115.gif');
 		document.body.appendChild(newImage);
	} else {
		hamsterButton.removeEventListener('click', showHamsters);
		window.alert('Deu de Hamsters pra voce por hoje!');
	}
};
hamsterButton.addEventListener('click', showHamsters);

