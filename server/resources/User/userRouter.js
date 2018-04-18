var userRouter = require('express').Router();
var userController = require('./UserController');

// Create route handlers for each of the six methods in pokemonController
userRouter.route('/')
	.get(function (req, res) {
		res.json("Not Allowed To Enter Here");
	})

userRouter.route('/login')
	.get(function (req, res) {
		res.redirect('/login.html');
	})
	.post(function (req, res) {
		userController.login(req, res);
	})

userRouter.route('/create')
	.get(function (req, res) {
		res.redirect('/create.html');
	})
	.post(function (req, res) {
		userController.create(req, res);
	})

userRouter.route('/logout')
	.get(function (req, res) {
		userController.logout(req, res); 
	})


module.exports = userRouter;
