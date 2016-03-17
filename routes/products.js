var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next)
{
  res.render('products.html');
});

router.get('/Review', function(req, res, next)
{
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
  });
});
router.get('/Google', function(req, res, next)
{
  // var request = require('request');
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  })
});

router.post('/Product/Review', function(req, res, next)
{
  request.post('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
    }
    else
    {

    }
  });
});

module.exports = router;
