var mongoose = require('mongoose');
var db=require('../../db');
//greate schema for post
var PostSchema = mongoose.Schema({
	username: String,
	commitId: [Number],
	contentText: String,
	dateOfCreation: { type: Date, default: Date.now }
});
var Posts = mongoose.model('Posts', PostSchema);

module.exports=Posts
