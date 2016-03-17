var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next)
{
  res.render('shoppingCart.html');
});

router.get('/ShoppingCart', function(req, res, next)
{
  var request = require('request');
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

router.get('/ShoppingCart/Checkout', function(req, res, next)
{
  var request = require('request');
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

module.exports = router;
