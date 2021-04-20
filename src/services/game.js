const mongoose = require('mongoose');
const Player = require('../models/player')
const gameFactory = require('../models/game');
const sendResponse = require('../services/response')

//ADDING GAME TO A PLAYER BY ID
const addGame = (req, res) =>{
    const {id} = req.params;

    //Creating an instance of Game through gameFactory
    const newGame = gameFactory();

    //Running gsame
    newGame.runGame();
    //Setting up score
    newGame.setScore();
    //Pushing game to Players collection
    Player.findByIdAndUpdate(id, 
        { new:true },
        (err,data)=>{ sendResponse(res, err, data) }
    )
    
}

module.exports = {addGame}