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

// <<<<<<< HEAD
// router.get('/', function(req, res, next) {
//   console.log("here");
//   request('http://localhost:8080/MacroCenter/rest/user', function(error, response, body) {
//     console.log(JSON.parse(body));
//     if (!error && response.statusCode == 200) {
// =======
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

router.get('/createuser', function(req, res, next)
{
  console.log("get createuser");
  // console.log(res);
  // welcomeHeader.innHTML="Sign Up";
  res.render('createuser',
  {
    page:
    {
      welcomeHeader: "Sign Up",
      title: "get create user",
      script : "<script  type='text/javascript' src='../js/createuser.js'></script>"
    }
  }
  );
});

router.get('/signin', function(req, res, next)
{
  console.log("get loginUser");
  // console.log(res);
  // welcomeHeader.innHTML="Sign Up";
  res.render('loginUser',
  {
    page:
    {
      welcomeHeader: "Login",
      title: "get login",
      script : "<script  type='text/javascript' src='../js/loginClient.js'></script>"
    }
  }
  );
});

module.exports = router;
