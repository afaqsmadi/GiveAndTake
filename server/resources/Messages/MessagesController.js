var Messages = require('./Messages');

exports.create = function (req, res) {
	var message = new Message(req.body);
	message.save(function (err, message) {
	    if (err) {
	    	return console.error(err);	
	    } 
	    res.redirect('/login');
	});
};

exports.getMessageById = function(req, res) {
	Messages.findById(req.params.id).exec(function (err, item) {
		if (err) {
			res.json(err);
		} 
		else if (!item) {
			res.json("no item");
		} else {
			res.json(item)			
		}
	})
}