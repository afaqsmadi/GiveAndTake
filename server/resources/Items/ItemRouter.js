var ItemRouter = require('express').Router();
var ItemController = require('./ItemController');

// Create route handlers for each of the six methods in pokemonController
ItemRouter.route('/')
	.get(function (req, res) {
		res.json("get request");
		//ItemController.searchItem(req , res); // login

	})
	.post(function (req, res) {
		ItemController.createItem(req, res); // createUser
	})
	// .put(function (req, res) {
	// 	ItemController.updateItem(req, res); // updateUser
	// })

module.exports = ItemRouter;
