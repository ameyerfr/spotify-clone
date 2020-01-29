const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bsSchema = new Schema({
  quote : { type : String, required : true },
  source : { type : String }
});

const Bullshit = mongoose.model('Bullshit', bsSchema);
module.exports = Bullshit;
