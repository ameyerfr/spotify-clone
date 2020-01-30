const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name : { type : String, required : true },
  description : String,
  albums : [{ type: Schema.Types.ObjectId, ref: 'Album' }],
  rate : { type : Number, min : 0, max : 5 }
});

const Artist = mongoose.model('Artist', schema);
module.exports = Artist;
