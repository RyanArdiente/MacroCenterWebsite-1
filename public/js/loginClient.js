var sendLoginForm = function(){
  var username = document.getElementById("loginUsername");
  var password = document.getElementById("loginPassword");


  var json = {
      email : username.value,
      password : password.value
  };
  console.log(json);

  username.value="";
  password.value="";

  xhrverb("POST", "http://localhost:8080/MacroCenter/rest/login", loginResults, json)
};

var loginResults = function(data){
    loginResult.innerHTML="";
    welcomeHeader.innerHTML="";
    console.log(data + " this is the data object");
    var json = JSON.parse(data);
    console.log("in login user");
    console.log(json.id);
    console.log(json);
    if (json.id)
    {
      xhrverb("POST", "../login", undefined, json);
      //xhrget("GET", "../", undefined);
      window.location = "../";
    }
    else
    {
      console.log("error");
      console.log("Error: "+ json.name);
      loginResult.innerHTML = "Error: "+ json.name;
    }
}
