const mongoose = require('Mongoose')

const movieSchema = mongoose.Schema({
	name : {
		type:String,
		required:true
	},
	category  : {
		type:String,
		required:true
	},
	producer : {
		type:String,
		required:true
	},
	director : {
		type:String,
		required:true
	},
	rating : {
		type:String,
		required:true
	}
});


let Movie = module.exports = mongoose.model('Movie',movieSchema);

/*Requests*/

module.exports.getMovies = (callback,limit) => {
	Movie.find(callback).limit(limit);
}

module.exports.getMoviebyId = (id,callback) =>{
	Movie.findById(id,callback);
}

module.exports.addMovie = (data,callback) =>{
	console.log(data);
	let add = {
		name : data.name,
		category : data.category,
		producer : data.producer,
		director : data.director,
		rating : data.rating
	}
	Movie.create(add,callback);
}

module.exports.removeMovie = (id,callback) =>{
	let query = {_id:id};
	Movie.remove(query,callback);
}

module.exports.editMovie = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		name : data.name,
		category : data.category,
		producer : data.producer,
		director : data.director,
		rating : data.rating
		
	}
	Movie.findOneAndUpdate(id,update,option,callback);
}
