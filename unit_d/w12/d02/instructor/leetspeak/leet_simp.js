var leet = {};

// Letters we're going to replace and their replacements
leet.dictionary = {
  a: "@",
  e: "3",
  g: "9",
  l: "1",
  o: "0",
  s: "5",
  t: "7",
  z: "2"
}

leet.translate = function(string) {
  // Shameless method - this is honestly fine
  // Here, we're using the .replace method to make 
  // substitutions for anything that matches our patterns.
  // return string.replace(/a/gi, '@')
  //              .replace(/e/gi, '3')
  //              .replace(/g/gi, '9')
  //              .replace(/l/gi, '1')
  //              .replace(/o/gi, '0')
  //              .replace(/s/gi, '5')
  //              .replace(/t/gi, 't')
  //              .replace(/z/gi, '2');

  // Using a callback function:
  return string.replace(/[aeglostz]/gi, function(match) {
    // Return its replacement - make sure to lowercase
    // the match in case it's capitalized!
    return leet.dictionary[match.toLowerCase()];
  });
};

leet.decode = function(string) {
  // grabs all my alphabet letters from the dictionary
  var letters = Object.keys(this.dictionary);
  // Reverse, reverse!
  return string.replace(/[@3910572]/g, function(match) {
    // First, let's find the right key for this value in
    // our dictionary object. We'll filter out all the
    // ones that don't meet our criteria!
    var replacementLetter = letters.filter(function(letter) {
      // Only give me back the one(s) this is true for.
      return leet.dictionary[letter] === match;
    // filter returns an array - get the first item. 
    })[0];

    return replacementLetter;
  });
};

module.exports = leet;
