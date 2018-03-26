const express = require("Express");
const mongoose=require("Mongoose")
const bodyParser = require("Body-parser");
const app = express();
const Car = require("./routes/cars.js");
const Movie = require("./routes/Movies.js");
const Song = require("./routes/Songs.js");


const port = process.env.PORT || 3000;

/**/
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + ''))

app.use('/Car',Car);
app.use('/Movie',Movie);
app.use('/Song',Song);

mongoose.connect("mongodb://root:toor@ds117509.mlab.com:17509/first_task").then(
	console.log("Database Connectd"));


app.listen(port, ()=>{
	console.log('Running on port '+port)
})