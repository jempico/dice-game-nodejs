const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');

const PlayerSchema = Schema({
  name: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  successRate: { type: Number, default: 0 },
  date: { type: Date, default: Date.now } ,
  wins: { type: Number, default: 0  },
  rounds: { type: Number, default: 0 },
  games: [ { 
    dice1: { type: Number},
    dice2: { type: Number},
    score: { type: Boolean},
    result: { type: String} } ]
  
}, {
  versionKey: false
});

PlayerSchema.statics.encryptPassword = function(password) {
   return bcrypt.hashSync(password, 10)
}

PlayerSchema.statics.comparePassword = function(password, receivedPassword) {
  return bcrypt.compare(password, receivedPassword)
}

PlayerSchema.statics.setAnonimName = function(name) {
  if (name == null || name == '') {
    return uniqid('ANONIM-');
} else {
  return name;
}
}

//Exporting Player model based on PlayerSchema
module.exports= mongoose.model('Player',PlayerSchema);
