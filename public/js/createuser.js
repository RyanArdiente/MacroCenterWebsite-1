<<<<<<< HEAD
window.onload = function(){
  createuser.addEventListener("click", sendCreateForm);
  console.log("LOADED");
};

var sendCreateForm = function(){
  var name = document.getElementById("createUserName");
  var username = document.getElementById("createUserUsername");
  var password = document.getElementById("createUserPassword");


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
    welcomeHeader.innerHTML="";
    var json = JSON.parse(data);

    creationResults.innerHTML = "Name: "+json.name + " Email/username: " + json.email;
    xhrverb("PUT", "../login", undefined, json);
};

    console.log("in create user");
    console.log(json.id);
    if (json.id)
    {
      creationResults.innerHTML = "Name: "+json.name + " Email/username: " + json.email;
      welcomeHeader.innerHTML="Wecome "+json.name;
      xhrverb("POST", "../login", undefined, json);
      // xhrget("GET", "../", undefined);
      window.location = "../";
    }
    else
    {
      creationResults.innerHTML = "Error: "+json.name;
    }
}
>>>>>>> 6b48fde99f110e1b79081b9c00e6073551d9b826
