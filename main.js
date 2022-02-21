let numbersDice = [1, 2, 3, 4, 5, 6]; 
let diceRolling = 0;



/* *************************************************************** */
/* class Game  */
/* *************************************************************** */

class Game {

    constructor(players) {
        this.players = players;
    }
}


/* *************************************************************** */
/* class Dice  */
/* *************************************************************** */

class Dice {

    constructor(diceRolling, numbersDice) {
        this.diceRolling = diceRolling; 
        this.numbersDice = numbersDice;
    }
}


/* *************************************************************** */
/* class Player */
/* *************************************************************** */

class Player {

    constructor(name, dice, roundScore, globalScore) {
        this.name = name;
        this.dice = dice;
        this.roundScore = roundScore; 
        this.globalScore = globalScore;
    }

    
    /***********************  roll the dice ************************ */

    rollThedice(diceResult) {
        diceResult = this.dice.numbersDice;
        diceRolling = diceResult[Math.floor(Math.random() * diceResult.length)];
        console.log(diceRolling); 
        return diceRolling;
    }
}




/* **************************************************************** */
/* code du jeu  */
/* **************************************************************** */


/* ******************* Instances de classes ********************** */

let dice = new Dice(diceRolling, numbersDice); 
let player1 = new Player('Player 1', dice,  0, 0);
let player2 = new Player('Player 2', dice, 0, 0); 
let game = new Game([player1, player2]); 

player1.rollThedice(numbersDice);