const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title : { type : String, required : true },
  artist : { type: Schema.Types.ObjectId, ref: 'Artist' }
});

const Album = mongoose.model('Album', schema);
module.exports = Album;
