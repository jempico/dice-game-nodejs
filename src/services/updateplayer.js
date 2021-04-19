const express= require('express');
const mongoose = require('mongoose');
const Player = require('../models/Player');
const sendResponse = require('../services/response')

// CREATE NEW PLAYER
exports.updateplayer = (req,res)=>{
    Player.findByIdAndUpdate(
      req.params.id,
      {...req.body.newData}, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
      {
        new:true
      },
      (err,data)=>{ sendResponse(res, err, data) }
    )
  }

