console.log("Hello moto");
// Dependencies
const express = require('express');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

//You know, defining the port.
const PORT = process.env.PORT || 8081;

// Express and Middleware
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(morgan('combined'))
// app.use(bodyParser.json())
app.use(cors())

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


// Routing
require("./routes/apiRoutes")(app);
// require("./routes/htmlRoutes")(app);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/plantlyfe", { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});