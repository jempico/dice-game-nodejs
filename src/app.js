//******** THINGS TODO ********/
//-estructura
//- Postman Tests
//- Push games dinamically
//-eslint

const express= require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app= express();

// Configuring PORT
require('dotenv').config() 
const PORT = process.env.PORT || 3000

// Conntecting to Mongo local db
mongoose.connect('mongodb://localhost/playerData', () => console.log('Connected to DB'))

app.use(bodyParser.json());
app.get('/', (req,res) => {
  res.json({
    success: true,
    message: 'You made it!'
  })
})
app.use('/players', require('./controllers/players'));

app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})

/*
app.post('/players/:id/games', (req, res) =>{
  Player.findByIdAndUpdate(
    req.params.id,
    { $push: {games: req.body.newData.games}}, 
    {
      new:true
    },
    (err,data)=>{ sendResponse(res, err, data) }
  )
})

app.route('/players/:id')
// READ
.get((req,res)=>{
  Player.findById(req.params.id,(err,data)=>{
    sendResponse(res, err, data);
  })
})
// UPDATE
.put((req,res)=>{
  Player.findByIdAndUpdate(
    req.params.id,
    {...req.body.newData}, //> Using spread operator so as to be able to update each record passing only the body parameter to update. Otherwise, if the values were not included, they would be set to "null". 
    {
      new:true
    },
    (err,data)=>{ sendResponse(res, err, data) }
  )
})
// DELETE
.delete((req,res)=>{
  Player.findByIdAndDelete(
    req.params.id,
    (err,data)=>{ sendResponse(res, err, data)}
  )
})

*/