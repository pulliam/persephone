// `#user_name` must be between 2 and 16 characters
var hasValidUserName = function(){
  // Break your problem down and solve it one
  // piece at a time!
  //
  // target the input
  var userNameControl = $("#user_name");
  // get the value of the input
  var userName = userNameControl.val();
  // get the length of the input value
  var userNameLength = userName.length;
  // see if that is greater than 2
  var isGreaterThanTwo = userNameLength > 2;
  // see if that is less than 16
  var isLessThanSixteen = userNameLength < 16;
  return isGreaterThanTwo && isLessThanSixteen;
}

// `user_password` must be between 8 and 16 characters
var hasValidPassword = function(){
  var password = $("#user_password").val();
  return password.length > 8 && password.length < 16
}
// `#user_password` and `user_password_confirmation` must match
var hasMatchingPasswords = function(){
  var password = $("#user_password").val();
  var passwordConfirmation = $("#user_password_confirmation").val();
  return password === passwordConfirmation;
}

// `#user_born_on` must be at least 18 years old
var isOfAge = function(){
  var bornOn = $("#user_born_on").val();
  var bday = new Date(bornOn)
  var today = new Date();
  var age = today.getFullYear() - bday.getFullYear();
  return age > 17;
}

// `#user_location` can't be blank
var hasLocation = function(){
  var location = $("#user_location").val();
  // we could also use return !!location
  return location.length > 0;
}

// `#user_avatar_img_url` must end in .jpg or .png or .gif
var isValidFileType = function(){
  var filename = $("#user_avatar_img_url").val()
  return filename.endsWith(".gif") || filename.endsWith(".png") || filename.endsWith(".jpg")
}

$('form').on('submit', function(event){
  console.log('the button was clicked');
  if ( hasValidUserName() && hasMatchingPasswords() && isOfAge() && hasLocation() && isValidFileType() ) {
    console.log("valid user");
  } else {
    console.log("invalid user");
    // https://api.jquery.com/event.preventdefault/
    event.preventDefault();
  }
});
