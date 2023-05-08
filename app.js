// initialize variables for scores, selections and seed
let playerSelection = 0;
let computerSelection = 0;
let playerScore = 0;
let computerScore = 0;
let seedComputer = 0;
const divResultadoPartial = document.querySelector("#partialResults");

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
  divResultado = document.querySelector(".results");
  
  if ((playerScore < 5) && (computerScore  < 5)) {
    
  if (playerSelection === computerSelection) {
    divResultado.textContent = "Empate"
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    divResultado.textContent = "Você perdeu!"
    computerScore++;
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    divResultado.textContent = "Você venceu!"
    playerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    divResultado.textContent = "Você venceu!"
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    divResultado.textContent = "Você venceu!"
    playerScore++;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    divResultado.textContent = "Você perdeu!"
    computerScore++;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    divResultado.textContent = "Você perdeu!"
    computerScore++;
  }
} else divResultadoPartial.innerHTML = `O computador tem  ${computerScore} pontos e o jogador tem ${playerScore}`;

divResultadoPartial.innerHTML = `O computador tem  ${computerScore} pontos e o jogador tem ${playerScore}`;

  
}




const btnPedra = document.querySelector("#pedra");

btnPedra.addEventListener('click', () => {
  getComputerChoice();
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);

})

const btnPapel = document.querySelector("#papel");

btnPapel.addEventListener('click', () => {
  getComputerChoice();
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
})

const btnTesoura = document.querySelector("#tesoura");

btnTesoura.addEventListener('click', () => {
  getComputerChoice();
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
})



// create a game() function and put 5 playRound functions inside
// function game() {
//   //match 1
//   getComputerChoice();

//   //take player selection
//   getPlayerChoice();

//   //check who won
//   playRound(playerSelection, computerSelection);

//   //match 2
//   getComputerChoice();

//   //take player selection
//   getPlayerChoice();

//   //check who won
//   playRound(playerSelection, computerSelection);

//   //match 3
//   getComputerChoice();

//   //take player selection
//   getPlayerChoice();

//   //check who won
//   playRound(playerSelection, computerSelection);

//   //match 4
//   getComputerChoice();

//   //take player selection
//   getPlayerChoice();

//   //check who won
//   playRound(playerSelection, computerSelection);

//   //match 5
//   getComputerChoice();

//   //take player selection
//   getPlayerChoice();

//   //check who won
//   playRound(playerSelection, computerSelection);

//   if (playerScore > computerScore) {
//     console.log("You win the game");
//   } else console.log("You lose the game");
// }

// game();
// console.log(computerSelection);
