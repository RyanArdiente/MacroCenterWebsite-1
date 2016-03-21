window.onload = function()
{
  // where buttons go
  var signUpUser = document.getElementById("signUpUser");
  signUpUser.addEventListener("click", function()
  {
    console.log("in event listener for signup");
    window.location = "/user/createuser";
  });

  var loginUserBtn = document.getElementById("loginUserBtn");
  loginUserBtn.addEventListener("click", function()
  {
    console.log("in event listener for login");
    window.location = "/user/signin";
  });
  // where handlebars views checks go
  var createuser = document.getElementById("createuser");
  var loginUser = document.getElementById("loginUser");
  if (createuser)
  {
    createuser.addEventListener("click", sendCreateForm);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (loginUser)
  {
    loginUser.addEventListener("click", sendLoginForm);
    // welcomeHeader.innHTML="Sign Up";
  }
};
