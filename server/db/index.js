var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost/Medusa';
var mlab = 'mongodb://give:take@ds159509.mlab.com:59509/giveandtake'
mongoose.connect(mlab, { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection to database not working'));
db.once('open', function() {
	console.log('connected to database work');
});

module.exports = db;