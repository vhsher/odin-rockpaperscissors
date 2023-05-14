function getComputerChoice() {
  // Generate a random number from 0 to 2
  let randomNum = Math.floor(Math.random() * 3); 
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

function capitalizeFirstLetter(string) { // Capitalize 1st letter for beauty
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function playRound(playerSelection, computerSelection) {
  
  computerSelection = getComputerChoice();
  playerSelection = capitalizeFirstLetter( // Player turn
    prompt("Your turn (Rock / Paper / Scissors)")
  );

  // Check playerSelection == Rock / Paper / Scissors
  while ( (playerSelection != "Rock") &&
          (playerSelection != "Paper") &&
          (playerSelection != "Scissors") ) {
    playerSelection = capitalizeFirstLetter(
      prompt("Please write Rock / Paper / Scissors")
      );
  }

  // Check who will win: Computer vs Player
  if (computerSelection === "Rock") {

    if (playerSelection === "Paper") {
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors") {
      return "You Lose! Rock beats Scissors";
    } else { // Player = Rock
      return "Draw! Two Rocks!";
    }

  } else if (computerSelection === "Paper") {

    if (playerSelection === "Rock") {
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Scissors") {
      return "You Win! Scissors beats Paper";
    } else { // Player = Paper
      return "Draw! Two Papers!";
    }

  } else { // Computer = Scissors

    if (playerSelection === "Rock") {
      return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Paper") {
      return "You Lose! Scissors beats Paper";
    } else { // Player = Scissors
      return "Draw! Two Scissors!";
    }

  }

}

function game() {
  let drawCount = 0
  let winCount = 0
  let loseCount = 0
  let gameCount = 0
  
  // Play 5 rounds
  while (gameCount < 5) {
    gameCount += 1;
    let game = playRound();
    alert("ROUND RESULTS: " + game);
    console.log("ROUND RESULTS: " + game);

    if (game.includes("Win")) {
      winCount += 1;
    } else if (game.includes("Lose")) {
      loseCount += 1;
    } else if (game.includes("Draw")) {
      drawCount += 1;
    } else {
      undefined;
    }
  }

  // Game Results
  if (winCount > loseCount) {
    alert("You win the game! Congratulations!");
    return "You win the game! Congratulations!";
  } else if (winCount === loseCount) {
    alert("Drawn game!");
    return "Drawn game!";
  } else { // Win < Lose
    alert("You Lose. Good luck next time!");
    return "You Lose. Good luck next time!";
  }
}