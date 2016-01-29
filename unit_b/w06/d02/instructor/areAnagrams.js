// Linear solution to areAnagrams function.

var areAnagrams = function(wordOne, wordTwo) {
  // Anagrams are words with the same type and number of letters

  // If the number of letters don't match, it's not an anagram.
  if (wordOne.length !== wordTwo.length) return false;

  // Normalize the words by making them all lowercase,
  // then split the word into individual letters.
  // Note: technically, we don't have to split because
  // javascript strings are indexed and can be looked up
  // using bracket notation, e.g. 'myString'[0] // 'm'
  var wordOneArray = wordOne.toLowerCase().split('');
  var wordTwoArray = wordTwo.toLowerCase().split('');
  // We'll use objects to map the letters to the number of times that
  // they are used in each word.
  var wordOneCharMap = {};
  var wordTwoCharMap = {};

  // Go through the words and count the number of times each letter appears.
  for (var i = 0; i < wordOne.length; i++) {
    if (wordOneCharMap[wordOneArray[i]]) {
      wordOneCharMap[wordOneArray[i]] += 1;
    } else {
      wordOneCharMap[wordOneArray[i]] = 1;
    }

    if (wordTwoCharMap[wordTwoArray[i]]) {
      wordTwoCharMap[wordTwoArray[i]] += 1;
    } else {
      wordTwoCharMap[wordTwoArray[i]] = 1;
    }
  }

  // Get the keys from the first character map so that we can check
  // the number of times each letter appears.
  var wordOneCharMapKeys = Object.keys(wordOneCharMap);
  var wordTwoCharMapKeys = Object.keys(wordTwoCharMap);

  // If one of the words as more or less types of letters than the other,
  // then they are not anagrams.
  if (wordOneCharMapKeys.length !== wordTwoCharMapKeys.length) return false;

  // Check that each letter appears the same number of times in each word.
  wordOneCharMapKeys.forEach(function(letter, index, array) {
    if (wordOneCharMap[letter] !== wordTwoCharMap[letter]) {
      return false;
    }
  });

  return true;
};


console.log(areAnagrams('team', 'meat')); // true
console.log(areAnagrams('mare', 'rare')); // false
console.log(areAnagrams('reserve', 'reverse')); // true
console.log(areAnagrams('ripples', 'slipper')); // true
