var Items = require('./Items');

exports.createItem = function (req, res) {
	console.log("req,body",req.body);
	var item= new Items({
		name: req.body.name,
		image: req.body.image,
		description: req.body.description,
		available: req.body.available,
		location: req.body.location
	})	
	
	item.save(function(err){
		if(err){
			return handleError(err)
		}
	})
			res.json(item)

};

exports.updateItem = function (req, res) {
// Items.find({_id:req.body._id})
// console.log(req.body)
var updateitem={
		name: req.body.name,
		image: req.body.image,
		description: req.body.description,
		available: req.body.available,
		location: req.body.location,
		dateOfCreation: Date.now()
	}
	// console.log(updateitem)
	console.log(req.body)
Items.update({_id:req.body._id},updateitem,function(err,data){
if(err){
	res.send(err)
}
res.send(data);
});

};

exports.deleteItem = function (req, res) {
	Items.findOne({_id:req.body._id},function(err,data){
		if(err){
			res.send(err)
		}
		data.remove();
		res.send("deleted")

	})
};

exports.searchItem = function (req,res){
Items.find({name:req.body.name},function(err,data){
if(err){
	return handleError(err)
}
res.send(data)
})
};


exports.retrieve= function(req, res){
	Items.find(function(err, data){
		if(err){
			return handleError(err)
		}
		res.send(data)
		console.log(data)
	})
}

exports.limitedItem = function(req, res) {
	Items.
	  find({}).
	  limit(5).
	  sort('-dateOfCreation').
	  exec(function (err, data) {
	  	res.json(data);
	  });
}

exports.getItemByID = function(req, res) {
	Items.findById(req.params.id).exec(function (err, item) {
		if (err) {
			res.json(err);
		} 
		if (!item) {
			res.json("no item");
		} else {
			res.json(item)			
		}
	})
}