const express = require('express');
const router = express.Router();
const player = require('../../services/player');
//const game = require('../../services/game')
//const ranking = require('../../services/ranking')

router
    .route("/")
    //.get(player.readPlayers)
    .get((req, res) => {
        res.send('Hi, router works ok!')
    })
    .post(player.addPlayer)
    //.put(player.editPlayer)
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

router
    .route('/:id')
    .get(player.readPlayer)

router

  .put(updateplayer.updateplayer)
  .delete(deleteplayer.deleteplayer)

router
    .route("/:id/games")
    .post(game.addGame)
    .get(game.readGames)
    .delete(game.deleteGames)
*/
module.exports = router;