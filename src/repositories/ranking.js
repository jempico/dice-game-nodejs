const mongoose = require('mongoose');
const Ranking = require('../models/ranking')


class RankingRepository {
    addPlayer(playerDTO, sendResponse){
        Ranking.create({_id: playerDTO._id}, (err,data) => { 
            sendResponse(err, data);
          })
    }/*
    updateRanking(query, newName, sendResponse){
        Player.findOneAndUpdate(
            query,
            {name: newName}, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
            {new:true},
            (err,data)=>{
                 sendResponse(err, data) 
            })
        }*/
    readPlayers(sendResponse){
        Ranking.find(({}),(err,data)=>{
            sendResponse(err, data);
          })
    }/*
    getWinner(id, sendResponse){
        Player.findById(id,(err,data)=>{
            sendResponse(err, data);
          })
    }
*/
}


module.exports = new RankingRepository;

