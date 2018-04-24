var Users = require('../User/Users');

exports.retrive = function (req, res) {
	Users.findOne({username : req.params.username}).exec(function (err, user) {
		if (err) {
			res.json('err');
		}
		if (!user) {
			res.json('No such username, please check username')
		} else {
			res.json(user)
		}
	});
};