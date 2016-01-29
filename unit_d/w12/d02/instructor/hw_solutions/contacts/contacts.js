var fs = require('fs');

var contacts = {};

// Loads contact data and saves it
contacts.load = function () {
  fs.readFile('./contacts.json', 'utf8', function(err, data) {
    if (err) throw err;
    contacts.data = JSON.parse(data);
    console.log(contacts.data);
  });
}
console.log(contacts.data);

contacts.load();
