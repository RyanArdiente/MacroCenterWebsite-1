var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

// app.get("/", function(req,res)
// {
// });
router.get('/', function(req, res, next)
{
  res.render('products', {page : {
    header : "header",
    title : "test",
      products : {
        name : "test",
        price : "10.00"
      }
    }
  });
  // res.render('products.html');
  // app.get("/about", function(req,res){
  //   res.render('about', {page : about.getAbout()});
  // });
});

router.get('/Review', function(req, res, next)
{
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

router.post('/:obj', function(req, res, next)
{
  var obj = req.body;
  // var request = require('request');
  request('http://www.google.com/'+obj, function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  })
});

module.exports = router;
