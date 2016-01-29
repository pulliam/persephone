# Node Kiddy Pool

![](http://preview.turbosquid.com/Preview/2014/07/05__16_23_04/Kiddie%20Pool02.jpgc195a831-2dad-44ff-b2d7-f8a6da366aaaOriginal.jpg)

## Objectives

- Review what Node is and what it is used for.
- Understand and be able to use NPM to install external libraries.
- Understand and be able to use the require and module.exports tools.
- Be able to read and write files through Node.
- Understand the idea of encoding and parsing a data format like CSV or JSON.

## Node Review

Node is a server-side Javascript environment built on a Javascript interpreter with built-in modules for server-side functionality, e.g. 'fs' for file system access and manipulation.

NPM stands for Node Package Manager. It is in charge of managing Javascript libraries called 'packages' or 'modules'.

To run a file in Node: `node the_name_of_the_file.js`

To access the commandline arguments: `process.argv`

To install a package locally (project specific): `npm install packageName`
To install a package globally: `npm install -g packageName`

## You Do: Pig Latin

Create a `toPigLatin` function that take a string and turns it into Pig Latin.
```javascript
toPigLatin('hello world'); // 'ellohay orldway'
```

## require and module.exports

We've seen the `require` keyword before. It allowed us to utilize built-in modules and external files and libraries. But how does it know what to load and where to find it?

In Node, when we `require` a file, Node looks for the and loads the value stored in the `module.exports` property.

## We Do: Make toPigLatin reusable

Place the `toPigLatin` function into its own file and assign it to `module.exports` so that we can reuse it in other places. `require` the `toPigLatin` function in your console app so it works like before.

## FS and JSON

Important FS Methods:

- fs#readFile
- fs#writeFile

Important JSON Methods:

- JSON.stringify
- JSON.parse


## You Do: Parse CSV, Create JSON, Create HTML

Our boss is stuck in the Stone Age as has handed us a CSV containing some Census data. As web developers, we're much happier having our data stored as JSON because it's easy to parse and zip up as a string in case we have to send it somewhere else. Our first job is to use our knowledge of file IO to create a well-structured, JSON version of that census data.

Use the census_data.csv file to turn that data into a valid and usable JSON file.

Now use the new json file to create a simple HTML file for each state or territory.

