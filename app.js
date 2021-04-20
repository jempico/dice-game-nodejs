//******** THINGS TODO ********/
//-1 Cambiar callback por async/await.
    //Ref: https://www.youtube.com/watch?v=vjf774RKrLc&ab_channel=DevEd

const express= require('express');
const app= express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Config
app.use(express.json());
dotenv.config();

// Routes
const playersRoute = require('./src/api/routes/players')

// Middleware
app.use('/players', playersRoute);


// Conntecting to Mongo Atlas db
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@rest-api.wfrd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, () => console.log('Connected to DB'))

// Starting the server
app.listen(process.env.PORT, ()=>{
	console.log(`server is listening on port:${process.env.PORT}`)
})