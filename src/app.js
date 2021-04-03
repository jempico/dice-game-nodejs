//******** THINGS TODO ********/
//-1 Cambiar callback por async/await.
    //Ref: https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd
//-2 estructura
//-3 Postman Tests
//-4 eslint

const express= require('express');
const mongoose = require('mongoose');
const bodyParser= require('body-parser');
const app= express();

//Import Routes
const playersRoute = require('./routes/players')

// Configuring PORT
require('dotenv').config() 
const PORT = process.env.PORT || 3000

// Conntecting to Mongo local db
mongoose.connect('mongodb://localhost/diceGame', () => console.log('Connected to DB'))

app.use(bodyParser.json());
app.use('/players', playersRoute);

app.listen(PORT, ()=>{
	console.log(`server is listening on port:${PORT}`)
})