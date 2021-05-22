var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

var app = express();

const firstRoute = require("./routes/firstRoute");
// Port number
const port = 3000;

// Adding cors middleware
app.use(cors());

// Using bodyParser
app.use(bodyParser.json());

// linking server to an html file
app.use(express.static(path.join(__dirname, "../public")));
// Linking needed routes
app.use("/api", firstRoute);
// Testing server
app.get("/", (req, res) => {
  res.send("Hello!!!");
});

// App Listening to port
app.listen(port, () => {
  console.log("listening on port " + port + "!");
});
