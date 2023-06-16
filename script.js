// TODO
// Welcome! Start playing
// css transform display none
// Try again! Start again
// humanhp pchp reset (5)
// Start in HTML, outside js
// End in JS, outside DOM

// const HTML = document.querySelector("");
const startHTML = document.querySelector(".start");
const containerHTML = document.querySelector(".container");
const startGameHTML = document.querySelector(".start-game");
const rockHTML = document.querySelector("#rock");
const paperHTML = document.querySelector("#paper");
const scissorsHTML = document.querySelector("#scissors");
const roundResultsHTML = document.querySelector("#round-results");
const humanHealthHTML = document.querySelector(".human-health");
const computerHealthHTML = document.querySelector(".computer-health");
const playerChoiceHTML = document.querySelector("#player-choice");
const computerChoiceHTML = document.querySelector("#computer-choice");
const endHTML = document.querySelector(".end");
const winnerHTML = document.querySelector("#winner");
const playAgainHTML = document.querySelector("#play-again");

rockHTML.addEventListener('click', playRound);
paperHTML.addEventListener('click', playRound);
scissorsHTML.addEventListener('click', playRound);
startGameHTML.addEventListener("click", startGame);
playAgainHTML.addEventListener("click", playAgain);

let humanHealth = 5
let computerHealth = 5

function startGame() {
  startHTML.classList.add("hidden");
  containerHTML.classList.remove("hidden");
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
          playerChoiceHTML.textContent = "🪨";
          computerChoiceHTML.textContent = "📄";
          roundResultsHTML.textContent = "Computer wins.";
          roundResultsHTML.style.color = "#9c4f58";
          --humanHealth;
          humanHealthHTML.textContent = `${humanHealth}❤️`;
          checkPlayersHealth();
        } else if (computerSelection === "scissors") {
          playerChoiceHTML.textContent = "🪨";
          computerChoiceHTML.textContent = "✂️";
          roundResultsHTML.textContent = "You win!";
          roundResultsHTML.style.color = "#589c4f";
          --computerHealth;
          computerHealthHTML.textContent = `${computerHealth}❤️`;
          checkPlayersHealth();
        } else { // computerSelection === "rock"
          playerChoiceHTML.textContent = "🪨";
          computerChoiceHTML.textContent = "🪨";
          roundResultsHTML.textContent = "Draw";
          roundResultsHTML.style.color = "#4F709C";
          checkPlayersHealth();
        }
        break;
      
      case "paper":
        if (computerSelection === "rock") {
          playerChoiceHTML.textContent = "📄";
          computerChoiceHTML.textContent = "🪨";
          roundResultsHTML.textContent = "You win!";
          roundResultsHTML.style.color = "#589c4f";
          --computerHealth;
          computerHealthHTML.textContent = `${computerHealth}❤️`;
          checkPlayersHealth();
        } else if (computerSelection === "scissors") {
          playerChoiceHTML.textContent = "📄";
          computerChoiceHTML.textContent = "✂️";
          roundResultsHTML.textContent = "Computer wins.";
          roundResultsHTML.style.color = "#9c4f58";
          --humanHealth;
          humanHealthHTML.textContent = `${humanHealth}❤️`;
          checkPlayersHealth();
        } else { // computerSelection === "paper"
          playerChoiceHTML.textContent = "📄";
          computerChoiceHTML.textContent = "📄";
          roundResultsHTML.textContent = "Draw";
          roundResultsHTML.style.color = "#4F709C";
          checkPlayersHealth();
        }
        break;
    
      case "scissors":
        if (computerSelection === "rock") {
          playerChoiceHTML.textContent = "✂️";
          computerChoiceHTML.textContent = "🪨";
          roundResultsHTML.textContent = "Computer wins.";
          roundResultsHTML.style.color = "#9c4f58";
          --humanHealth;
          humanHealthHTML.textContent = `${humanHealth}❤️`;
          checkPlayersHealth();
        } else if (computerSelection === "paper") {
          playerChoiceHTML.textContent = "✂️";
          computerChoiceHTML.textContent = "📄";
          roundResultsHTML.textContent = "You win!";
          roundResultsHTML.style.color = "#589c4f";
          --computerHealth;
          computerHealthHTML.textContent = `${computerHealth}❤️`;
          checkPlayersHealth();
        } else { // computerSelection === "scissors"
          playerChoiceHTML.textContent = "✂️";
          computerChoiceHTML.textContent = "✂️";
          roundResultsHTML.textContent = "Draw";
          roundResultsHTML.style.color = "#4F709C";
          checkPlayersHealth();
        }
        break;
        
    }
}

function checkPlayersHealth() {
  if (computerHealth !== 0 && humanHealth !== 0) {
    return;
  } else {
    containerHTML.classList.add("hidden");
    endHTML.classList.remove("hidden");
    if (humanHealth > computerHealth) {
      winnerHTML.textContent = "You Win! 🏆";
    } else {
      winnerHTML.textContent = "You Lose 😓";
    }
  }
}

function playAgain() {
  computerHealth = 5;
  humanHealth = 5;
  humanHealthHTML.textContent = `${humanHealth}❤️`;
  computerHealthHTML.textContent = `${computerHealth}❤️`;
  playerChoiceHTML.textContent = "❔";
  computerChoiceHTML.textContent = "❔";
  roundResultsHTML.textContent = "";
  endHTML.classList.add("hidden");
  containerHTML.classList.remove("hidden");
}