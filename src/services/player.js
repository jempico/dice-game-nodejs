const Player = require('../models/player');
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const response = require('./response')
const mongoose = require('mongoose');

// CREATE NEW PLAYER
exports.addPlayer = (req,res) => {
  //Hashing password
  let hash = bcrypt.hashSync(req.body.newData.password, 10);
  //Checking if name is null or empty
  // if (name == null || name == '') {
  // let name = uniqid('ANONIM-');
  // } 
  Player.create(
    { 
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:hash,
    }, 
    (err,data)=>{ 
      console.log('Im here')
      response(res, err, data);
    }
    )
    //>To compare passwords:
    //console.log(bcrypt.compareSync(req.body.newData.password, hash));
  }
