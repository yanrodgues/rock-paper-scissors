let playerSelection = 0;

let computerSelection = 0;

let playerScore = 0;

let computerScore = 0;

let seedComputer = 0;

let rock = 1

let paper = 2

let scissors = 3

// function called getComputerChoice
function getComputerChoice() {
    seedComputer = Math.floor(Math.random() * 100)
    if (seedComputer <= 33){
        computerSelection = rock
    }else if (seedComputer <= 66){
        computerSelection = paper
    }else if (seedComputer >= 66){
        computerSelection = scissors
    }
}

getComputerChoice()

console.log(computerSelection);
/// Get random choice between rock paper scissors

// function called playRound
// takes playerSelection and computerSelection, and returns a string with who won

// playerSellection must accept inputs case insensitively
// takes input from player, and converts to lowercase

// create a game() function and put 5 playRound functions inside
