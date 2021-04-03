const express = require('express');
const router = express.Router();
const newplayer = require('../controllers/newplayer');
const player = require('../controllers/singleplayer');
const updateplayer = require('../controllers/updateplayer');
const deleteplayer = require('../controllers/deleteplayer');
const addgame = require('../controllers/addgame');
router
    .route("/")
    .post(newplayer.newplayer)

router
    .route('/:id')
  // READ
  .get(player.player)
  // UPDATE
  .put(updateplayer.updateplayer)
  .delete(deleteplayer.deleteplayer)

router
    .route('/:id/games')
    //ADD GAME
    .post(addgame.addgame)

module.exports = router;