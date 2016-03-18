window.onload = function(){
  createuser.addEventListener("click", sendCreateForm)
  console.log("LOADED");
}
var sendCreateForm = function(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;

  var json = {
      username : username,
      password : password,
      name : name
  };

  xhrverb("POST", "user/createuser", createUserResults, json)

}
var createUserResults = function(data){
    creationResults.innerHTML="";
    var json = JSON.Parse(data);
    creationResults.innerHTML = json;
}
