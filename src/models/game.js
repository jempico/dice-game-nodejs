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

GameSchema.methods.runGame = function() {
    this.dice1 = randomizer();
    this.dice2 = randomizer();
    return this;
}

GameSchema.methods.getScore = function() {
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
}
//Exporting Game model based on GameSchema
module.exports= mongoose.model('Game',GameSchema);
