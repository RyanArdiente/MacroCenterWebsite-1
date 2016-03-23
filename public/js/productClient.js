var addProductToCart = function(){
  var addToCart = document.getElementById("addToCart");
  // console.log(addToCart.value);
  // console.log("inside add to cart function in product test");
  // console.log("added to cart");
  var json = {
    productId: addToCart.value
  };
  xhrverb("POST", "/shoppingCart/addToCart", undefined, json)
}
