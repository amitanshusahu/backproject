const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const path = require("path")
const bodyParser = require("body-parser");

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// SETUP FOR PUG , ejs
app.set("view engine", "pug")
// app.set('view engine', 'ejs')
app.set("views" , path.join(__dirname+"/views"))
//static files
app.use('/', express.static("public"))


// // MONGOOSE SETUP
// const mongoose = require("mongoose")
// main().catch(err => console.log(err));
// async function main() {
//   await mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://amitanshuAdmin:idkpassword@cluster0.9vqxf.mongodb.net/medketsBooking?retryWrites=true&w=majority" ,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });
// }

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname, "public" , "html/index.html"))
})
app.get("/booktickets", (req,res) =>{
    res.status(200).sendFile(path.join(__dirname,"public","html/booking.html"))
});


app.get("*" , (req, res) => {
    res.render("404.pug")
  })
app.listen(port, ()=>{
    console.log("server started")
})
