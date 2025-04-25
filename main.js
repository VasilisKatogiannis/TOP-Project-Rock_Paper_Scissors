"use strict"

let choices = [`Rock`, `Paper`, `Scissors`];
let humanScore = 0, computerScore = 0;
let humanChoice, computerChoice, computerRandom;

function getComputerChoice() {
    computerRandom = Math.floor(Math.random() * 3)
    computerChoice = choices[computerRandom];
    console.log("Computer choice is " + computerChoice + " " + computerRandom);
    return computerRandom;
}

function getHumanChoice() {
    humanChoice = prompt("Choose one of the following: Rock - Paper - Scissors");
    if (humanChoice === "Rock") {
        console.log("Human choice is Rock");
        return 0;
    } else if (humanChoice === "Paper") {
        console.log("Human choice is Paper");
        return 1;
    } else {
        console.log("Human choice is Scissors");
        return 2;
    }
}

function playRound() {
    let player = getHumanChoice();
    let computer = getComputerChoice();
    if (player - computer == 1 || player - computer == -2) {
        console.log("Player wins this round");
        humanScore++;
    } else if (player - computer == 0) {
        console.log("We have a draw")
    } else {
        console.log("Computer wins this round");
        computerScore++;
    }
}

function playGame() {
    for (let round = 1; round < 6; round++) {
        playRound();
        console.log("The score is: Human " + humanScore + " and Computer " + computerScore);
    }
    if (computerScore > humanScore) {
        console.log("Computer wins the game with: " + humanScore + " - " + computerScore);
    } else if (humanScore > computerScore) {
        console.log("Human wins the game with: " + humanScore + " - " + computerScore);
    } else {
        console.log("The game ended in a draw with: " + humanScore + " - " + computerScore);
    }
}

playGame();