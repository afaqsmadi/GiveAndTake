var profileRouter = require('express').Router();
var profileController = require('./ProfileController');

profileRouter.route('/:username')
	.get(function (req, res) {
		profileController.retrive(req , res); 
	})

module.exports = profileRouter;