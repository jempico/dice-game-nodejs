const mongoose = require('mongoose');
const Game = require('../models/game')

class GameService {
    async createGame(){
        try {
            let newGame = new Game();
            newGame.save()
            newGame.runGame();
            newGame.getScore();
            console.log(newGame);
            return newGame;
        } catch(err) {
            return err;
        }
        
    }
}


module.exports = new GameService;