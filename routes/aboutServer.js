var express = require('express');
var router = express.Router();
var request = require('request');
var app = express();

console.log("server side about.js route loaded");
router.get('/', function(req, res, next) {
  res.render('about', {
    page: {
      header: "About Macro Center",      // title: "aboutPage",
      description : "",
      employeesLink : "<a href = \"/about/employee\">Meet out employees!</a>",
      script: "<script  type='text/javascript' src='../js/aboutClient.js'></script>",
    }
  });
});


router.get('/employee', function(req, res, next) {
  console.log("inside employee route");
  var employee = {};
  request('http://localhost:8080/MacroCenter/rest/employee', function(error, r, body) {
    employee = (JSON.parse(body));
    console.log("INside requst to java Data is  " + employee + " and id is " + employee.id);
    res.render('about', {
      page: {
        header: "employee",
        employee: employee,
        script: "<script  type='text/javascript' src='../js/aboutClient.js'></script>"
      }
    });
  });
});

router.get('/contact', function(req, res, next)
{
  console.log("inside contact route");
    res.render('about', {
      page: {
        header: "Contact Us",
        info: "Address: 7400 East Orchard Road, Suite 1450N, Greenwood Village, CO, 80111 <a href = \"https://www.google.com/maps/place/7400+E+Orchard+Rd,+Greenwood+Village,+CO+80111/@39.6088518,-104.9050174,17z/data=!3m1!4b1!4m2!3m1!1s0x876c86ed5f85ee1b:0x38551d73b5335c2b?hl=en-US%22%20target=%22_blank\"</a><br>Phone: 1-800-555-5555",
        script: "<script  type='text/javascript' src='../js/aboutClient.js'></script>"
      }
    });
});

module.exports = router;
