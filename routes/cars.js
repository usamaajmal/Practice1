const express = require("Express");
const router = express.Router();
const car = require("../models/car.js")


router.get('/',(req,res)=>{

	let name = null;
	name = req.query.company;

	if(name){
	car.getCarByName(name,(err,carr)=>{
		if (err) {
			console.log("Error at getCarByName");
			res.send("Error at getCarByName");
		}
		res.send(carr);
   })
	}

	car.getCars((err,cars)=>{
		 if (err) {
		 	console.log("Error at getCars");
		 	res.send("Error at getCars");
		 }
		 console.log(cars);
		 res.send(cars);
	})
})

router.get('/:id',(req,res)=>{
	let id = req.params.id;
	
	car.getCarbyId(id,(err,car)=>{
		 if (err) {
		 	console.log("Error at getCarbyId");
		 	res.send("Error at getCarbyId");
		 }
		 console.log(car);
		 res.send(car);
	})
})


router.post('/add',(req,res)=>{
	
	let obj = req.body.Car;

	console.log(req);
	car.addCar(obj,(err,car)=>{
		 if (err) {
		 	console.log("Error at addCar");
		 	res.send("Error at addCar");
		 }
		 console.log(car);
		 res.send(car);
	})
})

router.put('/:id',(req,res) => {
		let id = req.params.id;
		let edit = req.body.Car;
		car.editCar(id,edit,{},(err,car) =>{
			if(err){
				console.log("ERROR");
			}
			console.log("No Error");
		})

})

router.delete('/:id',(req,res) =>{
	let id = req.params.id;
	car.removeCar(id,(err,car) =>{
		if(err){
				console.log("ERROR");
			}
			console.log("No Error");
	})
})

module.exports = router;
