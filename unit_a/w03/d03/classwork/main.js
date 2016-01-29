jQuery(document).ready(function(){
var $quote = $('#quote');
var $button = $('.morequotes');
$quote.text('People behind you in class think you are the perfect height.');

var phrases = [
  'People behind you in class think you are the perfect height.',
  'Your posture during breaks effectively masks your exhaustion.',
  'Your commit messages are Kafka-esque.',
  'Your fingers are magic on the keys.'
];

var randomColorChange = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

function clickButton(){
	newPhrase = phrases[getRandomIndex(phrases)];
	$quote.text(newPhrase);
	$("body").css("background-color", randomColor());
	});
}

$button.on('click', clickButton);

});