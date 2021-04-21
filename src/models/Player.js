const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PlayerSchema = Schema({
  name: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  successRate: { type: Number },
  date: { type: Date, default: Date.now } ,
  games: [ { 
    dice1: { type: Number},
    dice2: { type: Number},
    score: { type: Boolean},
    result: { type: String} } ] 
});

//Exporting Player model based on PlayerSchema
module.exports= mongoose.model('Player',PlayerSchema);
