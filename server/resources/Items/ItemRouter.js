var ItemRouter = require('express').Router();
var ItemController = require('./ItemController');

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
	ItemRouter.route('/home')
	.get(function (req, res) {
		ItemController.limitedItem(req, res);
	})
ItemRouter.route('/:id')
	.get(function (req, res) {
		ItemController.getItemByID(req, res);
	})

module.exports = ItemRouter;
