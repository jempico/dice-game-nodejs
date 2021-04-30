const mongoose = require('mongoose');
const Game = require('../models/game')

class GameService {
    async createGame(){
        try {
            let newGame = new Game({
                dice1 : Game.runGame(),
                dice2 : Game.runGame()
            });
            await newGame.save()
            let savedGame = await newGame.getScore();
            return savedGame;
        } catch(err) {
            return err;
        }
        
    }
}


module.exports = new GameService;