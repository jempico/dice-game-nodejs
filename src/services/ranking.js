const sendResponse = require('./response');
const player = require('../repositories/player')
const ranking = require('../repositories/ranking')

class RankingService {
    readPlayers(req,res){
        ranking.readPlayers((err, data) => {
             sendResponse(res, err, data)
        })
    }
}
module.exports = new RankingService;
