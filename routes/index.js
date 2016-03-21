var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index');
  // res.render('index', { title: 'Express' });
  res.render('index', {page : {
    welcomeHeader : "Welcome ",
    title : "index",
    links :  [
      {
        name : "link1"
      },
      {
        name : "link2"
      },
      {
        name : "link3"
      }
    ]
  }
  // res.send(body);
});
});

module.exports = router;
