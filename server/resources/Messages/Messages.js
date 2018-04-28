var mongoose = require('mongoose');

var MessagesSchema = mongoose.Schema({
	sendUsername: {type:String},
	recivedUsername: {type:String},
	text: {type:String}
});

var Messages = mongoose.model('Messages', MessagesSchema);

module.exports = Messages;
