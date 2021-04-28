const player = require('../../services/player');

class playerController {
    //CREATE PLAYER
  async addPlayer(req, res){
    try {      
      const playerDTO = {
        name: req.body.newData.name,
        email: req.body.newData.email,
        password: req.body.newData.password
      }
      const playerCreated = await player.addPlayer(playerDTO)
      const tokenCreated = await player.createToken(playerCreated);
      res.status(200).json({
        success: true,
        text: `user with ID ${playerCreated._id} created and added to ranking!`,
        token: tokenCreated})
    } catch(err) {
      res.status(400).json({ success: false, error: err })}
  }

    // MODIFY PLAYER'S NAME
  async updateName(req,res){
    try {
      const query = { name: req.body.currentData.name };
      const newName = req.body.newData.name
      const nameUpdated = await player.updateName(query, newName)
      if (nameUpdated) {
        res.status(200).json({  success: true, text: `username of User with id ${nameUpdated._id} successfully modified!` })
      } else {
        res.status(400).json({ success: false, text: `Check fields, name couldn't be modified` })}
    } catch(err) {
        res.status(400).json({ success: false, error: err }) }
    }

    // READ ALL PLAYERS

  async readPlayers(req,res){
    try {
      const playersFront = await player.readPlayers('_id name successRate games')
      if (playersFront.length == 0) {
        res.status(400).json({ success: false, text: 'There is no player registered yet!' }) 
      } else if (playersFront.length > 0) {     
        res.status(200).json({ success: true, players: playersFront })}
  } catch(err) {
      res.status(400).json({ success: false, error: err }) }
  }
    // READ ONE PLAYER

  async readPlayer(req,res){
    try {
      const {id} = req.params;
      const playerData = await player.read(id, '_id successRate name email password games date');
      res.status(200).json({ success: true, data: playerData })
    } catch(err) {
        res.status(400).json({ success: false, error: err})}
  }
    // DELETE ALL PLAYERS

  async deleteAll(req,res){
    try{
      const playersDeleted = await player.deleteAll()
        res.status(200).json({ success: true, data: playersDeleted })
    } catch(err) {
        res.status(400).json({ success: false, error: err})}
  }
}

module.exports = new playerController;

