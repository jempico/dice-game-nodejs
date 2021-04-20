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
    Player.findByIdAndUpdate(
        req.params.id,
        { $push: {games: newGame}}, 
        {
            new:true
        },
        (err,data)=>{ sendResponse(res, err, data) }
        )
    }

const readGames = (req, res) => {
    Player.findById(req.params.id,'games', (err,data)=>{
        sendResponse(res, err, data);
      })
}

const removeGames = (req, res) => {
    Player.findByIdAndUpdate(
        req.params.id, 
        { games:[] }, 
        {
            new:true
        },
        (err,data)=>{ sendResponse(res, err, data); 
        })
    }

module.exports = {addGame, readGames, removeGames}