window.onload = function() {
  loadProduct();
  console.log("LOADED");
  // require("../routes/product");
};
var loadProduct = function() {
  xhrget("GET", "http://localhost:8080/MacroCenter/rest/testProduct", displayProducts);

  function displayProducts(productData) {
      var json = JSON.parse(productData);
    console.log("inside callback in product Client.js");
   console.log(productData);

    xhrverb("POST","../products", undefined, json);

  }

};
