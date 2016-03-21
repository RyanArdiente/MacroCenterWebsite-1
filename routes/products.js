var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

console.log("product.js loaded");

// app.get("/", function(req,res)
// {
// });
router.get('/', function(req, res, next) {
  // console.log(req);
  res.render('product', {
    page: {
      header: "testProductget",
      // title : "testPro",
      products: [{
        name: "test1",
        price: "$10"
      }, {
        name: "test2",
        price: "$20"
      }, {
        name: "test3",
        price: "30"
      }],

      script: "<script  type='text/javascript' src='../js/xhr.js'></script>",
      script2: "<script  type='text/javascript' src='../js/productClient.js'></script>"
    }
    // res.send(body);
  });
  // }
  // });
});
//   res.render('about', {page : about.getAbout()});


router.get('/test', function(req, res, next) {
  console.log("inside testproduct route");

   var testProduct = {};
  request('http://localhost:8080/MacroCenter/rest/testProduct', function(error, r, body) {
    // console.log(JSON.parse(res));
    testProduct = (JSON.parse(body));

console.log("INside requst to java Data is  " +testProduct + " and id is " + testProduct.id);
// next();

res.render('product', {
  page: {
    header: "testProductget",
    // title : "testPro",
    product: testProduct,


    script: "<script  type='text/javascript' src='../js/xhr.js'></script>",
    script2: "<script  type='text/javascript' src='../js/productClient.js'></script>"
  }
  // res.send(body);
});
  });
console.log("Data is  " +testProduct + " and id is " + testProduct.id);



});




router.get('/Review', function(req, res, next) {
  request('http://www.google.com', function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

router.post('/:obj', function(req, res, next) {
  var obj = req.body;
  // var request = require('request');
  request('http://www.google.com/' + obj, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body) // Show the HTML for the Google homepage.
      res.send(body);
    }
  });
});

module.exports = router;
