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
module.exports = router;
