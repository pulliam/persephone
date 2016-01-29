var render = function(response){
  var raw = $("#squad-temp").html()
  var template = Handlebars.compile(raw)
  $squad = $('<div>');
  response.forEach(function(squad){
    $squad.append(template(squad));
  })
  $('body').append($squad);
 }

$(document).ready(function(){
  $.ajax({
    url: "/black_squadron",
    type: "GET",
    dataType: "json"
  }).done(render)
});
