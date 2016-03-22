window.onload = function() {
  // where buttons go
  console.log("inside application js Main");
  var signUpUser = document.getElementById("signUpUser");
  var helpButton = document.getElementById("helpButton");

  var loginUserBtn = document.getElementById("loginUserBtn");
  var logoutUserBtn = document.getElementById("logoutUserBtn");
  var accsetUserBtn = document.getElementById("accsetUserBtn");

  signUpUser.addEventListener("click", function() {
    console.log("in event listener for signup");
    window.location = "/user/createuser";
  });

  helpButton.addEventListener("click", function() {
    console.log("in event listener for help");
    window.location = "/help";
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




  var searchButton = document.getElementById("searchButton");
  console.log(searchButton);
  searchButton.addEventListener("click", searchProduct);
function searchProduct() {

    console.log("inside search event Listener");
    // e.preventDefault();
    var find= document.getElementById("searchField").value;

    console.log(find);
    var url = "";
    url = "/products/search/" + find;
    console.log(" url before redirecting is : " + url);
    window.location = "/products/search/gate";
    // window.location="/products";
    find.innerHTML = " ";
  };


  if (saveAccountEdit) {
    saveAccountEdit.addEventListener("click", callCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (deleteAccount) {
    deleteAccount.addEventListener("click", deleteAccountCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }

};
