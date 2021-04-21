const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const sendResponse = require('./response');
const player = require('../repositories/player')

class PlayerService {
  addPlayer(req, res){
    const playerDTO = {
      name: req.body.newData.name,
      email: req.body.newData.email
    }
    //Hashing password
    playerDTO.password = bcrypt.hashSync(req.body.newData.password, 10);
    //Checking if name is null or empty
    if (playerDTO.name == null || playerDTO.name == '') {
    playerDTO.name = uniqid('ANONIM-');
    }
    //Creating an instance of Player and saving it into the DB
    player.addPlayer(playerDTO, (err, data) => {
        sendResponse(res, err, data)}
    )
  }

  updateName(req,res){
    const query = { name: req.body.currentData.name };
    const newName = req.body.newData.name
      player.updateName(query, newName, (err,data) => {
        sendResponse(res, err, data)
      })
    }

  readPlayers(req,res){
    player.readPlayers((err, data) => {
      sendResponse(res, err, data)
    })
  }

  readPlayer = (req,res)=>{
    const {id} = req.params
    player.readPlayer(id, (err, data) => {
      sendResponse(res, err, data)
    })
  }
}

module.exports = new PlayerService;



/*
// CREATE NEW PLAYER
const addPlayer = (req,res) => {
  const playerDTO = ({name , email ,password} = req.body.newData)
  //Hashing password
  playerDTO.password = bcrypt.hashSync(req.body.newData.password, 10);
  //Checking if name is null or empty
  if (playerDTO.name == null || playerDTO.name == '') {
  playerDTO.name = uniqid('ANONIM-');
  }
  //Creating an instance of Player and saving it into the DB
  player.addPlayer(playerDTO, (err, data) => {
      sendResponse(res, err, data)}
  )
}


// UPDATE PLAYER NAME
const updateName = (req,res)=>{
  const query = { name: req.body.currentData.name };
  const newName = req.body.newData.name
    player.updateName(query, newName, (err,data) => {
      sendResponse(res, err, data)
    })
  }

// READ PLAYERS
const readPlayers = (req,res) =>{
  player.readPlayers((err, data) => {
    sendResponse(res, err, data)
  })
}

// READ ONE PLAYER
const readPlayer = (req,res)=>{
  const {id} = req.params
  player.readPlayer(id, (err, data) => {
    sendResponse(res, err, data)
  })
}

*/
