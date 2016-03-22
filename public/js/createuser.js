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

    console.log("in create user");
    console.log(json.id);
    if (json.id)
    {
      creationResults.innerHTML = "Name: "+json.name + " Email/username: " + json.email;
      xhrverb("POST", "../login", undefined, json);
      window.location = "../";
    }
    else
    {
      creationResults.innerHTML = "Error: "+json.name;
    }
}
