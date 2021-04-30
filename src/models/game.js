const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const randomizer = require('../helpers/randomizer')

const GameSchema = Schema({
  dice1: { type: Number, default: 0},
  dice2: { type: Number, default: 0},
  result: { type: String, default: 'TBD'}
}, {
  versionKey: false
});

GameSchema.statics.runGame = function() {
    return randomizer();
}

GameSchema.methods.getScore = async function() {
   try {
      let sumNum = this.dice1 + this.dice2;
      if (sumNum == 7) {
         this.result= 'WIN'
         return this;
      } else if (sumNum !== 7) {
         this.result= 'LOST'
         return this;
      } else {
         return `Something went wrong`;
      }
   } catch(err) { return err }

}
//Exporting Game model based on GameSchema
module.exports= mongoose.model('Game',GameSchema);
