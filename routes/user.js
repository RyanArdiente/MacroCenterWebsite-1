var express = require('express');
var router = express.Router();
var request = require('request');

/* GET users listing. */
// router.get('/', function(req, res, next)
// {
//   res.render('user.html');
//   res.send('respond with a resource');
// });

// router.get('/', function(req, res, next)
// {
//   request('http://localhost:8080/MacroCenter/rest/user', function (error, res, body)
//   {
//     if (!error && response.statusCode == 200)
//     {
//       console.log(body) // Show the HTML for the Google homepage.
//       res.render('user', {page : {
//         header : "header",
//         title : "users",
//         user : {}
//       }
//       // res.send(body);
//     }
//   });
//   }
// });

<<<<<<< HEAD
router.get('/', function(req, res, next) {
  console.log("here");
  request('http://localhost:8080/MacroCenter/rest/user', function(error, response, body) {
    console.log(JSON.parse(body));
    if (!error && response.statusCode == 200) {
=======
router.get('/', function(req, res, next)
{
  console.log("in user/");
  request('http://localhost:8080/MacroCenter/rest/user', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {

      // console.log(body) // Show the HTML for the Google homepage.
      // res.render('user', body);
      var users = JSON.parse(body);
      res.render('user', {
        page: {
          header: "user",
          title: "test",
          user: users
        }
        // res.send(body);
      });
    }
  });
});

router.get('/createuser', function(req, res, next) {
  // request('http://localhost:8080/MacroCenter/rest/user', function (error, response, body)
  // {
  //   if (!error && response.statusCode == 200)
  //   {
  // console.log(body) // Show the HTML for the Google homepage.
  // res.render('user', body);
  // var users = JSON.parse(body);
  res.render('createuser', {
    page: {
      header: "<h1>this is a header</h1>",
      title: "create test",
      script: "<script  type='text/javascript' src='../js/xhr.js'></script>",
      script2 : "<script  type='text/javascript' src='../js/createuser.js'></script>"
    }
    // res.send(body);
  });
  //}
});


router.post('/createuser', function(req, res, next)
{
  console.log("in user/createUser");
  var obj = req.body;
  // request.post('http://localhost:8080/MacroCenter/rest/createUser', function (error, response, body)
  request.post('http://localhost:8080/MacroCenter/rest/createUser', {form :{body:obj}}, function (error, response, body)
  {
    // console.log(obj);
    console.log(response.statusCode);
    // if (!error && response.statusCode < 400)
    if (!error && response.statusCode == 200)
    {
      console.log("passed");
      // console.log(body) // Show the HTML for the Google homepage.
      // res.render('user', body);
      var users = JSON.parse(body);
      console.log("users");
      res.render('createuser', {  page: {
          header: "<h1>this is a header</h1>",
          title: "create test",
          script: "<script  type='text/javascript' src='../js/xhr.js'></script>",
          script2 : "<script  type='text/javascript' src='../js/createuser.js'></script>"
        }
      // res.send(body);
    });
    }
    // console.log();
  });
});

router.get('/signin', function(req, res, next)
{
  console.log("in user/login");
  request('http://localhost:8080/MacroCenter/rest/login', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
>>>>>>> 95ee69cf6579539d66ac71fb90ebbdb652d7a9a0
      // console.log(body) // Show the HTML for the Google homepage.
      // res.render('user', body);
      var users = JSON.parse(body);
      console.log("inside if");
      res.render('user', {
        page: {

          header: "user",
          title: "test",
          user: users
        }
        // res.send(body);
      });
    
    }
  });
});

module.exports = router;
