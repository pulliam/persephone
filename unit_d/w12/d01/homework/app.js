// Assumes `module_name.js` is in the same folder as `app.js`
var moduleName = require('./module_name.js');

// Using the module
var text = moduleName.weAreCool('Peeps');
// value of text should be the string 'fezzes are cool'

console.log(text);