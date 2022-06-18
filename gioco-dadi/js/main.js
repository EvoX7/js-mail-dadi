// Gioco dei dadi (separatemente)
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.




// Defining variables for player and computer 

// Player:
const player = ("Player");

// Computer:
const computer = ("Computer");

// Defining how many roll sides 
let diceRoll;

// Defining how many chanches player and computer have with each sides 
let randomNumberP = Math.ceil(Math.random() * 6);
let randomNumberC = Math.ceil(Math.random() * 6);


// Rolling the dice using js loop 
let buttonClick = document.getElementById("roll-button");



buttonClick.addEventListener("click", function(){

for (let diceRoll = 1; diceRoll <= 6; diceRoll++) {

    // If numbers are equal, there is a draw
    if (randomNumberP === randomNumberC) {
        document.querySelector("h2").innerHTML = "It's a Draw!";
        console.log("It's a Draw!");
    }

    // If computer's result is minor to player's, there is a win for the player 
    else if (randomNumberC < randomNumberP) {
        document.querySelector("h2").innerHTML = (player + " WINS!");
        document.querySelector("h4").innerHTML = (randomNumberP);
        console.log(player + " " + "WINS!");

    }

    // If player's result is minor to computer's, there is a win for the computer
    else {
        document.querySelector("h2").innerHTML = (computer + " WINS!");
        document.querySelector("h4").innerHTML =  (randomNumberC);
        console.log(computer + " " + "WINS!");
    }

}
})

console.log(computer + " " + randomNumberC);
console.log(player + " " + randomNumberP);














