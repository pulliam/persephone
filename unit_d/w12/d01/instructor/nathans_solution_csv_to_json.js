// Nathan's solution
var fs = require('fs');

fs.readFile('./census_data.csv', 'utf-8', function(err, data) {
  // each line of the csv file
  var censusArray = data.split('\n');
  // grab the first line which contain the headers
  var rawHeaders = censusArray.shift().split(',');
  // format the headers without spaces
  var headers = rawHeaders.map(function(header) {
    return header.trim();
  });

  // Get a array of objects containing state data
  var censusJson = censusArray.map(function(line) {

    var stateData = line.split(',');
    var stateObj = {};
    stateData.forEach(function(dataPoint, index) {
      stateObj[headers[index]] = dataPoint;
    });
    return stateObj;
  });
  // console.log(censusJson);
  // stringify the array of objects and write it to file
  fs.writeFile('./census_data.json', JSON.stringify(censusJson), function(err) {
    if (err) throw err;
    console.log('Saved!');
  });
});
