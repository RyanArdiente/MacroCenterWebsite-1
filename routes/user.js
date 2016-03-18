var express = require('express');
var router = express.Router();
var request = require('request');

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

router.post('/createUser', function(req, res, next)
{
  console.log("in user/createUser");
  var obj = req.body;
  request('http://localhost:8080/MacroCenter/rest/createUser', body, function (error, response, body)
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
