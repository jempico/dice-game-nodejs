
Rest API that can Create, Read, Update, and Delete (CRUD) documents using MongoDB Atlas and Mongoose.

## Installation:
1. Install the program (type 'npm install' in your terminal).
     
## Run:
  

2. Run the program (type 'node app' in your terminal).


3. Test routes:

    - **POST /players**:
        adds a new player
    
    *Request Body for players with name*
    ```
    {
            "newData":{
                "name": "Laia",
                "email": "laia@gmail.com",
                "password": "uniquepassword"
            }
    }
    ```

    *Request Body for players without name*
    ```
    {
            "newData":{
                "email": "anonim@mail.com",
                "password": "uniquepassword"
            }
    }
    ```

    - **PUT /players**:
        updates player name 
    
    *Request Body for updating name*
    ```
    {
        "currentData": {
            "name": "currentName"
        },
        "newData":{
            "name": "newName"
        }
    }
    ```

    - **POST /players/:id/games**:
        adds a new game

    - **DELETE /players/:id/games**:
        removes games from player with requested ID

    - **GET /players/**:
        reads all players

    - **GET /players/:id**:
        reads player by id

    - **GET /players/ranking**:
        reads ranking and overall success rate

    - **GET /players/ranking/loser**:
        reads player with lowest success rate

     - **GET /players/ranking/winner**:
        reads player with highest success rate


## Authentication

**All routes except POST/player**:
    
*Authentication header using Bearer schema*
```
Authorization: Bearer <token> 
```

## Things I've learned
- [x] Encrypt user passwords with "bcrypt".
- [x]  Authenticate users with JSON web token.
- [x] Add security with JWT authentication middleware for all routes.
- [x]  Apply Mongoose 'static' methods vs. 'instance' methods