$('form').on('submit', function(event){

  if ($('#user_name').val().length < 2 || $('#user_name').val().length > 16) {
    console.log('Error: Username smaller than 2 or bigget than 16');
    event.preventDefault();
  }
  if ($('#user_password').val().length < 8 || $('#user_password').val().length > 16) {
    console.log('Error: Password smaller than 8 or bigger than 16');
    event.preventDefault();
  }

  var bday = new Date($('#user_born_on').val());
  var today = new Date();
  var age = today.getFullYear() - bday.getFullYear()
  if (age < 17) {
    console.log('Error: Age');
    event.preventDefault();
  }

  if ($('#user_location').val().length == 0) {
    console.log('Error: Empty location');
    event.preventDefault();
  }

  if (!$('#user_avatar_img_url').val().endsWith(".gif") && !$('#user_avatar_img_url').val().endsWith(".jpg")) {
    console.log('Error: Avatar');
    event.preventDefault();
  }

  if ($('#user_password').val() !== $('#user_password_confirmation').val()) {
    console.log('Error: Password confirmation doesnt match');
    event.preventDefault();
  }
});