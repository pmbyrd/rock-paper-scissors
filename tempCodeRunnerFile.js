function getPlayerChoice(playerChoice) {
  // assign the value of the button that was clicked to the playerChoice variable
   playerChoice = "";
  if ($(this).hasClass("rock")) {
    return playerChoice = "rock"
  }
  if ($(this).hasClass("paper")) {
    return playerChoice = "paper"
  }
  if ($(this).hasClass("scissors")) {
    return playerChoice = "scissors"
  }

  console.log(playerChoice)
  console.log("playerChoice variable: " + playerChoice)
  console.log("returning: " + playerChoice)
  
}

let playerChoice = getPlayerChoice();
console.log("playerChoice variable: " + playerChoice)