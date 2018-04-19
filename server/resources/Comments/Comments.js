var mongoose = require('mongoose');
var db = require('../../db');

var commentsSchema= mongoose.Schema({
	idPost: String,
	idUser: String,
	text: String,
	date:{type: Date, default: Date.now}
})

var Comments= mongoose.model("Comments", commentsSchema)
module.exports = Comments;
