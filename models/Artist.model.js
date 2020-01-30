const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  name : { type : String, required : true },
  albums : [{ type: Schema.Types.ObjectId, ref: 'Album' }]
});

const Artist = mongoose.model('Artist', schema);
module.exports = Artist;
