var ItemRouter = require('express').Router();
var ItemController = require('./ItemController');

// Create route handlers for each of the six methods in pokemonController
ItemRouter.route('/')
	.get(function (req, res) {
		// ItemController.searchItem(req,res);
		  ItemController.retrieve(req,res);
		//res.json("get request");

		//ItemController.searchItem(req , res); // login

	})
	.post(function (req, res) {
		ItemController.createItem(req, res); // createItem
	})
	.put(function (req, res) {
		// console.log("asdasdas")
		ItemController.updateItem(req, res); // updateItem
	})
	.delete(function (req, res) {
		// console.log("asdasdas")
		ItemController.deleteItem(req, res); // deleteItem
	})


module.exports = ItemRouter;
