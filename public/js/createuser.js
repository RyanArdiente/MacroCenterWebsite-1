window.onload = function(){
  createuser.addEventListener("click", sendCreateForm)
  console.log("LOADED");
}
var sendCreateForm = function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
}
