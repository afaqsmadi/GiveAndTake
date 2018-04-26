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
exports.updateUser = function (req, res) {
var updateuser={
		
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		image: req.body.image,
		about: req.body.about
	}
	//console.log('update user func ',req.params.username)
	Users.findOneAndUpdate({username:req.session.username},updateuser,function(err,data){
		if(err){
			res.json('err');
		}
		else{
			 data.save(function(err,data){
			 	if(err){
					return handleError(err)
			 	}
			 	else{
			 	res.json(data);
			 }
	      })
			// res.json(data);

		}
	      // res.json(data);
	      
	})
}