var xhrget = function(method,url, callback, object){
var xhr = new XMLHttpRequest();
xhr.open(method, url);
xhr.onreadystatechange = function(){
  if(xhr.readyState == 4 && xhr.status < 400)
  {
      callback(xhr.responseText);

  }
};

  xhr.send(null);
};
var xhrverb = function(method , url, callback, object){
  var xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onreadystatechange = function(){    {
        callback(xhr.responseText);

    }
  };
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.send(JSON.stringify(object));
};
