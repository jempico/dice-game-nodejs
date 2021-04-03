const express= require('express');
const mongoose = require('mongoose');
const Player = require('../models/Player');
const sendResponse = require('../services/response')

//ADDING GAME TO A PLAYER BY ID
exports.addgame=(req, res) =>{
    Player.findByIdAndUpdate(
    req.params.id,
    { $push: {games: req.body.newData.games}}, 
    {
        new:true
    },
    (err,data)=>{ sendResponse(res, err, data) }
    )
}
