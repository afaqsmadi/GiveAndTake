var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var db = require('./db');
var userRouter = require('./resources/user/userRouter');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/../react-client/dist'));

app.use('/user',userRouter);

app.get('/', function (req, res) {
});

module.exports = app;
