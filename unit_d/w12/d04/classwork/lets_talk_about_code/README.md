# Breaking the Code

***Let's talk about code, bay-bee***

We discussed yesterday the importance of being able to explain code clearly, succinctly, and thoroughly. This is a skill that requires practice and that you can *always* improve upon. Talking through code with someone else also helps immensely with your own understanding!

In addition, once you get to the workplace, you'll be expected to familiarize yourself with an existing codebase, so it's in your best interest to look at and try to understand code that other developers have written.

### Directions

This morning, you'll be working with a randomly assigned partner. The final section of this page includes six code snippets - you and your partner will each be responsible for **analyzing** and **explaining** three snippets.

### Schedule

| Time        | Activity            |
|------------:|:-------------------:|
| 9:05        | Intro               |
| 9:10 - 9:15 | Interpret snippet 1 |
| 9:15 - 9:20 | Explain & discuss   |
| 9:20 - 9:30 | Interpret snippet 2 |
| 9:30 - 9:35 | Explain & discuss   |
| 9:35 - 9:45 | Interpret snippet 3 |
| 9:45 - 9:50 | Explain & discuss   |

### Partners

| Partner A | Partner B |
|:---------:|:---------:|
| Frances   | Ona       |
| Isabel    | Anusha    |
| Bennett   | Natasha   |
| Chris     | Nathan    |
| Dana      | Julia     |
| Jess      | Alex      |
| Emily     | Serge     |
| Taylor    | Suhyun    |
| Thais     | Meredith  |
| De        | Kim       |
| Anastasia | Amadeo    |

### Code Snippets

#### Set A

```javascript
_.indexOf = function(array, target){
  var result = -1;

  array.forEach(function(item, index) {
    if (item === target && result === -1) {
      result = index;
    }
  });
  return result;
};
```

```javascript
_.each = function(collection, callback) {
  var i;
  var length;
  if (Array.isArray(collection)) {
    for (i = 0, length = collection.length; i < length; i++) {
      callback(collection[i]);
    }
  } else {
    var keys = Object.keys(collection);
    for (i = 0, length = keys.length; i < length; i++) {
      callback(collection[keys[i]]);
    }
  }
};
```

```javascript
$addWaterBtn.on('click', function() {
  if (waterHeight > 360) {
    waterHeight = 45;
    $water.height(waterHeight);
  } else {
    waterHeight += 45;
    $water.height(waterHeight);
  }
});
```

#### Set B

```javascript
_.filter = function(array, test) {
  var filtered = [];
  array.forEach(function(item) {
    if (test(item)) {
      filtered.push(item);
    }
  });
  return filtered;
};
```

```javascript
_.pluck = function(array, key) {

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  var result = array.map(property(key));
  return result;
};
```

```javascript
app.post('/dance_halls', function(req, res) {

  fs.readFile('lib/dance_halls.json', 'utf8', function(err, data) {
    var danceHalls = JSON.parse(data);
    var hall = {
      'location': req.body.location,
      'maxCapacity': req.body.capacity,
      'id': idGenerator.createId()
    };
    danceHalls.push(hall);

    fs.writeFile('lib/burritos.json', JSON.stringify(danceHalls), function(err) {
      if (!err) {
        res.redirect('/');
      }
    });
  });
});
```