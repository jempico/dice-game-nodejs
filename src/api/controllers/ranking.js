const player = require('../../services/player')

class RankingController {
    // READ PLAYERS
    async readPlayers(req,res){
        try {
            let rankingList = await player.readPlayersRanking()
            let overallSuccessRate = await player.readOverallSuccess();
            let result = "";
            overallSuccessRate.forEach(obj => result = obj.overallSuccessRate);
            res.status(200).json({ success: true, overallResults: parseFloat(result.toFixed(2)), ranking: rankingList })
        } catch(err) {
        res.status(400).json({ success: false, error: err }) 
    }
    }
    // READ WINNER
    async readWinner(req,res){
        try {
            const maxObj = await player.getMaxSuccess()
            const maxNum = [];
            maxObj.forEach(obj => maxNum.push(obj.maxSuccessRate))
            const winner = await player.readWinnerLoser(maxNum.toString())
            res.status(200).json({ success: true, player: winner})
        } catch(err) {
        res.status(400).json({ success: false, error: err }) 
    }
    }
    // READ LOSER
    async readLoser(req,res){
        try {
            const minObj = await player.getMinSuccess()
            const minNum = [];
            console.log(minNum);
            minObj.forEach(obj => minNum.push(obj.minSuccessRate))
            const loser = await player.readWinnerLoser(minNum.toString())
            console.log(loser);
            if (loser.length > 0) {
                res.status(200).json({ success: true, player: loser})

            } else {
                res.status(400).json({ success: false, text: `It's a tie! Go check the ranking to see the results`})
            }
        } catch(err) {
        res.status(400).json({ success: false, error: err }) 
    }
    }    
}
module.exports = new RankingController;
