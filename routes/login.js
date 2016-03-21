var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var credentials = require('../.credentials.js');
var session = require("express-session");

router.use(session({
	resave : false,
	saveUninitialized : false,
	secret : credentials.cookieSecret
}));

router.use(cookieParser(credentials.cookieSecret));

router.put("/", function(req,res)
{
	console.log("logging in");
	console.log(req.body.email);
	console.log("logged in successfully");
  var email =  req.body.email;
	req.session.user = email;
  res.render('index');
});

router.get("/logout", function(req,res)
{
	console.log("logged out");
	req.session.user = null;
	res.render("index.html");
});

router.use(session({
	resave : false,
	saveUninitialized : false,
	secret : credentials.cookieSecret,
	key : "user"
}));

router.get("/removeSession", function(req,res)
{
	console.log("removing session");
	delete req.session.user;
	res.render("index.html");
});

router.get("/newError", function(req,res)
{
	req.session.flash = "Some error!";
	res.render("index.html");
});

router.get("/error", function(req,res)
{
	res.locals.flash = req.session.flash;
	delete req.session.flash;
	res.render("index.html");
});

router.get("/signed", function(req,res)
{
	res.cookie("testCookie", {test : "test"}, {signed : true});
	res.render("index.html");
});

router.get("/unsigned", function(req,res)
{
	res.cookie("unsignedCookie", {test : "test"});
	res.render("index.html");
});

router.get("/allCookies", function(req,res)
{
	console.log("Cookies: ", req.cookies);
	Cookies: {unsignedCookie: {test: "test"}}
});

router.get("/allSignedCookies", function(req,res)
{
	console.log("Cookies: ", req.signedCookies);
	Cookies: {testCookie: {test: "test"}}
});

router.get("/specificCookie", function(req,res)
{
	console.log(req.signedCookies.testCookie);
	{test: "test"}
});

router.get("/clearCookie", function(req,res)
{
	console.log("Removing cookie: "+req.signedCookies.testCookie);
	res.clearCookie("testCookie");
	res.render("index.html");
});

router.get('/data', function(req,res) {
	console.log(req.xhr);
	res.send({data : "Response from the server"});
});

module.exports = router;
