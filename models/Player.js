const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PlayerSchema = Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rounds: [ Number ] 
});

//Exporting User model based on UserSchema
module.exports= mongoose.model('Player',PlayerSchema)