// initialize variables for scores, selections and seed
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let seedComputer = 0;

//defines computer choice randomly
function getComputerChoice() {
  seedComputer = Math.floor(Math.random() * 100);
  if (seedComputer <= 33) {
    computerSelection = "rock";
  } else if (seedComputer <= 66) {
    computerSelection = "paper";
  } else if (seedComputer >= 66) {
    computerSelection = "scissors";
  }
}

// prompts the user for a selection
function getPlayerChoice() {
  playerSelection = prompt("Rock, Paper or Scissors?");
  playerSelection = playerSelection.toLowerCase();
  return playerSelection;
}

// function called playRound, and returns a string with who won
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    console.log("You lose!");
    computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    console.log("You win!");
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    console.log("You win!");
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    console.log("You win!");
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    console.log("You lose!");
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    console.log("You lose!");
    computerScore++;
  }
}

// create a game() function and put 5 playRound functions inside
function game() {

  //match 1
  getComputerChoice();

  //take player selection
  getPlayerChoice();

  //check who won
  playRound(playerSelection, computerSelection);

  //match 2
  getComputerChoice();

  //take player selection
  getPlayerChoice();

  //check who won
  playRound(playerSelection, computerSelection);

  //match 3
  getComputerChoice();

  //take player selection
  getPlayerChoice();

  //check who won
  playRound(playerSelection, computerSelection);

  //match 4
  getComputerChoice();

  //take player selection
  getPlayerChoice();

  //check who won
  playRound(playerSelection, computerSelection);

  //match 5
  getComputerChoice();

  //take player selection
  getPlayerChoice();

  //check who won
  playRound(playerSelection, computerSelection);

  if(playerScore > computerScore){
    console.log("You win the game");
  }else console.log("You lose the game")

}

game();
console.log(computerSelection)