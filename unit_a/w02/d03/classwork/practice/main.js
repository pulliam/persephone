var hamsterButton = document.querySelector('button');

var checkForHamsters = function(e){
	e.target.remove(e);
	counterClicks--;
};

var counterClicks = 0;

var showHamsters = function (){
	if (counterClicks < 5){
		counterClicks++;
 		var newImage = document.createElement('img');
 		newImage.setAttribute('src', 'http://www.animatedimages.org/data/media/517/animated-hamster-image-0115.gif');
		newImage.addEventListener('click', checkForHamsters); //ADD THIS WHEN YOU ARE CREATING IT!!!! 
 		document.body.appendChild(newImage);
	} else {
		// hamsterButton.removeEventListener('click', showHamsters);
		window.alert('Enough Hamsters for you!');
	}	
};

hamsterButton.addEventListener('click', showHamsters);





