console.log("I've got a bad feeling about this");

var togglePlanetName = function(event){
  var $planetName = $(this).find('.planet-name');
  // http://stackoverflow.com/questions/18665031/how-to-toggle-attr-in-jquery
  if ( $planetName.attr('hidden') ) {
    $planetName.removeAttr('hidden')
  } else {
    $planetName.attr('hidden', true)
  }
}
// http://api.jquery.com/hover/
$('.planet').hover(togglePlanetName);

var destroyAlderaan = function(event){
  event.preventDefault();
  window.setTimeout(function(){
    $('#alderaan').fadeOut(1000)
    flashDisturbance();
  }, 1000);
}

var flashDisturbance = function(){
  var $topBar = $('.top-bar.flash')
  $topBar.text("I felt a great disturbance in the Force")
  $topBar.addClass('show')
  window.setTimeout(function(){
    $topBar.removeClass('show');
  }, 1000);
}

$('#never').on('click', destroyAlderaan)

var revealSecretCoorindates = function(event){
  event.preventDefault();

  $("#secret-coordinates").removeAttr('hidden');
}

$('#tell').on('click', revealSecretCoorindates);

var revealSecretMessage = function(event) {
  // h = 104 H = 72
  if (event.keyCode === 104 || event.keyCode === 72)  {
    $("#secret-message").removeAttr('hidden')
  }
}

$('body').on('keypress', revealSecretMessage)

var handleCoordinates = function(event) {
  var secretLocation = "Yavin 4";
  var input = $(this).val();
  if ( input === secretLocation ){
    $('body').css({backgroundColor: "green"});
  } else {
    $('body').css({backgroundColor: "red"});
  }
}

$('input[name="location"]').on('keyup', handleCoordinates)

var handlePlea = function(event){
  var secretMessage = "Help me Obi Wan, you're my only hope";
  var input = $(this).val();
  if ( input === secretMessage ) {
    $('body').css({backgroundColor: "blue"});
  }
}

$('input[name=plea]').on('keyup', handlePlea);
