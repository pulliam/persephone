// console.log('main.js is a\'linked');

// var submitButton = document.getElementById('submit-quote');
// var quoteBox = document.getElementById('quote-box');
// var quoteList = document.getElementById('quote-list');

// submitButton.addEventListener('click', function(event){
//   // console.log(event.target);
//   var awesomeQuote = quoteBox.value;
//   console.log('Overheard at GA: "' + awesomeQuote + '"');
//   var quoteLi = document.createElement('li');
//   quoteLi.textContent = 'Overheard at GA: "' + awesomeQuote + '"';
//   quoteList.appendChild(quoteLi); // this is totally a stroller
//   // now let's clear out that input
//   quoteBox.value = "";
// });

var submitButton = document.querySelector('#submit-quote');
var quoteBox = document.querySelector('#quote-box');
var locationBox = document.querySelector('#location-box');
var quoteList = document.querySelector('#quote-list');

var submitQuote = function() {
    var newListItem = document.createElement('li');
    newListItem.textContent = 'Overheard in '+ locationBox.value+': '+quoteBox.value;
    quoteList.appendChild(newListItem);
    quoteBox.value = '';
    locationBox.value ='';
}

submitButton.addEventListener('click',submitQuote);
quoteBox.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        submitQuote();
    }
})




