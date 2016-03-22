window.onload = function() {
  // where buttons go
  var signUpUser = document.getElementById("signUpUser");
  var loginUserBtn = document.getElementById("loginUserBtn");
  var logoutUserBtn = document.getElementById("logoutUserBtn");
  var accsetUserBtn = document.getElementById("accsetUserBtn");
  signUpUser.addEventListener("click", function() {
    console.log("in event listener for signup");
    window.location = "/user/createuser";
  });
  loginUserBtn.addEventListener("click", function() {
    console.log("in event listener for login");
    window.location = "/user/signin";
  });
  logoutUserBtn.addEventListener("click", function() {
    console.log("in event listener for logout");
    window.location = "/login/logout";
  });
  accsetUserBtn.addEventListener("click", function() {
    console.log("in event listener for account settings");
    window.location = "/user/account";
  });
  // where handlebars views checks go
  var createuser = document.getElementById("createuser");
  var loginUser = document.getElementById("loginUser");
  var saveAccountEdit = document.getElementById("saveAccountEdit");
  var deleteAccount = document.getElementById("deleteAccount");
  if (createuser) {
    createuser.addEventListener("click", sendCreateForm);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (loginUser) {
    loginUser.addEventListener("click", sendLoginForm);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (saveAccountEdit) {
    saveAccountEdit.addEventListener("click", callCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (deleteAccount) {
    deleteAccount.addEventListener("click", deleteAccountCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }

};
