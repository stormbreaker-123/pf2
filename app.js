require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const { Timestamp } = require("mongodb");


const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({

    extended: true
}))
const MONGO_URL = "mongodb+srv://sayantan:<sayan1>@cluster0.bjy3sst.mongodb.net/portfolio?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
});
var db = mongoose.connection;

db.on('error', () => console.log("ERROR DB"));
db.once('open', () => console.log("connected to db"))

app.post("/signup", (req, res) => {

    var name = req.body.name;
    var email = req.body.email;
    var number = req.body.number;
    var message = req.body.message;

 var d ={
    "name": name,
 }
    var data = {
        "name": name,
        "email": email,
        "number": number,
        "message": message,
        "timestamp": new Date()
    }
    

    db.collection('contact').insertOne(data, (err) => {

        if (err) {

            throw err;
        } 
        console.log("record inserted");
        res.send({ message: "Record inserted successfully" });
        // res.redirect('POPUP.html');
    });

})

app.get("/", (req, res) => {

    res.set({
        "Access-Control-Allow-Origin":
            '*' 
    })
    return res.redirect('index.html');
}).listen(PORT);

console.log(`Listening at the port ${PORT} `)
