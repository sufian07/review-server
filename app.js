var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var adminRoutes = require('./routes/admin');
// var users = require('./routes/users');

var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(logger('combined'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// use res.render to load up an ejs view file

// index page 
// app.get('/', function(req, res) {
//     res.render('pages/index');
// });
app.use('/admin', adminRoutes)
app.listen(8080);
console.log('8080 is the magic port');
