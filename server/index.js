const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const app = express();

const route = require("./routes/route");
// Port number
const port = 3000;

// Connecting to database
mongoose.connect("mongodb://localhost:27017/contactList");

// on connection
mongoose.connection.on("connected", () => {
  console.log("Connected to database successfully!");
});

// Adding cors middleware
app.use(cors());

// Using bodyParser
app.use(bodyParser.json());

// linking server to an html file
app.use(express.static(path.join(__dirname, "../public")));
// Linking needed routes
app.use("/api", route);
// Testing server
app.get("/", (req, res) => {
  res.send("Hello!!!");
});

// App Listening to port
app.listen(port, () => {
  console.log("listening on port " + port + "!");
});
