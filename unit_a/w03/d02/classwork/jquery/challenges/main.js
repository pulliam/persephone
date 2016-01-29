// The logic inside this function's callback will be executed AFTER the DOM has loaded! Cool!
$(document).ready(function() {
  console.log('linked!');
  var $water = $('#water');
  var $addWaterBtn = $('#add-water');
  var $pourWaterBtn = $('#pour-water');
  var $resetWaterBtn = $('#reset-water');
  var waterHeight = 12;

  $addWaterBtn.on('click', function() {
    if (waterHeight > 371) {
      waterHeight = 380;
      $water.height(waterHeight);
      window.setTimeout(function() {
        waterHeight = 372;
        $water.height(waterHeight);
      }, 200);
    } else {
      waterHeight += 45;
      $water.height(waterHeight);
      
    }
  });
  $pourWaterBtn.on('click', function() {
    waterHeight -= 45;
    $water.height(waterHeight);
  });
  $resetWaterBtn.on('click', function() {
    waterHeight = 12;
    $water.height(waterHeight);
  });

  $water.height(waterHeight)
});