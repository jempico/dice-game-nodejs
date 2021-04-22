const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RankingSchema = Schema({
    successRate: { type: Number}
});


//Exporting Ranking model based on RankingSchema
module.exports= mongoose.model('Ranking',RankingSchema);

