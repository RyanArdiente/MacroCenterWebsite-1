var express = require('express');
var router = express.Router();

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
  request('http://localhost:8080/MacroCenter/rest/user', function (error, response, body)
  {
    console.log(body) // Show the HTML for the Google homepage.
    res.render('user', body);
    if (!error && response.statusCode == 200)
    {
    }
  });
});

module.exports = router;
