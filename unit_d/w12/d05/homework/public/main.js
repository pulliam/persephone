jQuery(document).ready(function(){
     
     var $seeall = $('#see-all-beez');
     var $create = $('#create-new-buzz');
     var $createButton = $('#see-create-beez');

     $create.hide();

    $createButton.on('click', function(){
      event.preventDefault();
      $create.show();
    });

     $seeall.on('click', function(){
     	event.preventDefault();
      $create.hide();
		  $.ajax({
      		url: '/bezzforall',
      		type: 'GET',
      		dataType: 'json'
    	}).done(function(response){
      		console.log(response);
      		var template = Handlebars.compile( $("#templatez-one").html() );
      		response.hives.forEach(function(passanger){
      		$('body').append( template(passanger) );
      		});
      	});
  	});

});