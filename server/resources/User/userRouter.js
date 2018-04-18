var userRouter = require('express').Router();
var userController = require('./UserController');

// Create route handlers for each of the six methods in pokemonController
userRouter.route('/')
	.get(function (req, res) {
		userController.login(req , res); // login
	})
	.post(function (req, res) {
		userController.createOne(req, res); // createUser
	})
	.put(function (req, res) {
		userController.update(req, res); // updateUser
	})

module.exports = userRouter;
