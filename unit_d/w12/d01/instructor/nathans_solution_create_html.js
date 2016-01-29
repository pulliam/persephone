// Nathan's Solution
var fs = require('fs');

fs.readFile('./census_data.json', 'utf-8', function(err, data) {
  var dataArray = JSON.parse(data);
  // console.log(dataArray);
  dataArray.forEach(function(stateData) {
    var start = '<!DOCTYPE html><html><head></head><body>';
    var statePageHeader = '<h1>State: ' + stateData.State + '</h1>'; 
    var statePageContent1 = '<p>Total Population 2000: ' + stateData['Total Population 2000'] + '</p>';
    var statePageContent2 = '<p>Total Population 2010: ' + stateData['Total Population 2010'] + '</p>';
    var statePageContent3 = '<p>Population in Rented Housing 2000: ' + stateData['Population in Rented Housing 2000'] + '</p>';
    var statePageContent4 = '<p>Population in Rented Housing 2010: ' + stateData['Population in Rented Housing 2010'] + '</p>';
    var end = '</body></html>'

    var statePageText = start + statePageHeader + statePageContent1 + statePageContent2 + statePageContent3 + statePageContent4 + end;

    fs.writeFile('./census_pages/' + stateData.State + '.html', statePageText, function(err) {
      if (err) throw err;
      console.log('Saved!');
    });
  });
});
