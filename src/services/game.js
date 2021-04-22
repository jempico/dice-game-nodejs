const gameFactory = require('../models/game');
const sendResponse = require('../services/response')
const player = require('../repositories/player')

class GameService {
    addGame(req, res){
        const {id} = req.params;

        //Creating an instance of Game 
        const newGame = gameFactory()
        newGame.runGame()
        newGame.setScore();
    
        player.addGame(id, newGame, (err, data) => {
            if (err) {
                sendResponse(res, err)
            } else {
                player.updateRounds(id, (err, data) => {
                    if (err) {
                        sendResponse(res, err) 
                    } else if (newGame.result == 'WIN') {
                            player.updateWins(id, (err, data) => {
                                if (err) sendResponse(res, err)
                                setSuccessRate(res, data);
                            })
                        } 
                    else {  
                        setSuccessRate(res, data)
                    }
                })
            }
    })

        function setSuccessRate(res, data) {
            let successDTO = data.wins/data.rounds
            player.updateSuccess(id, successDTO, (err,data)=> {
                sendResponse(res, err, data)
            })
        }

    }
    readGames(req, res){
        const {id} = req.params;
        player.readGames(id, 'games', (err, data) => {
            sendResponse(res, err, data);
        })
    }
    removeGames(req, res){
        const {id} = req.params;
        player.removeGames(id, (err, data) => {
            sendResponse(res, err, data);
        })
    }
}

module.exports = new GameService;




/*
//ADDING GAME TO A PLAYER BY ID
const addGame = (req, res) =>{
    const {id} = req.params;

    //Creating an instance of Game 
    const newGame = gameFactory()
    newGame.runGame()
    newGame.setScore();

    //Pushing game to Players collection and updating player SuccessRate
    player.addGame(id, newGame, (err, data) => {
        if (err){
            sendResponse(res, err)
         } else {
            player.updateSuccess(data, (err, data) => {
                sendResponse(res, err, data)
            })}
    })
    }


//READING GAMES
const readGames = (req, res) =>{
    const {id} = req.params;
    player.readGames(id, 'games', (err, data) => {
        sendResponse(res, err, data);
    })
}

//REMOVING GAMES

const removeGames = (req, res) => {
    const {id} = req.params;
    player.removeGames(id, (err, data) => {
        sendResponse(res, err, data);
    })
}

module.exports = {readGames, removeGames}
*/