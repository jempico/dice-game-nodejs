const express= require('express');
const mongoose = require('mongoose');
const Player = require('../models/Player');
const sendResponse = require('../services/response')

//READ PLAYER BY ID
exports.player = (req,res)=>{
    Player.findById(req.params.id,(err,data)=>{
      sendResponse(res, err, data);
    })
  }

