console.log("linked scripts.js");


$(document).ready(function(){
  $('button.check-email').on('click', function(){
    var email_address = $('input.email').val();
    console.log(email_address);

    jQuery.ajax({
    url: "/email?email=" + email_address,
    method: "GET", 
    dataType: "json", 
    success: function(data){
      $form = $("form").eq(0)
      if (data.email_exists) {
        console.log('This email already exists')
      } else {
        console.log('This email is available')
      }
    }, 
      error: function(error){
        console.log(error)
    }
    });
  });
});



