$('#button').on('click', function(){
	inputValue = $('#input').val().toLowerCase();
	var firstWord = inputValue
	var secondWord = inputValue
	secondWord = secondWord.split('');
	secondWord = secondWord.reverse();
	secondWord = secondWord.join('');
	$('#input').val('');
	if (firstWord === secondWord){
		$('h2').text("Hell Yeah");
		return
	} else {
		$('h2').text("NOPE");
		return
	} 
});

