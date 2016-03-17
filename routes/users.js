var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next)
{
  res.render('user.html');
  res.send('respond with a resource');
});

// router.get('/', function(req, res, next)
// {
//   request('http://localhost:8080/MacroCenter/rest/', function (error, res, body)
//   {
//     if (!error && response.statusCode == 200)
//     {
//       console.log(body) // Show the HTML for the Google homepage.
//       res.render('users', {page : {
//         header : "header",
//         title : "test",
//         products : {}
//       }
//       // res.send(body);
//     }
//   });
//   }
// });

module.exports = router;
