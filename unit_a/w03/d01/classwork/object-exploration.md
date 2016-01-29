# Object Exploration

Let's test our mental models about how objects in JavaScript work.

Use JavaScript's typeof and instanceof methods and examine the output of the
following code in your JavaScript console.

Try to answer the listed questions and hypothesize how objects in JavaScript work.

```js
var letters = ['a', 'b', 'c'];;
typeof letters;
letters instanceof Array;
typeof Array;
typeof Array.prototype;
```

What datatype is Array?
What datatype is the "prototype" property on Array?
Try the above on a different datatype.

```
letters.hasOwnProperty('pop');
letters.pop();
Array.hasOwnProperty('pop');
Array.prototype.hasOwnProperty('pop');
typeof Array.prototype.pop;
```

What is "pop"?
Where is the "pop" code defined or referenced?

```
var book = 'Dance Dance Dance';
var song = 'Norwegian Wood';
String.prototype.author = 'Haruki Murakami';
String.prototype.toUpperCase = function(){ return 'Nope.' }
book.author;
song.author;
title.toUpperCase();
song.toUpperCase();
```

What might be happening in the above code?

```
var letters = ['a', 'b', 'c'];
var numbers = [1, 2, 3];
typeof letters.constructor;
letters.constructor === Array;
letters.constructor === numbers.constructor;
```

What is the constructor property?

```
var dog = {
    name: 'Skippy'
}
var cat = {
    name: 'Tiny'
}
dog.hasOwnProperty('toString');
dog.toString();
dog.toString = function(){ return 'woof' }
dog.hasOwnProperty('toString');
cat.toString();
```

What happened when we added a toString method to the dog object?

```
var area = function(l, w) {
  return l * w;
}

var volume = function volume(l, w, h) {
  return l * w * h;
}

area.length;
volume.length;
area.name;
volume.name;
```

What does the name property refer to?
What does the length property refer to?

```
var Appliance = function Appliance(brand) {
}

Appliance.name;
Appliance.length;

typeof Appliance;
typeof Appliance.prototype;

typeof Appliance('Hoover');
typeof new Appliance('Hoover');
```

What does the "new" keyword do?

```
var Appliance = function Appliance(brand) {
  this.brand = brand;
}

Appliance.brand;
var app = new Appliance('Hoover');
app.brand;
```

Where is the "brand" property defined?
What does the "this" keyword refer to?
