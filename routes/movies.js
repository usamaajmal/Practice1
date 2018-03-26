const express = require("Express");
const router = express.Router();
const movie = require("../models/movie.js")


router.get('/',(req,res)=>{

	movie.getMovies((err,movies)=>{
		 if (err) {
		 	console.log("Error at getmovies");
		 	res.send("Error at getmovies");
		 }
		 console.log(movies);
		 res.send(movies);
	})
})

router.get('/:id',(req,res)=>{
	let id = req.params.id;
	movie.getMoviebyId(id,(err,movie)=>{
		 if (err) {
		 	console.log("Error at getmoviebyId");
		 	res.send("Error at getmoviebyId");
		 }
		 console.log(movie);
		 res.send(movie);
	})
})

router.post('/add',(req,res)=>{
	
	let obj = req.body.Movie;

	console.log(req);
	movie.addMovie(obj,(err,movie)=>{
		 if (err) {
		 	console.log("Error at addmovie");
		 	res.send("Error at addmovie");
		 }
		 console.log(movie);
		 res.send(movie);
	})
})

router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Movie;
		movie.editMovie(id,edit,{},(err,movie) =>{
			if(err){
				console.log("ERROR");
			}
			console.log("No Error");
		})

})

router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	movie.removeMovie(id,(err,movie) =>{
		if(err){
				console.log("ERROR");
			}
			console.log("No Error");
	})
})

module.exports = router;
