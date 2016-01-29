console.log('I am main.js and I am linked. Hear me roar.');

$(function() {
  var liTemplate = Handlebars.compile($('#li-template').html());
  var $shoutoutsUl = $('#random-shoutouts');

  var populateShoutoutUl = function() {
    $.ajax({
      url: '/api/shoutouts/random?limit=3',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
        $shoutoutsUl.empty();
        data.forEach(function(student) {
          $shoutoutsUl.append(liTemplate(student));
        });
      }
    })
  };
  populateShoutoutUl();
  $('#get-shoutouts').on('click', populateShoutoutUl);
});