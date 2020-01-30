const express = require("express");
const router  = new express.Router();

router.get("/", async (req, res) => {

  // // Get the records
  // Bullshit.find({})
  // .then((results) => {
  //
  //   // Randomize results
  //   results.sort(() => Math.random() - 0.5);
  //
  //   const data = {
  //     css : ["home"],
  //     quotes : results.slice(0,3) // Only first 3 results
  //   }
  //
  //   // Render view
  //   res.render("home", data) // Data needs to be an object
  //
  // }).catch((error) => { reject(error) })

  const data = {
    css : ["home"]
  }
  res.render("home", data) // Data needs to be an object


})

router.get("/send", (req, res) => {
  const data = {
    css : ["send"],
    scripts : ["formValidator"]
  }

  res.render("send", data)
})

router.get("/about", (req, res) => {
  const data = {
    css : ["about"]
  }

  res.render("about", data)
})

router.post("/new", (req, res) => {

  let newRecord = { quote : req.body.quote }
  if ( req.body.source ) { newRecord.source = req.body.source }

  // Insert new BS quote into DB
  Bullshit.create(newRecord)
  .then((result) => {
    console.log("Successfully inserted into DB : ", result);

    // Then back to the /home page
    res.redirect('/');

  }).catch((error) => { console.log("ERROR : ", error) })

})

module.exports = router;
