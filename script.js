function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3); // Generate a random number from 0 to 2
  let result

  switch (randomNum) {
    case 0:
      result = "Rock";
      break;
    case 1:
      result = "Paper";
      break;
    case 2:
      result = "Scissors";
      break;
  }

  return result;

}

function capitalizeFirstLetter(string) { // Capitalize 1 letter just for beauty
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  
  computerSelection = getComputerChoice();
  playerSelection = capitalizeFirstLetter(prompt("Your turn (Rock / Paper / Scissors)"));

  // Check playerSelection equals Rock / Paper / Scissors
  while ( (playerSelection != "Rock") && (playerSelection != "Paper") && (playerSelection != "Scissors") ) {
    playerSelection = capitalizeFirstLetter(prompt("Please write Rock / Paper / Scissors"));
  }

  // Rock Paper Scissors game with returned game result
  if (computerSelection === "Rock") { // Computer = Rock

    if (playerSelection === "Paper") { // Player = Paper
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors") { // Player = Scissors
      return "You Lose! Rock beats Scissors";
    } else { // Player = Rock
      return "Draw! Two Rocks!";
    }

  } else if (computerSelection === "Paper") { // Computer = Paper

    if (playerSelection === "Rock") { // Player = Rock
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Scissors") { // Player = Scissors
      return "You Win! Scissors beats Paper";
    } else { // Player = Paper
      return "Draw! Two Papers!";
    }

  } else { // Computer = Scissors

    if (playerSelection === "Rock") { // Player = Rock
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper") { // Player = Paper
      return "You Lose! Scissors beats Paper";
    } else { // Player = Scissors
      return "Draw! Two Scissors!";
    }

  }

}