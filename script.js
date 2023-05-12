function getComputerChoice() {
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