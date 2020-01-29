const PORT = 3000;

const express = require ("express");
const path = require("path");
const server = express();
const hbs = require("hbs"); // Install through npm install hbs

const Bullshit = require('./models/Bullshit.model'); // Import of the model
const bsQuotesData = require(path.join(__dirname, "./data/bsQuotes.js")); // Seed data

// Connection to the database
require('./config/dbConnexion.js');


// Populate DB only the first time
Bullshit.find().
then(bullshits => {
  if (bullshits.length === 0) {
    Bullshit.insertMany(bsQuotesData)
      .then((records) => {
        console.log("Successfully inserted bullshit data into DB !");
      }).catch((error) => { reject(error) })
  } else { console.log("Data is already present in DB !")}
})

// App initial Setup for public folder and views
server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));
server.set("view engine", "hbs");

// Setup routes
server.get("/", async (req, res) => {

  // Get the records
  Bullshit.find({})
  .then((results) => {

    // Randomize results
    results.sort(() => Math.random() - 0.5);

    const data = {
      css : ["home"],
      quotes : results.slice(0,3) // Only first 3 results
    }

    // Render view
    res.render("home", data) // Data needs to be an object

  }).catch((error) => { reject(error) })

})

server.get("/send", (req, res) => {
  const data = {
    css : ["send"]
  }

  res.render("send", data)
})

server.get("/about", (req, res) => {
  const data = {
    css : ["about"]
  }

  res.render("about", data)
})

server.get("*", (req, res) => {
  res.send("404")
})

// Server launch - listen on that specific port
server.listen(PORT, () => {
  console.log(`YES ! server is running @localhost:${PORT}`)
})
