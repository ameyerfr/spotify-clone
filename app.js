require("dotenv").config()
require('./config/dbConnexion.js');

const express = require ("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

// Import of the models
const Artist = require('./models/Artist.model');
const Album = require('./models/Album.model');

// 1 - APP CONFIG
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));

// 2 - ROUTING
app.use(require('./config/routes.js'));

// Nothing matches our routing
app.get("*", (req, res) => {
  res.send("404")
})

// 3 - APP LAUNCH
app.listen(process.env.PORT, () => {
  console.log(`YES ! server is running @localhost:${process.env.PORT}`)
})
