var xhrget = function(method,url, callback, obj){
  console.log("in get ajax function");

var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status < 400)
  {
    if(callback)
    {
      callback(xhr.responseText);
    }
  }
};
  xhr.send(null);
};




var xhrverb = function(method , url, callback, object)
{
  console.log(method);
  console.log(url);
  console.log(callback);
  console.log(object);
  var xhr = new XMLHttpRequest();

  xhr.open(method, url);
  xhr.onreadystatechange = function()
  {
    if(xhr.readyState == 4 && xhr.status < 400)
    {
      // console.log(xhr.response);
      if(callback)
      {
        console.log("in callback");
        callback(xhr.responseText);
      }
    }
  };
  xhr.setRequestHeader("Content-Type","application/json");
  xhr.send(JSON.stringify(object));
};
