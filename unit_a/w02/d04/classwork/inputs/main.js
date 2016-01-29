<<<<<<< HEAD
var submitButton = document.getElementById('submit-quote');
var quoteBox = document.getElementById('quote-box');
var quoteList = document.getElementById('quote-list');
var locationBox = document.getElementById('location-box');

submitButton.addEventListener('click', function(event){
	// console.log(event.target);  //target is general variable for the "target" you are using. So I dont need to repear submitButton in this case for example.
	var quoteInputed = quoteBox.value;
	var locationInputed = locationBox.value;
	var newQuote = document.createElement('li');
	newQuote.textContent = '"' + quoteInputed + '" was overheard today at ' + locationInputed + '.';
	quoteList.appendChild(newQuote);
});

 

=======
console.log('main.js is linked!');
>>>>>>> 256527254b034840e4676c2c77c65546f82ecd22
