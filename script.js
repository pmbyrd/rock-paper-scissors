
// ! I will be creating a game and the logic and steps written is the outline that I should attempt to follow
// Create a function that will create a timer this will be used to trigger to toggle classes on the choices
const choices = ["rock", "paper", "scissors"];
const computerCount = 0;
const playerCount = 0;
const $btn = $(".btn");
const $playerInput = $("#player-input");
console.log($btn, $playerInput);


//TODO getComputerChoices()
function getComputerChoices() {
    const computerChoice = getRandomNumber();
    return choices[computerChoice];
}


// TODO getRandomNumber()
function getRandomNumber() {  // get the choices array length as the the numerical value to be passed through the Math.random() function
    const choice =  Math.floor(Math.random() * choices.length);
    return choice
}

// *with the computer choice function working I can now work on getting the player choice
// TODO getPlayerChoice()
function getPlayerChoice() { //get the player choice value from the input field
    const playerChoice = $playerInput.val();
    playerChoice.toLowerCase(); // convert the player choice to lower case to avoid errors
    return playerChoice;
}
// Todo playRound(arg1, arg2)
// *This function handles the game logic if computer choice === ? write that logic
//playerSelection()
// computerSelection()
// 


//TODO timer()
// ?Can I create animation where the winner choice grows big, if both are the game they grow to 1.5 that size if the toggle the timer for 3 seconds


// *when a button is pressed we execute this function
// TODO game()