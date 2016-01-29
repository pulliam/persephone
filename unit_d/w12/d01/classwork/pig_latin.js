var argss = process.argv.slice(2, process.argv.length); 

// var newSentence = function(sentence){
// 	word.split(' ');
// }

var wordToBeConverted = function(word){
	if (startsWithAVowel(word)) {
		return vowelWordToPigLatin(word);
	} else {
		return consonantWordToPigLatin(word);
	}
};

var startsWithAVowel = function(word){
	if (word.substring(0,1) === "a" || word.substring(0,1) === "A" || word.substring(0,1) === "e" || word.substring(0,1) === "E" || word.substring(0,1) === "i" || word.substring(0,1) === "I" || word.substring(0,1) === "o" || word.substring(0,1) === "O" || word.substring(0,1) === "u" || word.substring(0,1) === "U"){
		return true;
	} else {
		return false;
	}
}

var consonantWordToPigLatin = function (word){
	word. 
}
console.log(newWord.join(' '));
