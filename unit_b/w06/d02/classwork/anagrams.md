# Let's talk about strings baby.

## AreAnagrams

Checks to see if the two words are anagrams.

```javascript
var areAnagrams = function(wordOne, wordTwo) {

};
```

Example:
```javascript
areAnagrams('team', 'meat'); // true
areAnagrams('mare', 'rare'); // false
areAnagrams('reserve', 'reverse') // true
areAnagrams('ripples', 'slipper') // true
```

# Bonuses:

## Squeeze

Returns a new string where runs of the same character that occur in this set are replaced by a single character.

```javascript
var squeeze = function(string) {
  
};
```

```javascript
squeeze('yellow moon') // 'yelow mon'
squeeze('   now    is the') // ' now is the'
squeeze('bennett') // 'benet'
```


## Chomp

Removes the `\n`, `\r`, or `\r\n` character at the end of the string.

```javascript
var chomp = function(string) {
  
};
```

```javascript
chomp('hello' )              // 'hello'
chomp('hello\n')             // 'hello'
chomp('hello\r\n')           // 'hello'
chomp('hello\n\r' )          // 'hello\n'
chomp('hello\r')             // 'hello'
chomp('hello \n there')      // 'hello \n there'
```

## ReplaceChar

Returns a copy of string with `char` replaced by `replacementChar`.

```javascript
var replaceChar(string, char, replacementChar) {
  
};
```

```javascript
replaceChar('mom', 'm', 'b') // 'bob'
replaceChar('gobble gobble', 'g', 'w') // 'wobble woblle'
replaceChar('bull', 'l', 't') // 'butt'
```
## StripRight

Returns a copy of string with trailing whitespace removed.

```
var stripRight(string) {
  
};
```

```javascript
stripRight('    hello    ')   // '    hello'
stripRight('\tgoodbye\r\n')   // '\tgoodbye'
```

## Strip

Returns a copy of string with leading and trailing whitespace removed.

```
var strip(string) {
  
};
```

```javascript
strip('    hello    ')   // 'hello'
strip('\tgoodbye\r\n')   // 'goodbye'
```
