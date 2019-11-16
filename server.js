const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const handlebars = require("express-handlebars");
// var mongo = require("mongojs");
const mongoose = require("mongoose");

const app = express();
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// let db = require("./models");

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

let PORT = process.env.PORT || 3002;
let MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/wonderfuldb";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.listen(PORT, () => console.log("port " + PORT));