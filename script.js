// ! I will be creating a game and the logic and steps written is the outline that I should attempt to follow
// Create a function that will create a timer this will be used to trigger to toggle classes on the choices
const choices = ["rock", "paper", "scissors"];
let computerCount = 0;
let playerCount = 0;
let gamesPlayed = 0;
// const $btn = $(".restart");
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

//TODO rework this function to listen for a click event on the buttons

function getPlayerChoice(evt) {
  let playerChoice;
  if ($(this).hasClass("rock")) {
    playerChoice = "rock"
  }
  if ($(this).hasClass("paper")) {
    playerChoice = "paper"
  }
  if ($(this).hasClass("scissors")) {
    playerChoice = "scissors"
  }
  console.log(playerChoice)

  return playerChoice;
}


// onlick call getPlayerChoice
$(".player-choice").on("click",getPlayerChoice);
// I need to work out the game logic
// when a button is clicked it gets the player choice and the round is played


function playRound(playerChoice, computerChoice) {
  //this function will be called in the game function, handle the logic of the game
  let result;
  if (playerChoice === computerChoice) {
    return (result = "It's a draw");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerCount++;
    return (result = "Rock beats scissors, you win");
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerCount++;
    return (result = "Paper beats rock, you win");
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerCount++;
    return (result = "Scissors beats paper, you win");
  } else {
    computerCount++;
    return (result = "You lose");
  }
}

function score() {
  let result;
  if (playerCount === 5) {
    return (result = "Congratulations! You win!!!");
  } else if (computerCount === 5) {
    return (result = "Sorry, you lose");
  }
}

function game(evt) {
  //*when the button is clicked we execute this function
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoices();
  let result = playRound(playerChoice, computerChoice);
  gamesPlayed++;
  displayInstructions();
  displayResult(result);
  updateScore();
  console.table(playerCount, computerCount);
  if (playerCount === 5 || computerCount === 5) {
    result = score();
    displayResult(result);
    endGame();
  }
  console.log("player choice", playerChoice,"computer choise", computerChoice);
}




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

function resetGame() {
  playerCount = 0;
  computerCount = 0;
  gamesPlayed = 0;
  $(".player-score").text(playerCount);
  $(".computer-score").text(computerCount);
  $(".result").text("");
  $(".welcome").show();
}


// create an end game function that will be called when the player or computer reaches 5 points
function endGame() {
  if (playerCount === 5 || computerCount === 5) {
    let result = score();
    alert(result)
    resetGame();
  }
}

endGame();