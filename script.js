console.log("Hello World");
// ! I will be creating a game and the logic and steps written is the outline that I should attempt to follow
// Create a function that will create a timer this will be used to trigger to toggle classes on the choices
const choices = ["rock", "paper", "scissors"];
const computerCount = 0;
const playerCount = 0;


console.log("Hello World");
//TODO getComputerChoices()
function getComputerChoices() {
    const choice = getRandomNumber();
    return choices[choice];
}

// TODO getRandomNumber()
function getRandomNumber() {
    // the choices is a len of "2" so I need a number choice
    const choice =  Math.floor(Math.random() * choices.length);
    return choice
}

getRandomNumber();
// Todo playRound(arg1, arg2)
// *This function handles the game logic if computer choice === ? write that logic
//playerSelection()
// computerSelection()
// 


//TODO timer()
// ?Can I create animation where the winner choice grows big, if both are the game they grow to 1.5 that size if the toggle the timer for 3 seconds


// *when a button is pressed we execute this function
// TODO game()