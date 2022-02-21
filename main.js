const diceSide = document.getElementById("diceSide");

const rollDiceLink = document.getElementById("rollDiceLink");

let diceNumbers = [1, 2, 3, 4, 5, 6]; 
let diceRolling = 0;

let roundScoreText;
let roundScore; 



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

    constructor(diceRolling, diceNumbers) {
        this.diceRolling = diceRolling; 
        this.diceNumbers = diceNumbers;
    }

    /***** Get image of the dice ***** */

    getImage(valeur) {
        let imgTxt = "img/"; 

        switch(valeur) {
            case 1: imgTxt += "dice1.svg";
            break;
            case 2: imgTxt += "dice2.svg";
            break;
            case 3: imgTxt += "dice3.svg";
            break;
            case 4: imgTxt += "dice4.svg";
            break;
            case 5: imgTxt += "dice5.svg";
            break;
            case 6: imgTxt += "dice6.svg";
            break;
            default: console.log("Error : no image.");
        }
        return imgTxt;
    }

    /***** Print the result of the dice rolling ***** */

    printDice() {
        var txt = ""; 
        txt += "<div>"; 
        txt += "<img src=' " + this.getImage(diceRolling) + " ' style='width: 6rem; height: 6rem; box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px; '>";
        txt += "</div>";
        diceSide.innerHTML = txt; 
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

    /* ***** Roll the dice ***** */

    rollTheDice(diceResult) {
        diceResult = this.dice.diceNumbers;
        diceRolling = diceResult[Math.floor(Math.random() * diceResult.length)];
        console.log(diceRolling); 
        this.dice.printDice();
        this.addRoundScore(diceRolling);
        return diceRolling;
    }

    /* ****** Add round score  ***** */

    addRoundScore(diceResult) {
        this.roundScore += diceResult;
        console.log('Total round : ' + this.roundScore);
        roundScore = this.roundScore; 
        roundScoreText = document.getElementById('roundScoreP1').innerHTML = this.roundScore;
        return this.roundScore;
    }

}




/* **************************************************************** */
/* code du jeu  */
/* **************************************************************** */


/* ********** Class instances ************ */

let dice = new Dice(diceRolling, diceNumbers); 
let player1 = new Player('Player 1', dice,  0, 0);
let player2 = new Player('Player 2', dice, 0, 0); 
let game = new Game([player1, player2]); 



/* *********** Events ************ */

rollDiceLink.addEventListener("click", () => {
    player1.rollTheDice(diceNumbers) }, false);