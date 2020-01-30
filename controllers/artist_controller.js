const Artist = require("../models/Artist.model.js");

function createArtist(name, bio, type) {
  return Artist.create({
    name,
    bio,
    type
  });
}

function updateArtist() {}

function deleteArtist(id) {
  return Artist.findOneAndDelete(id);
}

function getAllArtists() {
  return Artist.find({});
}

function viewArtist(id) {
  return Artist.findById(id);
}

module.exports = {
  Artist,
  getAllArtists
};
