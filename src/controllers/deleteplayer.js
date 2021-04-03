const express= require('express');
const mongoose = require('mongoose');
const Player = require('../models/Player');
const sendResponse = require('../services/response');

//DELETING PLAYER BY ID
exports.deleteplayer=(req,res)=>{
    Player.findByIdAndDelete(
      req.params.id,
      (err,data)=>{ sendResponse(res, err, data)}
    )
  }
