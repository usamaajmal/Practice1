const mongoose = require('Mongoose')

const carSchema = mongoose.Schema({
	company : {
		type:String,
		required:true
	},
	model  : {
		type:String,
		required:true
	},
	number : {
		type:String,
		required:true
	},
	color : {
		type:String,
		required:true
	},
	seatingCapacity : {
		type:Number,
		required:true
	}
});


let Car = module.exports = mongoose.model('Car',carSchema);

/*Requests*/

module.exports.getCars = (callback,limit) => {
	Car.find(callback).limit(limit);
}

module.exports.getCarbyId = (id,callback) =>{
	Car.findById(id,callback);
}

module.exports.addCar = (data,callback) =>{
	console.log(data);
	let add = {
		company : data.company,
		model : data.model,
		number : data.number,
		color : data.color,
		seatingCapacity : data.seatingCapacity
	}
	Car.create(add,callback);
}

module.exports.removeCar = (id,callback) =>{
	let query = {_id:id};
	Car.remove(query,callback);
}

module.exports.editCar = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		company : data.company,
		model : data.model,
		number : data.number,
		color : data.color,
		seatingCapacity : data.seatingCapacity
		
	}
	Car.findOneAndUpdate(id,update,option,callback);
}
module.exports.getCarByName = (name,callback) =>{
	let query = {company:name};
	Car.findOne(query,callback);
}
