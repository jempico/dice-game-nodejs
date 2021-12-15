<div id="top"></div>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/jempico/dice-game-nodejs">
    <img src="src/images/mongodb.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">REST API for a Dice Game</h3>

  <p align="center">
    A REST API for a Dice Game built with NodeJS, MongoDB, Mongoose, and JWT.
    <br />
  </p>

</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#main-features">Main Features</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#authentication">Authentication</a></li>
    <li><a href="#things-ive-learned">Things I've Learned</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

As part of my back-end with <b>NodeJS</b> learning journey, I've built a REST API that supports a Dice Game with <a href="https://expressjs.com/">Express</a>, <a href="https://jwt.io/introduction">JWT</a> and <a href="https://www.mongodb.com/">MongoDB</a>. Restful API best practices are applied, as following this <a href="https://abdulrwahab.medium.com/api-architecture-best-practices-for-designing-rest-apis-bf907025f5f">article</a> on API Architecture.

A second version of the project using OOP (JavasScript Classes) and MySQL can be found here: <a href="https://github.com/jempico/dice-game-nodejs-mysql">Rest API for Dice Game (MySQL)</a>.

<img align="center" src="https://user-images.githubusercontent.com/25463174/146230752-caa2de57-fdd5-4eac-9573-cf31e8978d7d.gif">


## Main Features

The basic premise of the game is this: each user roll 2 dices, and if the result is 7, the user scores a point. The user that scores more points, wins! Easy peasy! 


Here are the main features of the app:
* <b>Login</b>: to play a user must be registered in the app either with a non-repeated name or as 'Anonymous'. Once created, it will be given a JWT Token. 
* <b>Results</b>: a player can see his results, including the result of each roll and his own success rate. A player can start over by removing all his rolls.
* <b>Overall Ranking</b>: the app shows the overall ranking, including all players data, overall success rate, and each player's success rate.
* <b>Authorization</b>: JWT is implemented as a middleware in order to allow the user to access routes, services, and resources that are permitted with the give token.


<p align="right">(<a href="#top">back to top</a>)</p>



## Built With

This is the tech stack I've worked with:

* [Node.js](https://nodejs.dev/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [JWT](https://jwt.io/introduction)
* [Postman](https://www.postman.com/) 
* [Bcrypt](https://www.npmjs.com/package/bcrypt)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Installation

To get a local copy up and running follow these simple steps.

1. Clone the repo
   ```sh
   git clone https://github.com/jempico/dice-game-nodejs.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Add environment variables: edit or create and `.env` file in the root directory with the following data: 
   ```
    PORT=3000
    DB_USER = tester
    DB_PASSWORD = AWnHq3IDZaeDL8DP
    SECRET_TOKEN_ACCESS = 3d9683dc562b1e28fafec01bf1b4438da8faf35b205adf7049221854076040d879882ebd9c900f71dbf18352d08ae363c5f0f3eacabe40892f0777e9f27f0e93
   ```
4. Run the app
   ```sh
    node app
   ```


<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Endpoints  -->
## Endpoints

Some examples of how the request body should look like in order to make a request:

1. <b>POST/players</b>: adds a new player
   ``` {
            "newData":{
                "name": "Laia",
                "email": "laia@gmail.com",
                "password": "uniquepassword"
            }
    }
   ```

2. <b>PUT/players</b>:  updates player name 
   ```     {
        "currentData": {
            "name": "currentName"
        },
        "newData":{
            "name": "newName"
        }
    }
   ```
3. <b>POST/players/:id/games</b>:  adds a new game
4. <b>DELETE/players/:id/games</b>:  removes games from player with requested ID
5. <b>GET/players/</b>: reads all players
6. <b>GET/players/:id</b>: reads player by id
7. <b>GET/players/ranking</b>: reads ranking and overall success rate
8. <b>GET/players/ranking/loser</b>: reads player with lowest success rate
9. <b>GET/players/ranking/winner</b>: reads player with highest success rate

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- Authentication  -->
## Authentication

To test all routes (except POST/player) use an authentication header using Bearer schema

<b>All routes except POST/player</b>:
```
Authorization: Bearer <token> 
```


## Things I've learned

- [x] API Architecture best practices
- [x] Set up a Cloud-Hosted Database with MondoDB Atlas
- [x] Authenticate users with JSON web token.
- [x] Get confident with Async/Await.
- [x] Encrypt user passwords with "bcrypt".
- [x] Use Postman to test all routes.
- [x] Apply Mongoose 'static' methods vs. 'instance' methods.


<p align="right">(<a href="#top">back to top</a>)</p>




<!-- CONTACT -->
## Contact

Jemimah Pico - [Portfolio](https://jempico.com) - [Linkedin](http://linkedin.com/in/jempico) - jpfilarca@gmail.com 

Project Link: [https://github.com/jempico/dice-game-nodejs](https://github.com/jempico/dice-game-nodejs)
