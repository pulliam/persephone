$(document).ready(function(){
  $('#empire-button').on('click', function(event){
    $.ajax({
      url: '/button',
      type: 'GET',
      dataType: 'json'
    }).done(function(response){

      var template = Handlebars.compile( $("#squad-temp").html() );
      response.forEach(function(squad){
      $('body').append( template(squad) );
      });

    })
  })
});

