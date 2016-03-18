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

router.get('/', function(req, res, next) {
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
  request('http://localhost:8080/MacroCenter/rest/createUser', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
      // console.log(body) // Show the HTML for the Google homepage.
      // res.render('user', body);
      var users = JSON.parse(body);
      console.log(users);
      res.render('createuser', {  page: {
          header: "<h1>this is a header</h1>",
          title: "create test",
          script: "<script  type='text/javascript' src='../js/xhr.js'></script>",
          script2 : "<script  type='text/javascript' src='../js/createuser.js'></script>"
        }
      // res.send(body);
    });
    }
  });
});

router.get('/login', function(req, res, next)
{
  console.log("in user/login");
  request('http://localhost:8080/MacroCenter/rest/login', function (error, response, body)
  {
    if (!error && response.statusCode == 200)
    {
      // console.log(body) // Show the HTML for the Google homepage.
      // res.render('user', body);
      var users = JSON.parse(body);
      console.log(users);
      res.render('user', {page : {
        header : "user",
        title : "test",
        user : users
      }
      // res.send(body);
    });
    }
  });
});

module.exports = router;
