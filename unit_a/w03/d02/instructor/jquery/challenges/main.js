// The logic inside this function's callback will be executed AFTER the DOM has loaded! Cool!
$(document).ready(function() {
  console.log('linked!');

 var $h1 = $('h1'); // should appear after 1 sec
 var $h2 = $('h2'); // should appear after 2 sec
 var $p = $('.challenge-one p'); // should appear after 3 sec
// .challenge-one p === a paragraph with a parent that has a class of "challenge-one"
// p.challenge-one === a paragraph WITH the class of challenge-one
// .challenge-one.cool-class-two 

// use css to change the visibility to hidden
  $h1.css('visibility', 'hidden');
  $h2.css('visibility', 'hidden');
  $p.css('visibility', 'hidden');

  var showh1 = function() {
    $h1.css('visibility', 'visible');
    $h1.addClass('animated wobble');
  };
  var showh2 = function() {
    $h2.css('visibility', 'visible');
    $h2.addClass('animated slideInRight');
  };

  var showP = function() {
    $p.css('visibility', 'visible');
    $p.addClass('animated bounce');
  };
  window.setTimeout(showh1, 1000);
  window.setTimeout(showh2, 2000);
  window.setTimeout(showP, 3000);

  // // --- Challenge Two ---
  // working with buttons, water div
  var $water = $('#water');
  var $addWaterBtn = $('#add-water');
  var $pourWaterBtn = $('#remove-water');
  var $resetWaterBtn = $('#reset-water');
  var $counter = $('div.counter');
  var waterHeight = 12;
  var drinkCounter = 0;

  $water.height(waterHeight);

  $addWaterBtn.on('click', function() {
    if (waterHeight > 371) {
      waterHeight = 380;
      $water.height(waterHeight);
      window.setTimeout(function() {
        waterHeight = 372;
        $water.height(waterHeight);
      }, 200);
    } else {
      drinkCounter += 1;
      $counter.text(drinkCounter);
      waterHeight += 45;
      $water.height(waterHeight);
      
    }
  });
  $pourWaterBtn.on('click', function() {
    drinkCounter -= 1;
    $counter.text(drinkCounter);
    waterHeight -= 45;
    $water.height(waterHeight);
  });
  $resetWaterBtn.on('click', function() {
    waterHeight = 12;
    $water.height(waterHeight);
  });



// Popover Pseudocode

// make sure my div is over where people can't see it (bottom right)
// wait 5 secs
// Slide that div on over


  // Pop-over ad
  var $popOver = $('#pop-over');
  $popOver.on('click', function(event) {
    $popOver.remove();
  });
  $popOver.css({position: 'fixed', bottom: '0', left: '100%'});

  var popOutFunc = function() {
    $popOver.animate(// invoking .animate method
      {left: '65%'}, // Go to 65% from the left
      500, // animation duration of a half seond
      function(){ console.log('done')}// Tell me I'm done
      )
  };
  window.setTimeout(popOutFunc, 5000); // Afer 5 secs, run popout 

});