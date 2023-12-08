const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
require("dotenv").config();
const Auth = require("./routes/auth");
const cors = require("cors");

// const MongoUrl = "mongodb+srv://20ntucs1120:WU6TAoQiyFljPJxO@blog-cluster.bvblv9k.mongodb.net/fyp";
const MongoUrl = "mongodb://localhost:27017/tajir2";



const app = express();
const port = process.env.PORT || 4000;

// Database Connection
mongoose.connect(MongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error occurred in db connection");
});
db.once("open", () => {
  console.log("Connected");
});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(cors());
// Run Route Files APIs
app.use("/", Auth);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
