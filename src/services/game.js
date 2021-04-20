const mongoose = require('mongoose');
const game = require('../models/game');
const player = require('../models/player');
const ranking = require('../models/ranking')
const sendResponse = require('../services/response')

//ADDING GAME TO A PLAYER BY ID
const addGame = (req, res) =>{
    Player.findByIdAndUpdate(
    req.params.id,
    { $push: {games: req.body.newData.games}}, 
    {
        new:true
    },
    (err,data)=>{ sendResponse(res, err, data) }
    )
}

module.exports = {addGame}