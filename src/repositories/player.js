const mongoose = require('mongoose');
const Player = require('../models/player')


class PlayerRepository {
    addPlayer(playerDTO, sendResponse){
        Player.create(playerDTO, (err,data) => { 
            sendResponse(err, data);
          })
    }
    updateName(query, newName, sendResponse){
        Player.findOneAndUpdate(
            query,
            {name: newName}, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
            {new:true},
            (err,data)=>{
                 sendResponse(err, data) 
            })
        }

    readPlayers(sendResponse){
        Player.find(({}),(err,data)=>{
            sendResponse(err, data);
          })
    }
    readPlayer(id, sendResponse){
        Player.findById(id,(err,data)=>{
            sendResponse(err, data);
          })
    }
    addGame(id, newGame, sendResponse){
        Player.findByIdAndUpdate(
            id,
            { $push: {games: newGame}}, 
            { new:true },
            (err,data)=>{ 
                sendResponse(err, data);
        })
    }
    updateRounds(id, sendResponse){
        Player.findByIdAndUpdate(
            id,
            { $inc: { rounds: 1 } }, 
            {new:true},
            (err,data)=>{
                 sendResponse(err, data) 
            })
        }
    updateWins(id, sendResponse){
        Player.findByIdAndUpdate(
            id,
            { $inc: { wins: 1 } }, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
            {new:true},
            (err,data)=>{
                 sendResponse(err, data) 
            })
        }
    updateSuccess(id, successDTO, sendResponse){
        Player.findByIdAndUpdate(
            id,
            {successRate: successDTO}, 
            { new:true },
            (err,data) => { 
                sendResponse(err, data);
            })
        }
    readGames = (id, query, sendResponse) => {
        Player.findById(id, query, (err,data)=>{
            sendResponse(err, data);
            })
        }
    removeGames = (id, sendResponse) => {
        Player.findByIdAndUpdate(
            id, 
            { games:[] }, 
            { new:true },
            (err,data)=>{ 
                 sendResponse(err, data); 
            })
        }
}



module.exports = new PlayerRepository;

/*
const addGame = (id, newGame, sendResponse) => {
    Player.findByIdAndUpdate(
        id,
        { $push: {games: newGame}}, 
        { new:true },
        (err,data)=>{ 
            sendResponse(err, data);
    })
}


const updateSuccess = (id, sendResponse) => {
    Player.findByIdAndUpdate(
        id,
        {successRate: 100}, 
        { new:true },
        (err,data) => { 
            sendResponse(err, data);
        })
    }


const readGames = (id, query, sendResponse) => {
    Player.findById(id, query, (err,data)=>{
        sendResponse(err, data);
      })
}

const removeGames = (id, sendResponse) => {
    Player.findByIdAndUpdate(
        id, 
        { games:[] }, 
        { new:true },
        (err,data)=>{ 
            sendResponse(err, data); 
        })
}



module.exports = {addGame, updateSuccess, readGames, removeGames}*/