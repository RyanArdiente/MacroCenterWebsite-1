window.onload = function(){
  createuser.addEventListener("click", sendCreateForm);
  console.log("LOADED");
};
var sendCreateForm = function(){
  var name = document.getElementById("name");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  var json = {
      name : name.value,
      email : username.value,
      password : password.value
  };
  name.value="";
  username.value="";
  password.value="";

  xhrverb("POST", "http://localhost:8080/MacroCenter/rest/createUser", createUserResults, json);

};
var createUserResults = function(data){
    creationResults.innerHTML="";
    var json = JSON.parse(data);
    creationResults.innerHTML = "Name: "+json.name + " Email/username: " + json.email;
    xhrverb("PUT", "../login", undefined, json);
};
