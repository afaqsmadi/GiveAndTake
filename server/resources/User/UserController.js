var Users = require('./Users');
var Items = require('../Items/Items');

exports.create = function (req, res) {
	var user = new Users(req.body);
	user.save(function (err, user) {
	    if (err) {
	    	return console.error(err);	
	    } 
	    res.redirect('/login');
	});
};

exports.login = function (req, res) {
	Users.findOne({username : req.body.username}).exec(function (err, user) {
		if (err) {
			return console.error(err);
		}
		user.validatePassword(req.body.password, function(err, isMatch) {
        	if (err) { 
        		return res.json(err); 
        	}
        	if (!isMatch) {
        		res.json('Password not Match')
        	}
        	return req.session.regenerate(function(err) {
        		if (err) {
        			return console.error(err);
        		}
        		req.session.username = user.username;
        		res.json(user);
			})
			res.json(user)
	    });
	});
};

exports.logout = function (req, res) {
	req.session.destroy(function(err) {
		if (err) {
			return console.log(err);
		}
		res.json("logged out")
	})
};

exports.findUser = function (req, res) {
	Users.findOne({username : req.session.username}).exec(function (err, user) {
		res.json(user)
	});
};

exports.addItem = function (req, res) {
	var item = new Items({
		name: req.body.name,
		image: req.body.image,
		description: req.body.description,
		available: true,
		location: req.body.location
	})	
	item.save(function(err){
		if(err){
			return handleError(err)
		}
	})
	Users.findOne({username : req.session.username}).exec(function (err, user) {
		user.items.push(item._id);
		user.save(function (err, updatedUser) {
		    if (err) return console.log(err);
		    res.json(updatedUser);
		});
	});
}

exports.test = function (req, res) {
	Users.findOne({username : req.session.username}).exec(function (err, user) {
		var id = user.items
		arr = [];
		for (var i = 0 ; i < id.length ; i++) {
			Items.findById(id[i]).exec(function (err, item) {
				console.log(item)
				arr.push(item)
			})
		}
		console.log(arr)
		res.json(arr)
	});
}