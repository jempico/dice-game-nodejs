const Player = require('../models/player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const sendResponse = require('./response')

const mongoose = require('mongoose');

// CREATE NEW PLAYER
const addPlayer = (req,res) => {
  const playerDTO = ({name , email ,password} = req.body.newData)
  //Hashing password
  playerDTO.password = bcrypt.hashSync(req.body.newData.password, 10);
  //Checking if name is null or empty
  if (playerDTO.name == null || playerDTO.name == '') {
  playerDTO.name = uniqid('ANONIM-');
  }
  //Creating an instance of Player through Player model
    let newPlayer = Player.create(playerDTO, (err,data) => { 
        sendResponse(res, err, data);
      })
    }

const updateName = (req,res)=>{
  const query = { name: req.body.currentData.name };
    Player.findOneAndUpdate(
      query,
      {name: req.body.newData.name}, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
      {
        new:true
      },
      (err,data)=>{ sendResponse(res, err, data) }
    )
  }

const readPlayers = (req,res) =>{
    Player.find(({}),(err,data)=>{
      sendResponse(res, err, data);
    })
  }

const readPlayer = (req,res)=>{
    Player.findById(req.params.id,(err,data)=>{
      sendResponse(res, err, data);
    })
  }

module.exports = { addPlayer, updateName, readPlayers, readPlayer }

