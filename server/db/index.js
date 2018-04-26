var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/Medusa';
mongoose.connect(process.env.MONGOURI , { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection to database not working'));
db.once('open', function() {
	console.log('connected to database work');
});

module.exports = db;