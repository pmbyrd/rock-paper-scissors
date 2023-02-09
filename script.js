// ! I will be creating a game and the logic and steps written is the outline that I should attempt to follow
// Create a function that will create a timer this will be used to trigger to toggle classes on the choices
const choices = ["rock", "paper", "scissors"];
let computerCount = 0;
let playerCount = 0;
let gamesPlayed = 0;
const $btn = $(".btn");
const $playerInput = $("#player-input");

function getComputerChoices() {
  const computerChoice = getRandomNumber();
  return choices[computerChoice];
}

function getRandomNumber() {
  // get the choices array length as the the numerical value to be passed through the Math.random() function
  const choice = Math.floor(Math.random() * choices.length);
  return choice;
}

function getPlayerChoice() {
  //get the player choice value from the input field
  const playerChoice = $playerInput.val();
  playerChoice.toLowerCase(); // convert the player choice to lower case to avoid errors
  return playerChoice;
}

function playRound(playerChoice, computerChoice) {
  //this function will be called in the game function, handle the logic of the game
  let result;
  if (playerChoice === computerChoice) {
    return (result = "It's a draw");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerCount++;
    return (result = "You win");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerCount++;
    return (result = "You win");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerCount++;
    return (result = "You win");
  } else {
    computerCount++;
    return (result = "You lose");
  }
}

// todo score()
function score() {
    let result;
  if (playerCount === 5) {
    return result = "You win";
  } else if (computerCount === 5) {
    return result = "You lose";
  }
}

//TODO timer()
// ?Can I create animation where the winner choice grows big, if both are the game they grow to 1.5 that size if the toggle the timer for 3 seconds

// *when a button is pressed we execute this function
// TODO game()
function game() {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoices();
  const result = playRound(playerChoice, computerChoice);
  gamesPlayed++;
  displayInstructions();
  displayResult(result);
  updateScore();
  console.table(playerCount, computerCount);
  console.log(computerChoice);
  console.log(result);
  if (playerCount === 5 || computerCount === 5) {
    console.log(score());
  }
}

// todo add in a click event to the button
$btn.on("click", game);

// todo add in message to the user to let them know that they have won or lost and to display the computer choice
function displayInstructions() {
  //works but must be invokes
  if (gamesPlayed !== 0) {
    return $(".welcome").hide();
  }
}

function displayResult(result) {
  $(".result").text(result);
}

function updateScore() {
  $(".player-score").text(playerCount);
  $(".computer-score").text(computerCount);
}
