console.log('linked & loaded');

$(document).ready(function() {
  // When a user clicks on "Manifest", prevent the link's default behavior and instead perform an Ajax GET request to "/passengers".

  // This will be passed to the `getPassengers.done()` function as a callback - will happen after we get the data back.
  var renderPassengers = function(passengers) {
    var parsedPassengers = JSON.parse(passengers);
    // When the client receives the JSON response, use Handlebars templating to render the list on the page.
    // Check out the HTML template we made.
    var raw = $('#passenger-temp').html();
    var template = Handlebars.compile(raw);

    // Put each passenger on the page!
    parsedPassengers.forEach(function(passengerInfo) {
      var renderedHTML = template(passengerInfo);
      $('body').append($(renderedHTML));
    });
  };

  var getPassengers = function(event) {
    event.preventDefault();
    $.ajax({
      url: '/passengers',
      type: 'GET',
      dataType: 'json'
    }).done(renderPassengers);
    console.log('clicked');
  };
  var renderDrowningPassengers = function(data) {
    console.log("THEY'RE DROWNING")
    var passengers = JSON.parse(data);
    var passengerIndex = 0;

    var timerId = window.setInterval(function() {
      if (passengerIndex > passengers.length - 1) {
        window.clearInterval(timerId);
        return;
      }
      var $pTag = $('<p>')
      $pTag.text(passengers[passengerIndex].name);
      $pTag.on('click', function(event) {
        // Stop them from drowning!
        window.clearInterval(drownTimer);
        $(event.target).remove();
        var savedName = $(event.target).text();
        $.ajax({
          method: 'POST',
          url: '/rescued',
          data: {name: savedName}
        }).done(function(err) {
          if (err) {
            console.log(err);
          };
        });
      });
      var drownTimer = window.setTimeout(function() {
        console.log("Drowned");
        $pTag.remove();
        // Get info from the p tag
        var soulName = $pTag.text();
        // make that ajax call back to the server
        $.ajax({
          method: 'POST',
          url: '/lost_souls',
          data: {name: soulName}
        }).done(function(err) {
          if (err) {
            console.log(err);
          };
        });
      }, 5000);
      $('body').append($pTag);
      // console.log(passengers[passengerIndex]);
      passengerIndex++;
    }, 2000);
  };
  var getStillMorePassengers = function(event) {
    event.preventDefault();
    $.ajax({
      url: '/passengers',
      type: 'GET',
      dataType: 'json'
    }).done(renderDrowningPassengers);
    console.log('clicked');
  };

  $('#manifest').on('click', getPassengers);
  $('#disaster-strikes').one('click', getStillMorePassengers);

});
