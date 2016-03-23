var express = require('express');
var router = express.Router();
var request = require('request');
var bodyParser = require('body-parser');
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


// router.get('/', function(req, res, next)
// {
//   res.render('shoppingCart');
// });

router.get('/Checkout', function(req, res, next)
{
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

router.post('/addToCart', function(req, res, next) {
  console.log("inside addToCart in shoppingCart route");
  console.log(req.body.productId + " req body");
  console.log(req.session.userid);
  var json = {
    productId: req.body.productId,
    userId: req.session.userid
  }

  request({
    url: 'http://localhost:8080/MacroCenter/rest/addToCart',
    method: "POST",
    json : json
  } , function(error, r, body) {

    });
  });
module.exports = router;
