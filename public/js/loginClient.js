var sendLoginForm = function(){
  var username = document.getElementById("loginUsername");
  var password = document.getElementById("loginPassword");


  var json = {
      email : username.value,
      password : password.value
  };

  username.value="";
  password.value="";

  xhrverb("PUT", "http://localhost:8080/MacroCenter/rest/login", loginResults, json)
};
var loginResults = function(data){
    loginResults.innerHTML="";
    welcomeHeader.innerHTML="";
    var json = JSON.parse(data);
    console.log("in login user");
    console.log(json.id);
    if (json.id)
    {
      loginResults.innerHTML = "Name: "+json.name + " Email/username: " + json.email;
      welcomeHeader.innerHTML="Wecome "+json.name;
      xhrverb("PUT", "../login", undefined, json);
      // xhrget("GET", "../", undefined);
      window.location = "../";
    }
    else
    {
      loginResults.innerHTML = "Error: "+json.name;
    }
}
