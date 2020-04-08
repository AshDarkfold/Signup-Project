var LoginBox = document.getElementById("loginBox");
var SignupBox = document.getElementById("signupBox");
function showsignup() {
  LoginBox.className = "loginBox boxinner gosmall";
  SignupBox.className = "signupBox boxinner gobluranimation ontop";
}
function showlogin() {
  LoginBox.className = "loginBox  boxinner gobluranimation ontop ";
  SignupBox.className = "signupBox  boxinner gosmall";
}
