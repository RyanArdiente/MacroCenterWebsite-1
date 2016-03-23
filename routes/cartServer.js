var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

console.log("server side cartServer.js route loaded");
// router.get('/', function(req, res, next) {
//   res.render('cart', {
//     page: {
//       header: "Shopping Cart",
//       title: "Shopping Cart",
//       script: "<script  type='text/javascript' src='../js/cartClient.js'></script>",
//     }
//   });
// });

router.get('/', function(req, res, next) {
  console.log("inside cart route");
  var cart = {};
  request('http://localhost:8080/MacroCenter/rest/cart', function(error, r, body) {
    cart = (JSON.parse(body));
    console.log("Inside requst to java Data is  " + cart + " and id is " + cart.id);
    res.render('about', {
      page: {
        header: "Shopping Cart",
        title: "Shopping Cart",
        cart: cart,
        script: "<script  type='text/javascript' src='../js/cartClient.js'></script>"
      }
    });
  });
});

module.exports = router;
