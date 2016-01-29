var toPigLatin = function(string) {
  var words = string.split(' ');
  var pigLatinWords = words.map(function(word) {
    return wordToPigLatin(word);
  });

  return pigLatinWords.join(' ');
};

var wordToPigLatin = function(word) {
  if (startsWithAVowel(word)) {
    return vowelWordToPigLatin(word);
  } else {
    return consonantWordToPigLatin(word);
  }
};

var consonantWordToPigLatin = function(word) {
  var letters = word.split('');
  var vowelIndexes = [];
  letters.forEach(function(letter, index) {
    if (isAVowel(letter)) {
      vowelIndexes.push(index);
    }
  });

  var firstVowelIndex = vowelIndexes[0];

  var pigLatinWord = word.substring(firstVowelIndex) + word.substring(0, firstVowelIndex) + 'ay';

  return pigLatinWord;
};

var vowelWordToPigLatin = function(word) {
    return word + 'yay';
};

var startsWithAVowel = function(word) {
  return isAVowel(word.charAt(0));
};

var isAVowel = function(letter) {
  var vowelMap = {
    'a': true,
    'e': true,
    'i': true,
    'o': true,
    'u': true
  };

  return !!vowelMap[letter];
};

var isAConsonant = function(letter) {
  return !isAVowel(letter);
};

// TODO: Deal with consonant clusters 
// TODO: Deal with punctuation

// console.log(isAVowel('e') === true)
// console.log(isAVowel('f') === false)
// console.log(isAConsonant('e') === false)
// console.log(isAConsonant('f') === true)
// console.log(toPigLatin("pig") === "igpay")
// console.log(toPigLatin("banana") === "ananabay")
// console.log(toPigLatin("trash") === "ashtray")
// console.log(toPigLatin("happy") === "appyhay")
// console.log(toPigLatin("duck" )=== "uckday")
// console.log(toPigLatin("glove") === "oveglay")
// console.log(toPigLatin("eat") === "eatyay")
// console.log(toPigLatin("omelet") === "omeletyay")
// console.log(toPigLatin("are") === "areyay")
// console.log(toPigLatin("strife") === "ifestray")
// console.log(toPigLatin("hello world") === "ellohay orldway")
// console.log(toPigLatin("world.") === "orldway.")

module.exports = toPigLatin;


