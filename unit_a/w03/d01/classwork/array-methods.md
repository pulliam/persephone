Implement the following on the Array.prototype.

`Array.prototype.first`

Should return the first element in an array

```
[1,2,3,4].first() //=> 1
```

`Array.prototype.last`

Should return the last element in an array

```
[1,2,3,4].last() //=> 4
```

`Array.prototype.isEmpty`

Returns a boolean

```
[].isEmpty()  //=> true
[1].isEmpty() //=> false
```

`Array.prototype.uniq`

Returns an array of elements without duplicates

```
[1, 3, 3, 4].uniq() //=> [1, 3, 4]
```

`Array.prototype.min`

Returns the lowest valued item in an array

```
[4, 1, 2, 3].min() //=> 1
```

`Array.prototype.max`

Returns the highest valued item in an array

[4, 1, 2, 3].max() //=> 4

`Array.prototype.sample`

Returns a random element from the array

```
[4, 1, 2, 3].sample() //=> 2
[4, 1, 2, 3].sample() //=> 4
```

`Array.prototype.flatten`

Flattens a nested array

```
[1, 2, [3, 4], [5, [6]]].flatten() //=> [1, 2, 3, 4, 5, 6]
```

# Monkey Patching!

Adding methods to built in objects is known as Monkey Patching. 
It's not always very nice, especially in JavaScript.  Because browsers will 
update and implement new versions of JavaScript we need to ensure that we 
haven't defined a method that will later be implemented in a newer Version of 
JavaScript.

For instance, newer versions of JavaScript will implement a "Array.prototype.includes"
method, therefore, if we tried to create one it would overwrite the brower's implementation. 
We can check before creating one by seeing if the prototype has that property.

```
Array.prototype.hasOwnProperty('includes') //=> true
```

Can you add a check to see if these new methods are defined on the prototype 
first before applying them?

