var Comments = require('./Comments');

exports.createComment=function(req,res){
	var comment=new Comments({
		idPost: req.body.idPost,
		idUser: req.body.idUser,
		text: req.body.text
	})

	comment.save(function(err){
		if(err){
			res.send(err)
		}
		res.json(comment)
	})

}

exports.updateComment= function(req, res){
	Comments.update({'_id':req.body._id},{'text':req.body.text},function(err,data){
		if(err){
			res.send(err);
		}
		res.send(data)
	})

}


exports.deleteComment= function(req, res){
	Comments.findOne({_id: req.body._id}, function(err, data){
		if(err){
			res.send(err);
		}
		data.remove()
		res.send('deleted')
	})
}