const mongoose = require('mongoose');
const gameFactory = require('../models/game')

class GameService {
    async createGame(){
        let result = gameFactory.create()
        result.runGame();
        result.setScore();
        return result;
    }  
}


module.exports = new GameService;