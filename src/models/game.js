const randomizer = require('../helpers/randomizer')

class Game {
  constructor() {
    this.dice1 = '';
    this.dice2 = '';
    this.score = 0;
    this.result = '';
  }
  runGame(){
    this.dice1 = randomizer();
    this.dice2 = randomizer();
 }
 setScore(){
    let sumNum = this.dice1 + this.dice2;
    if (sumNum == 7) {
       this.score = 1;
       this.result= 'WIN'
    } else if (sumNum !== 7) {
       this.score = 0;  
       this.result= 'LOST'
    } else {
       return `Something went wrong`;
    }
 }
}

const gameFactory = () => { return new Game() };

module.exports = gameFactory; 