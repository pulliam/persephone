// ###Anna's Favorite Color
// - Chartreuse 1. Magenta 2 Slate 3. I hate every other color! 
//Write a function that will take a color and tell me (return) 
//how I feel about that color. It should work for any color I give it.


function AnnaLikes(color){
	if(color === 'Chartreuse' || color === 'chartreuse'){
		return 'I love '+ color;
	} else if(color === 'Magenta' || color === 'magenta'){
		return 'I love '+ color;
	} else if(color === 'Slate' || color === 'slate'){
		return 'I love '+ color;
	} else {
		return'I hate ' + color;
	}
}

// ###Sung's New Outfit
// - Write a function that takes Sung's fashion label choices for his outfit today. 
//Gather the label for his `shirt`, `pants` and `cardigan`. 
//If all three items are by 'alexander wang', return 'great outfit!'. 
//If only his shirt and pants are by 'alexander wang', return, 'ok, but just for today'. 
//For any other outfit scenario, return 'just stay home.'
//   - we use `===` to check for equality, we can use `!==` to check for inequality!

function SungLabels(shirt, pants, cardigan){
	if( shirt === 'alexander wang' && pants === 'alexander wang' && cardigan === 'alexander wang'){
		return 'great outfit!'
	} else if(shirt === 'alexander wang' && pants === 'alexander wang' && cardigan !== 'alexander wang'){
		return 'ok, but just for today';
	} else {
		return 'just stay home';
	}
}

