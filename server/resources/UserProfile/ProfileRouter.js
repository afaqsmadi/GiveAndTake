var profileRouter = require('express').Router();
var profileController = require('./ProfileController');

// Create route handlers for each of the six methods in pokemonController
profileRouter.route('/:username')
	.get(function (req, res) {
		profileController.retrive(req , res); 
	})

module.exports = profileRouter;