const express = require("Express");
const router = express.Router();
const song = require("../models/song.js")


router.get('/',(req,res)=>{

	song.getSongs((err,songs)=>{
		 if (err) {
		 	console.log("Error at getSongs");
		 	res.send("Error at getSongs");
		 }
		 console.log(songs);
		 res.send(songs);
	})
})

router.get('/:id',(req,res)=>{
	let id = req.params.id;
	song.getSongbyId(id,(err,song)=>{
		 if (err) {
		 	console.log("Error at getSongebyId");
		 	res.send("Error at getSongbyId");
		 }
		 console.log(song);
		 res.send(song);
	})
})

router.post('/add',(req,res)=>{
	
	let obj = req.body.Song;

	console.log(req);
	song.addSong(obj,(err,song)=>{
		 if (err) {
		 	console.log("Error at addSong");
		 	res.send("Error at addSong");
		 }
		 console.log(song);
		 res.send(song);
	})
})

router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Song;
		song.editSong(id,edit,{},(err,song) =>{
			if(err){
				console.log("ERROR");
			}
			console.log("No Error");
		})

})

router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	song.removeSong(id,(err,song) =>{
		if(err){
				console.log("ERROR");
			}
			console.log("No Error");
	})
})

module.exports = router;
