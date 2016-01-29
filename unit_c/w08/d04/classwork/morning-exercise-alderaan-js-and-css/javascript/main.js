jQuery(document).ready(function( ){

console.log('main.js');

var circle = document.getElementById('alderaan');
var buttonclick = document.getElementById('never');
var topbar = document.querySelector('.top-bar.flash');


buttonclick.addEventListener("click", function(){setTimeout(function(){
	document.body.removeChild(circle);
	var newText = document.createTextNode("I felt a great disturbance in the Force"); 
	topbar.appendChild(newText); }, 5000)});


var secretCords = document.getElementById('secret-coordinates');
var secretMessage = document.getElementById('secret-message');

$('#tell').on("click", function(event){
	event.preventDefault();
	secretCords.removeAttribute("hidden");
});

});