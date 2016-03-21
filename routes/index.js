var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index');
  // res.render('index', { title: 'Express' });
  console.log(res.session.user);
  if (res.session.user)
  {
    res.render('index', {page : {
      welcomeHeader : "Welcome "+req.session.name,
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
  }
  else
  {
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
  }
});

module.exports = router;
