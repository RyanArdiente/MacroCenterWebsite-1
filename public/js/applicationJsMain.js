window.onload = function() {
  // where buttons go
  console.log("inside application js Main");

  // where handlebars views checks go
  var createuser = document.getElementById("createuser");
  var loginUser = document.getElementById("loginUser");
  var addToCart = document.getElementById("addToCart");

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
  if(addToCart){
    addToCart.addEventListener("click", addProductToCart)
  }




  var searchButton = document.getElementById("searchButton");
  console.log(searchButton);
  searchButton.addEventListener("click", function(e)
  {
    console.log("inside search event Listener");
    e.preventDefault();
    var find= document.getElementById("searchField").value;
    console.log("search value is: "+find);
    var url = "";
    url = "/products/search/" + find;
    console.log("url before redirecting is: " + url);
    window.location = url;
    // window.location = "/products";
    // window.location = "/products/search/gate";
    // window.location="/products/search";
    find.innerHTML = " ";

  });


  if (saveAccountEdit) {
    saveAccountEdit.addEventListener("click", callCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }
  if (deleteAccount) {
    deleteAccount.addEventListener("click", deleteAccountCredentials);
    // welcomeHeader.innHTML="Sign Up";
  }

};
