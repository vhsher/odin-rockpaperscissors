const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const roundResults = document.querySelector("#round-results")

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

let playerScore = 0
let computerScore = 0

if (playerScore === 5 || computerScore === 5) {
  // Someone Wins!
}

function getComputerChoice() {
  // Generate a random number from 0 to 2
  let randomNum = Math.floor(Math.random() * 3); 
  let result

  switch (randomNum) {
    case 0:
      result = "rock";
      break;
    case 1:
      result = "paper";
      break;
    case 2:
      result = "scissors";
      break;
  }

  return result;

}

function playRound(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();

  switch (playerSelection) {

    case "rock":
      if (computerSelection === "paper") {
        computerScore++;
        roundResults.textContent = "Computer wins. Paper beats Rock";
      } else if (computerSelection === "scissors") {
        playerScore++;
        roundResults.textContent = "You win! Rock beats Scissors";
      } else { // computerSelection === "rock"
        roundResults.textContent = "Draw, Rock vs Rock";
      }
      break;
    
    case "paper":
      if (computerSelection === "rock") {
        playerScore++;
        roundResults.textContent = "You win! Paper beats rock";
      } else if (computerSelection === "scissors") {
        computerScore++;
        roundResults.textContent = "Computer wins. Scissors beats Paper";
      } else { // computerSelection === "paper"
        roundResults.textContent = "Draw, Paper vs Paper";
      }
      break;
  
    case "scissors":
      if (computerSelection === "rock") {
        computerScore++;
        roundResults.textContent = "Computer wins. Rock beats Scissors";
      } else if (computerSelection === "paper") {
        playerScore++;
        roundResults.textContent = "You win! Scissors beats Paper";
      } else { // computerSelection === "scissors"
        roundResults.textContent = "Draw, Scissors vs Scissors";
      }
      break;

  }
}