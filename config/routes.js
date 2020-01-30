const express = require("express");
const router  = new express.Router();

// Import the controller
const artistController = require('../controllers/artist_controller.js')
const albumController = require('../controllers/album_controller.js')

router.get("/", async (req, res) => {
  res.render("home", { css : ["home"] })
})

router.get("/all-artists", async (req, res) => {
  let artists = await artistController.getAllArtists();

  const data = {
    css : ["home"],
    artists : artists
  }

  res.render("all-artists", data)
});

router.get("/create", (req, res) => {
  const data = {
    css : ["send"],
    scripts : ["formValidator"]
  }

  res.render("create", data)
})

router.get("/about", (req, res) => {
  const data = {
    css : ["about"]
  }

  res.render("about", data)
})

router.post("/new", async (req, res) => {

  let newArtist = new artistController.Artist({ name : req.body.artistName });
  let artistAlbums = req.body.artistAlbums !== '' ? req.body.artistAlbums.split(',') : [];
  let newAlbumIds = [];

  artistAlbums.forEach(album => {

    let newAlbum = new albumController.Album({
      title : album,
      artist : newArtist._id
    });

    newAlbumIds.push(newAlbum._id)

    newAlbum.save(function (err) {
      if (err) return handleError(err);
      console.log("Album inserted into DB : ", newAlbum);
    });

  })

  newArtist.albums = newAlbumIds;

  newArtist.save(function (err) {
    if (err) return handleError(err);
    console.log("Artist inserted into DB : ", newArtist);
  });

  // Then back to the /home page
  res.redirect('/');

})

module.exports = router;
