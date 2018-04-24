var mongoose = require('mongoose');
var db = require('../../db');

var ItemsSchema = mongoose.Schema({
	name: String,
	image: String,
	description: String,
	available: Boolean, // represent the number of days.
	location: String,
	dateOfCreation: { type: Date, default: Date.now }
},{  usePushEach: true});

var Items = mongoose.model('Items', ItemsSchema);

module.exports = Items;