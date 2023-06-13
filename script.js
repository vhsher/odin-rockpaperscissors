const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound);
scissors.addEventListener('click', playRound);

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

}

function game() {
 
}