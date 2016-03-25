var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();
var cookieParser = require('cookie-parser');
var credentials = require('../.credentials.js');
var session = require("express-session");



router.use(cookieParser(credentials.cookieSecret));


router.use(session({
  resave: false,
  saveUninitialized: false,
  secret: credentials.cookieSecret,
  key: "user"
}));



router.get('/', function(req, res, next) {
  if(req.session.user)
  {
  console.log("inside cart route");
  var userId = req.session.userid;
  console.log("id: "+userId);
  var cart = {};
  request('http://localhost:8080/MacroCenter/rest/cart/'+userId, function(error, r, body) {
    cart = (JSON.parse(body));
    console.log("Inside requst to java Data is  " + cart + " and id is ");
  res.render('cart', {
      page: {
        header: "Shopping Cart",
        title: "Shopping Cart",
        myCart:cart,
        script: "<script  type='text/javascript' src='../js/aboutClient.js'></script>"
      }
    });
  });
}
else
{
  res.render('index', {page : {
      title : "Macro Center",
      links :  [
        {
          name : "link1"
        },
        {
          name : "link2"
        },
        {
          name : "link3"
        }
      ]
    }
    // res.send(body);
  });
  }

});



router.get('/deleteFromCart/:id', function(req, res, next) {
  console.log("inside cart delete route");
  var deleteID = req.params.id;
  var userId = req.session.userid;
  console.log("id: "+userId + "deleteID: " + deleteID);
  var route = "http://localhost:8080/MacroCenter/rest/deleteCartItem/" + deleteID;
  console.log(route);
   request.del(route);
res.redirect("/");

 
});



router.get('/checkout', function(req, res, next)
{
  console.log("inside checkout route");
    res.render('checkout', {
      page: {
        header: "Checkout",
        title: "Checkout",
        // cart: cart,
        script: "<script  type='text/javascript' src='../js/checkoutClient.js'></script>"
      }
    });
});

router.get('/checkout/orderplaced', function(req, res, next)
{
  console.log("inside orderplaced route");
    res.render('orderplaced', {
      page: {
        header: "Order Placed",
        title: "Order Placed",
        // cart: cart,
        // script: "<script  type='text/javascript' src='../js/orderplacedClient.js'></script>"
      }
    });
});

module.exports = router;
