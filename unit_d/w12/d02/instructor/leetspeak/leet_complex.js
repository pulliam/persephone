var leet = {}


// From: http://stackoverflow.com/a/6969486/4964574
// This function escapes any characters that have 
// special meanings in regex -for example, parentheses,
// periods, or question marks. Check out the MDN docs
// for a full list of special characters, or check out
// this cheat sheet: http://www.cheatography.com/davechild/cheat-sheets/regular-expressions/
var escapeForRegEx = function (string) {
  return string.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
}

// Letters we're going to replace and their replacements.
// Notice that slashes need to be escaped - "\\".
leet.dictionary = {
  a: "@",
  b: "B",
  c: "(",
  d: "|)",
  e: "3",
  f: "ph",
  g: "9",
  h: "]-[",
  i: "|",
  j: "J",
  k: "|<",
  l: "1",
  m: "|\\/|",
  n: "|\\|",
  o: "0",
  p: "P",
  q: "kw",
  r: "|2",
  s: "5",
  t: "7",
  u: "|_|",
  w: "\\|\\|",
  x: "×",
  y: "Y",
  z: "2",

}

leet.translate = function(string) {
  // Replace all word characters in the string. 
  return string.replace(/(\w)/gi, function(match) {
    // If there's a match and it's in the dictionary, leetify it!
    if (match && leet.dictionary.hasOwnProperty(match.toLowerCase())) {
      return leet.dictionary[match.toLowerCase()];
    // Otherwise, just leave it alone.
    } else if (match) {
      return match;
    }
  });
};

leet.decode = function(string) {
  // grabs all my alphabet letters from the dictionary.
  // `letters` is an array ['a', 'b', 'c'...]
  var letters = Object.keys(leet.dictionary); 

  // sorts the values from longest to shortest to ensure 
  // that the longest pattern is matched first
  var sorted = letters.sort(function(a,b) {
    if (leet.dictionary[a].length > leet.dictionary[b].length) {
      return -1;
    } else if (leet.dictionary[a].length < leet.dictionary[b].length) {
      return 1;
    }
    return 0;
  });

  // Goes through each known pattern and performs replacements on my string
  letters.forEach(function(letter) {
    // using the "escape for regex" function defined at top of file - 
    // escapes unruly characters.
    var currentPattern = escapeForRegEx(leet.dictionary[letter]);
    // creating a new regular expression using the RegExp constructor 
    // function that'll match my current pattern
    var regExp = new RegExp(currentPattern, 'g');
    // performing the replacement
    string = string.replace(regExp, letter);
  });
  // once replacements are done, return that string!
  return string;
};

module.exports = leet;
