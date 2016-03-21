window.onload = function()
{
  // where buttons go
  // var signUpUser = document.getElementById("signUpUser");
  // signUpUser.addEventListener("click", function()
  // {
  //   console.log("in event listener for signup");
  //   xhrget("GET", "/user/createuser", undefined, undefined);
  // });
  // where handlebars views checks go
  var createuser = document.getElementById("createuser");
  if (createuser)
  {
    createuser.addEventListener("click", sendCreateForm);
    // welcomeHeader.innHTML="Sign Up";
  }
};
