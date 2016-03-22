var commitAccountChanges = function(data){
  console.log("in accountsettings.js/ commitAccountChanges");
var sessiondata = JSON.parse(data);
 var changeUserName = document.getElementById("changeUserName");
 var changeUserUsername = document.getElementById("changeUserUsername");
  var changeUserPassword = document.getElementById("changeUserPassword");
  var confirmChangeUserPassword = document.getElementById("confirmChangeUserPassword");
  var uname;
  var upassword;
  var uemail;
 if (changeUserPassword.value){
   if(changeUserPassword.value === confirmChangeUserPassword.value){
     upassword = changeUserPassword.value;
   }
 }
 if (changeUserName.value){
   uname = changeUserName.value;
 }
 if (changeUserUsername.value){
   uemail = changeUserUsername.value;
 }
   var json = {
     id: sessiondata.id,
     name: uname || null,
     email: uemail || null,
     password: upassword || null
   };
   console.log(json);
   xhrverb("POST", "http://localhost:8080/MacroCenter/rest/editUser", editUserResults, json)
 }

var callCredentials = function(){
  xhrget("GET", "../login/usercredentials", commitAccountChanges);
}
var editUserResults = function(data){
  var json = JSON.parse(data);
  editResults.innerHTML = json.email + " " + json.name;
}

var deleteAccountCredentials = function(){
  xhrget("GET", "../login/usercredentials", deleteAccount);
}
var deleteAccount = function(data){
  var sessiondata = JSON.parse(data);
   xhrverb("POST", "http://localhost:8080/MacroCenter/rest/deleteUser", editUserResults, sessiondata)
   window.location = "../login/logout";
}
