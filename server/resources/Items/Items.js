var mongoose = require('mongoose');
var db = require('../../db');

var ItemsSchema = mongoose.Schema({
	username:String,
	name: String,
	image: String,
	description: String,
	available: Boolean, 
	location: String,
	dateOfCreation: { type: Date, default: Date.now }
},{  usePushEach: true});

var Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;