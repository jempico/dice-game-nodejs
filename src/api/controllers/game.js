const game = require('../../services/game');
const player = require('../../services/player')

class GameController {
    // ADD NEW GAME
    async addGame(req, res){
        try {
            const {id} = req.params;
            const newGame = await game.createGame();
            const gameId = await player.addGame(id, newGame)
            const gamesList = await player.read(id, 'games')
            let rounds = gamesList.games.length;
            let wins = await player.checkWins(gamesList.games);
            const successUpdated = await player.setSuccess(id, wins, rounds);
            res.status(200).json({
                success: true,
                text: `Game succesfully created and success rate and ranking updated!`})
        } catch(err) {
            res.status(400).json({ success: false, error: err })}
    }

    // READ ALL GAMES
    async readGames(req, res){
        try { 
            const {id} = req.params;
            const gamesList = await player.read(id, 'games');
            if (gamesList.games.length == 0) {
                res.status(400).json({
                    success: false,
                    data: `this user doesn't have any game record yet!` })
            } else if (gamesList.games.length > 0){
                    res.status(200).json({ success: true, data: gamesList.games })}
        } catch(err) {
            res.status(400).json({ success: false, error: err })}
    }

    //DELETE ALL GAMES

    async deleteGames(req, res){
        try {
            const {id} = req.params;
            const gamesList = await player.read(id, 'games')
            console.log(gamesList);
            if (gamesList.games.length > 0) {
                const removedGames = await player.removeGames(id)
                let rounds = 0;
                let wins =  0;
                const successUpdated = await player.setSuccess(id, wins, rounds);
                res.status(200).json({ success: true, data: `Games succesfully removed, success rate and ranking updated!` })
            } else if (gamesList.games.length == 0) {
                res.status(400).json({ success: false, data: `this user doesn't have any game record!`})  
            }
        } catch(err) {
            res.status(400).json({ success: false, error: err })}
    }

}


module.exports = new GameController;
