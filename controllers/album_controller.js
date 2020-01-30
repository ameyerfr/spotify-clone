const Album = require("../models/Album.model.js");

function createAlbum(config) {
  return Album.create(config);
}

module.exports = {
  Album,
  createAlbum
};
