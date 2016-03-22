window.onload = function() {
  console.log("LOADED product.js");
  // loadProduct();
  // require("../routes/product");
  powerSupply.addEventListener("click", loadProduct);
};
var powerSupply = document.getElementById("powerSupply");

var loadProduct = function()
{
  var category = powerSupply.innerHTML;
  console.log(category);
  var url = "/products/category/"+category;
  console.log(url);
  xhrget("GET", url, undefined, undefined);
};
