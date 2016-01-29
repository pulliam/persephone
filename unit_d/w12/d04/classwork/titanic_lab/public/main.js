jQuery(document).ready(function(){
     
     var $manifest = $('#manifest');
     var $iceberg = $('#iceberg');
     var $lookout = $('#lookout');

     $manifest.on('click', function(){
     	event.preventDefault();
		  $.ajax({
      		url: '/passengers',
      		type: 'GET',
      		dataType: 'json'
    	}).done(function(response){
      		console.log(response);
      		var template = Handlebars.compile( $("#manifest-temp").html() );
      		response.forEach(function(passanger){
      		$('body').append( template(passanger) );
      		});
      	});
  	})

     $lookout.on('click', function(){
     	event.preventDefault();
		  $.ajax({
      		url: '/passengers',
      		type: 'GET',
      		dataType: 'json'
    	}).done(function(response){
        var template = Handlebars.compile( $("#iceberg-temp").html() );
          window.setInterval(function(){
            var randomIndex = Math.floor(Math.random() * response.length);
              $('body').append( template(response[randomIndex]) );
          }, 2000);
      	});
     });


});