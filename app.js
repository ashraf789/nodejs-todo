var express = requrie('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');

var port  = process.env.PORT || 3000;

// middleware
app.use('/assets', express.static(__dirname + '/public'));

// engine setup
app.set('view engine', 'ejs');

// db connection
mongoose.connect(config.getDbConnectionString());
// server run
app.listen(port);