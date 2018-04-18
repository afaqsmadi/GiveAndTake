var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var userRouter = require('./resources/user/userRouter');
var session = require('express-session');
var bcrypt = require('bcrypt-nodejs');

var app = express();
app.use(session({
  secret: 'OurAppSessionSecrets',
  resave: false,
  saveUninitialized: true,
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/',userRouter);

app.get('/', function (req, res) {
});

module.exports = app;
