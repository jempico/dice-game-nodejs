const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankingSchema = Schema({
  overall_successRate: { type: Number },
  players: [ { 
    id_player: { type: Number},
    successRate: { type: Number}
  }]
});

const Ranking = mongoose.model('Ranking',RankingSchema);

let ranking = new Ranking();

//Exporting Ranking instance based on Ranking Model
module.exports = ranking;
