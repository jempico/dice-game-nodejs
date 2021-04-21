const express = require('express');
const router = express.Router();
const player = require('../../services/player');
const game = require('../../services/game')
//const ranking = require('../../services/ranking')

router
    .route("/")
    .get(player.readPlayers)
    .post(player.addPlayer)
    .put(player.updateName)

/*
router    
    .route("/ranking")
    .get(ranking.readPlayers)

router    
    .route("/ranking/loser")
    .get(ranking.readLoser)

router    
    .route("/ranking/winner")
    .get(ranking.readWinner)
*/
router
    .route('/:id')
    .get(player.readPlayer)

router
    .route("/:id/games")
    .post(game.addGame)
    .get(game.readGames)
    .delete(game.removeGames)

module.exports = router;