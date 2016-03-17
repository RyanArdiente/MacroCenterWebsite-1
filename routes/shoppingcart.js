var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next)
{
  res.render('shoppingCart.html');
});

router.get('/Checkout', function(req, res, next)
{
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});

module.exports = router;
