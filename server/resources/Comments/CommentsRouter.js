var commentRouter = require('express').Router();
var commentController = require('./CommentsController');

// Create route handlers for each of the six methods in pokemonController
commentRouter.route('/')
	.get(function (req, res) {
	
		})
		.post(function(req,res){
		commentController.createComment(req,res);

		})
		.put(function(req,res){
			console.log('asdasdsa',req.body);
			commentController.updateComment(req,res);
		})
		.delete(function(req,res){
			commentController.deleteComment(req,res);
		})																											



module.exports = commentRouter;
