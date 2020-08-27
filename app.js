var express = require('express');
var app = express();
var config = require('./config');
var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var port  = process.env.PORT || 3000;

// middleware
app.use('/assets', express.static(__dirname + '/public'));

// setup
app.set('view engine', 'ejs');

// db connection
mongoose.connect(config.getDbConnectionString());

// controllers attachment
setupController(app);
apiController(app);

// server run
app.listen(port);