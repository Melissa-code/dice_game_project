const diceSide = document.getElementById("diceSide");

let diceNumbers = [1, 2, 3, 4, 5, 6]; 
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

    constructor(diceRolling, diceNumbers) {
        this.diceRolling = diceRolling; 
        this.diceNumbers = diceNumbers;
    }

    /***** get image of the dice ***** */

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

    /***** print the result of the dice rolling ***** */

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


    /***** roll the dice ***** */

    rollThedice(diceResult) {
        diceResult = this.dice.diceNumbers;
        diceRolling = diceResult[Math.floor(Math.random() * diceResult.length)];
        console.log(diceRolling); 

        this.dice.printDice();

        return diceRolling;
    }
}




/* **************************************************************** */
/* code du jeu  */
/* **************************************************************** */


/* ******************* Instances de classes ********************** */

let dice = new Dice(diceRolling, diceNumbers); 
let player1 = new Player('Player 1', dice,  0, 0);
let player2 = new Player('Player 2', dice, 0, 0); 
let game = new Game([player1, player2]); 

player1.rollThedice(diceNumbers);