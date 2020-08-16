//declaration
var express = require('express');
var ejs = require('ejs');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var app = express();

// Routers
const loginController = require('./controller/loginController');
const employeeController = require('./controller/employeeController');
const adminController = require('./controller/adminController');

// App initialization
const app = express();

//configuration
app.set('view engine', 'ejs');

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());

// Middleware
app.use(bodyParser());
app.use('/login', loginController);
app.use('/admin', adminController);
app.use('/employee', employeeController);

//server startup
var serverPort=3000;
app.listen(serverPort, function(){
    console.log("node-application server started at", serverPort);

});
