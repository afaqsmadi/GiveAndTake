var mongoose = require('mongoose');
var db = require('../../db');

var UsersSchema = mongoose.Schema({
	name: {type: String, index: {unique: true}},
});

// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Users = mongoose.model('Users', UsersSchema);

module.exports = Users;
