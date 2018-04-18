var Items = require('./Items');

// Complete each of the following controller methods

exports.createItem = function (req, res) {
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
Items.find()
var upitem={
		name: req.body.name,
		image: req.body.image,
		description: req.body.description,
		available: req.body.available,
		location: req.body.location,
		dateOfCreation: { type: Date, default: Date.now }
	}
Items.update({_id:req.body.id},upitem,function(err,data){
if(err){
	res.send(err)
}
res.send(data);
})	;

};

exports.deleteItem = function (req, res) {

};

exports.searchItem = function (req,res){
Items.find({name:req.body.name},function(err,data){
if(err)return handleError(err)	
})


};