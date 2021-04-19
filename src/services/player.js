const Player = require('../models/player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const response = require('./response')
const reject = require('./reject')

const mongoose = require('mongoose');

// CREATE NEW PLAYER
exports.addPlayer = (req,res) => {
  const playerDTO = ({name , email ,password} = req.body.newData)
  //Hashing password
  playerDTO.password = bcrypt.hashSync(req.body.newData.password, 10);
  //Checking if name is null or empty
  if (name == null || name == '') {
  playerDTO.name = uniqid('ANONIM-');
  }
  //Creating an instance of Player through Player model
    let newPlayer = Player.create(playerDTO)
    .then(data => {console.log(data); response(res, data)} )
    .catch((err) => {reject(err)})

}
