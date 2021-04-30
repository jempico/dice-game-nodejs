const mongoose = require('mongoose');
const Player = require('../models/player')
const bcrypt = require('bcrypt');
const uniqid = require('uniqid');
const jwt = require('jsonwebtoken');

class PlayerService {
    async checkIfExists(nameDTO){
        let result = await Player.find({name: {$eq: nameDTO}})
        return result;
    }
      async addPlayer(name, email, password){
        let newPlayer = new Player({
            name: Player.setAnonimName(name),
            email,
            password: Player.encryptPassword(password)
        })
        await newPlayer.save()
        return newPlayer;
    }
    async updateName(query, newName){
        let result = await Player.findOneAndUpdate(query, {name: newName})
        return result;
    }
    async read(id, query){
        let result = await Player.findById(id, query)
        return result;
        }
    async readPlayers(query){
        let result = await Player.find({}, query)
        return result;
    }
    async readPlayersRanking(){
        let result = await Player.find({}, '_id name successRate').sort({ successRate : 'desc'})
        return result;
    }
    async addGame(id, newGame){
        let result = await Player.findByIdAndUpdate(
            id,
            { $push: {games: newGame}}, 
            { new:true })
        return result; 
    }
    async setSuccess(id, wins, rounds){
        let successDTO = wins/rounds
        let success;
        if (isNaN(successDTO)) {
            success = 0;
        } else{
            success = successDTO.toFixed(2);
        }
        let result = await Player.findByIdAndUpdate(
            id,
            {successRate: success}, 
            { new:true })
        return result;
        }
    
    checkWins(gamesList){
            let wins = 0;
            gamesList.forEach(obj => { 
                if (obj.result == 'WIN') { wins++ }}) 
            return wins;
        }
        
    async countWins(array){
        let games = array;
        let result = await Player.games.aggregate(
            [
              {
                $match: {
                  result: {
                    $eq: 'WIN'
                  }
                }
              },
              {
                $count: "wins"
              }
            ]
          )
        return result;
    }     

    async removeGames(id) {
        let result = await Player.findByIdAndUpdate(id, { games:[] }, { new:true })
        return result;    
    }
    async readOverallSuccess(){
        let result = await Player.aggregate([
            {
              $group : {
                 _id : null,
                 overallSuccessRate: { $avg: "$successRate" },
                 totalPlayers: { $sum: 1 }
              }
            }
           ])
        return result;
    }
    async getMaxSuccess(){
        let result = await Player.aggregate([
            {
              $group : {
                 _id : null,
                 maxSuccessRate: { $max: "$successRate" },
              }
            }
           ])
        return result;
    }
    async getMinSuccess(){
        let result = await Player.aggregate([
            {
              $group : {
                 _id : null,
                 minSuccessRate: { $min: "$successRate" },
              }
            }
           ])
        return result;
    }
    async readWinnerLoser(query){
        let result = await Player.find({ successRate: query }, '_id successRate')
        return result;
    }   
    async deleteAll() {
        let result = await Player.remove({});
        return result;    
    }
    async createToken(obj){
        let result = jwt.sign({id: obj._id}, process.env.SECRET_TOKEN_ACCESS)
        return result;
    }
    
}



module.exports = new PlayerService;
