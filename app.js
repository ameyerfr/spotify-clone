const express = require ("express");
const path = require("path");
const server = express();
const hbs = require("hbs"); // Install through npm install hbs
const PORT = 3000;
const bsQuotes = require(path.join(__dirname, "data/bsQuotes.js"));

// App initial Setup for public folder and views
server.use(express.static(path.join(__dirname, "public")));
server.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"));
server.set("view engine", "hbs");

// Setup routes
server.get("/", (req, res) => {

  // Randomize quotes
  bsQuotes.sort(() => Math.random() - 0.5);

  const data = {
    css : ["home"],
    quotes : bsQuotes.slice(0,3)
  }

  res.render("home", data) // Data needs to be an object
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
