// TODO
// Welcome! Start playing
// css transform display none
// Try again! Start again
// humanhp pchp reset (5)

// const HTML = document.querySelector("");
const rockHTML = document.querySelector("#rock");
const paperHTML = document.querySelector("#paper");
const scissorsHTML = document.querySelector("#scissors");
const roundResultsHTML = document.querySelector("#round-results");
const humanHealthHTML = document.querySelector(".human-health");
const computerHealthHTML = document.querySelector(".computer-health");
const playerChoiceHTML = document.querySelector("#player-choice");
const computerChoiceHTML = document.querySelector("#computer-choice");

rockHTML.addEventListener('click', playRound);
paperHTML.addEventListener('click', playRound);
scissorsHTML.addEventListener('click', playRound);

let humanHealth = 5
let computerHealth = 5

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
        playerChoiceHTML.textContent = "🪨";
        computerChoiceHTML.textContent = "📄";
        roundResultsHTML.textContent = "Computer wins.";
        roundResultsHTML.style.color = "#9c4f58";
        humanHealth--;
        humanHealthHTML.textContent = `${humanHealth}❤️`;
      } else if (computerSelection === "scissors") {
        playerChoiceHTML.textContent = "🪨";
        computerChoiceHTML.textContent = "✂️";
        roundResultsHTML.textContent = "You win!";
        roundResultsHTML.style.color = "#589c4f";
        computerHealth--;
        computerHealthHTML.textContent = `${computerHealth}❤️`;
      } else { // computerSelection === "rock"
        playerChoiceHTML.textContent = "🪨";
        computerChoiceHTML.textContent = "🪨";
        roundResultsHTML.textContent = "Draw";
        roundResultsHTML.style.color = "#4F709C";
      }
      break;
    
    case "paper":
      if (computerSelection === "rock") {
        playerChoiceHTML.textContent = "📄";
        computerChoiceHTML.textContent = "🪨";
        roundResultsHTML.textContent = "You win!";
        roundResultsHTML.style.color = "#589c4f";
        computerHealth--;
        computerHealthHTML.textContent = `${computerHealth}❤️`;
      } else if (computerSelection === "scissors") {
        playerChoiceHTML.textContent = "📄";
        computerChoiceHTML.textContent = "✂️";
        roundResultsHTML.textContent = "Computer wins.";
        roundResultsHTML.style.color = "#9c4f58";
        humanHealth--;
        humanHealthHTML.textContent = `${humanHealth}❤️`;
      } else { // computerSelection === "paper"
        playerChoiceHTML.textContent = "📄";
        computerChoiceHTML.textContent = "📄";
        roundResultsHTML.textContent = "Draw";
        roundResultsHTML.style.color = "#4F709C";
      }
      break;
  
    case "scissors":
      if (computerSelection === "rock") {
        playerChoiceHTML.textContent = "✂️";
        computerChoiceHTML.textContent = "🪨";
        roundResultsHTML.textContent = "Computer wins.";
        roundResultsHTML.style.color = "#9c4f58";
        humanHealth--;
        humanHealthHTML.textContent = `${humanHealth}❤️`;
      } else if (computerSelection === "paper") {
        playerChoiceHTML.textContent = "✂️";
        computerChoiceHTML.textContent = "📄";
        roundResultsHTML.textContent = "You win!";
        roundResultsHTML.style.color = "#589c4f";
        computerHealth--;
        computerHealthHTML.textContent = `${computerHealth}❤️`;
      } else { // computerSelection === "scissors"
        playerChoiceHTML.textContent = "✂️";
        computerChoiceHTML.textContent = "✂️";
        roundResultsHTML.textContent = "Draw";
        roundResultsHTML.style.color = "#4F709C";
      }
      break;

  }
}