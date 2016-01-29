$(document).ready(function(){
  $('#leo-me').on('click', function(event){
    $.ajax({
      url: '/leo',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){
      console.log(response.img);
      var leoImg = response.img;
      $('body').append('<p><img src="' + leoImg + '"></p>');
    })
  })

  $('#random-color').on('click', function(event){
    $.ajax({
      url: '/random_color',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){
      console.log(response);
      var colorAjax = response.color;
      $('body').append('<li><p style="color:' + colorAjax + ';">Random Color</p></li>');
    })
  })

});



