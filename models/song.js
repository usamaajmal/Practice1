const mongoose = require('Mongoose')

const songSchema = mongoose.Schema({
	name : {
		type:String,
		required:true
	},
	category  : {
		type:String,
		required:true
	},
	duration : {
		type:String,
		required:true
	},
	singer : {
		type:String,
		required:true
	},
	rating : {
		type:String,
		required:true
	}
});


let Song = module.exports = mongoose.model('Song',songSchema);

/*Requests*/

module.exports.getSongs = (callback,limit) => {
	Song.find(callback).limit(limit);
}

module.exports.getSongbyId = (id,callback) =>{
	Song.findById(id,callback);
}

module.exports.addSong = (data,callback) =>{
	console.log(data);
	let add = {
		name : data.name,
		category : data.category,
		duration : data.duration,
		singer : data.singer,
		rating : data.rating
	}
	Song.create(add,callback);
}

module.exports.removeSong = (id,callback) =>{
	let query = {_id:id};
	Song.remove(query,callback);
}

module.exports.editSong = (id,data,option,callback) =>{
	let query = {_id:id};
	let update = {
		name : data.name,
		category : data.category,
		duration : data.duration,
		singer : data.singer,
		rating : data.rating
		
	}
	Song.findOneAndUpdate(id,update,option,callback);
}