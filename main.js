"use strict"

let choices = [`Rock`, `Paper`, `Scissors`];
let humanScore = 0, computerScore = 0;
let humanChoice, computerChoice, computerRandom;
let round = 1;
let buttons = document.querySelectorAll("button");

//Returns the computer choice.
function getComputerChoice() {
    computerRandom = Math.floor(Math.random() * 3)
    computerChoice = choices[computerRandom];

    document.querySelector(".computer").textContent = "Computer choice is " + computerChoice;

    return computerRandom;
}

//Get human choice, call the callback(), remove event listeners and add event listeners.
function getHumanChoice(callback) {

    // Add the EventListeners to the buttons.
    buttons.forEach(function(btn){
        btn.addEventListener('click', clickChoices);
    });

    function clickChoices(e){
        let butTon = e.currentTarget;
        if (butTon.id === "Rock") {
            document.querySelector(".human").textContent = "Human choice is Rock.";
            humanChoice = 0;
        } else if (butTon.id === "Paper") {
            document.querySelector(".human").textContent = "Human choice is Paper.";
            humanChoice = 1;
        } else {
            document.querySelector(".human").textContent = "Human choice is Scissors.";
            humanChoice = 2;
        }

        // Remove the EventListeners from the buttons.
        buttons.forEach(function(b){
            b.removeEventListener('click', clickChoices);
        });

        callback(humanChoice);
    }
}

function playGame(round){

    //Checks when the game is over.
    if(computerScore == 5 || humanScore == 5){
        if (computerScore > humanScore) {
            document.querySelector(".game-winner").textContent = "Computer wins the game!";
        } else if (humanScore > computerScore) {
            document.querySelector(".game-winner").textContent = "Human wins the game!";
        }
        return;
    }

    // Display the current round.
    document.querySelector(".round").textContent = `Round: ${round}`;

    // Callback function is passed as an argument inside getHumanChoice().
    getHumanChoice(function(player){
        startRound(player);
        round++;
        playGame(round);
    });
}

//Plays and checks who wins the round.
function startRound(player) {
    let computer = getComputerChoice();
    if (player - computer == 1 || player - computer == -2) {
        document.querySelector(".round-winner").textContent = "Player wins this round.";
        humanScore++;
    } else if (player - computer == 0) {
        document.querySelector(".round-winner").textContent = "We have a draw.";
    } else {
        document.querySelector(".round-winner").textContent = "Computer wins this round.";
        computerScore++;
    }

    //Shows the current score.
    document.querySelector(".score").textContent = "The score is: Human " + humanScore + " - Computer  " + computerScore;
}

//The game starts from here.
playGame(round);