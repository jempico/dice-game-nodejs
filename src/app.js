//******** THINGS TODO ********/
//-estructura
//- Postman Tests
//- Push games dinamically
//-eslint

const express= require('express');
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const app= express();
const Player=require('./models/Player');
const bcrypt = require('bcrypt');

// Configuring PORT

require('dotenv').config() 

const PORT = process.env.PORT || 3000

// Conntecting to Mongo local db
mongoose.connect('mongodb://localhost/playerData')

app.use(bodyParser.json());

app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})

// CREATE: Go to Postman to see Post request
app.post('/players', (req,res)=>{
  Player.remove({});
  let hash = bcrypt.hashSync(req.body.newData.password, 10);
  Player.create(
    { 
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:hash,
    }, 
    (err,data)=>{ 
      sendResponse(res, err, data);
    }
    )
    //>To compare passwords:
    //console.log(bcrypt.compareSync(req.body.newData.password, hash));
  })

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

//Managing Response Callback

function sendResponse(res, err, data){
  if (err){
    res.json({
      success: false,
      message: err
    })
  } else if (!data){
    res.json({
      success: false,
      message: "Not Found"
    })
  } else {
    res.json({success: true,data: data
    })
  }
}