var messagesRouter = require('express').Router();
var messagesController = require('./MessagesController');

messagesRouter.route('/:id')
	.get(function (req, res) {
		messagesController.getMessageById(req , res);
	})

module.exports = messagesRouter;
