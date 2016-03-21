var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

// app.get("/", function(req,res)
// {
// });
router.get('/', function(req, res, next)
{

      res.render('product', {page : {
        header : "testProduct",
        title : "testPro",
        products :  [
          {
            name : "test1",
            price : "$10"
          },
          {
            name : "test2",
            price : "$20"
          },
          {
            name : "test3",
            price : "30"
          }
        ]

      }
      // res.send(body);
    });
  // }
  // });
});
//   res.render('about', {page : about.getAbout()});

router.get('/Review', function(req, res, next)
{
  request('http://www.google.com', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
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
