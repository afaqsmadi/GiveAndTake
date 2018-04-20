var Posts=require('./Posts')
exports.create=function(req,res){
	var post= new Posts({
		username: req.body.username,
		commitId: req.body.commitId,
		contentText: req.body.contentText,
		dateOfCreation: req.body.dateOfCreation
	})
	post.save(function(err){
		if(err){
			return handleError(err)
		}
	})
	res.json(post)
};
exports.deletePost=function(req,res){
	var post= new Posts({
		username: req.body.username,
		commitId: req.body.commitId,
		contentText: req.body.contentText,
		dateOfCreation: req.body.dateOfCreation
	})
	 post.remove({
        _contentText: req.params.post_contentText
    }, function (err, user) {
        if (err) return res.send(err);
        res.json({ contentText: 'Deleted' });
    });

}


