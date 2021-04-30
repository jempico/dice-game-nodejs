const express = require('express');
const router = express.Router();
const player = require('../controllers/player');
const game = require('../controllers/game');
const ranking = require('../controllers/ranking');
const authJwt = require('../../middlewares/authJwt')
router
    .route("/")
    .get(authJwt.verifyToken, player.readPlayers)
    .post(player.addPlayer)
    .put(authJwt.verifyToken, player.updateName)

router    
    .route("/ranking")
    .get(authJwt.verifyToken, ranking.readPlayers)

router    
    .route("/ranking/loser")
    .get(authJwt.verifyToken, ranking.readLoser)

router    
    .route("/ranking/winner")
    .get(authJwt.verifyToken, ranking.readWinner)

router
    .route('/:id')
    .get(authJwt.verifyToken, player.readPlayer)

router
    .route("/:id/games")
    .post(authJwt.verifyToken, game.addGame)
    .get(authJwt.verifyToken, game.readGames)
    .delete(authJwt.verifyToken, game.deleteGames)

router
    .route('/delete')
    .delete(authJwt.verifyToken, player.deleteAll)

module.exports = router;