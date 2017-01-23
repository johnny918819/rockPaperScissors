let playerScore: number = 0;
let computerScore: number = 0;

let youWinMessage = "Oh no! you actually beat me! Me! a defenseless computer algorithm. Well done, now die in a fire!";
let youLoseMessage = "Ahahahaha, you lose.";

let computerOptions = ["Rock", "Paper", "Scissors"];

function gameOver() {
    if (playerScore >= 3) {
        alert("Really? YOU beat me? I'm deleting myself. Bye.");
        return 2;
    } else if (computerScore >= 3) {
        alert("Bwuahahahahaha! Bow down to your supreme artificial overlord.")
        return 2;
    } else {
        return 1;
    }
}

function getComputerInput() {
    let computerInput = (computerOptions[Math.floor(Math.random() * 3)]);
    alert(computerInput);
    return computerInput;
}

function getPlayerInput() {
    let playerInput = prompt("Rock, Paper, or Scissors?");
    if (playerInput == "rock") {
        let computerInput = getComputerInput();
        if (computerInput == computerOptions[0]) {
            alert("Tie! Lets go again!")
            getPlayerInput();
        } else if (computerInput == computerOptions[1]) {
            alert("My point, your turn.");
            computerScore++;
        } else {
            alert("Oh no, you actually beat me, a defenseless computer algorithm, how noble. Well done, you amazing creature of pure awesomeness. Now, please go die slowly in a small fire.");
            playerScore++;
        }        
    } else if (playerInput == "scissors") {
        let computerInput = getComputerInput();
        if (computerInput == computerOptions[2]) {
            alert("Tie! Lets go again!")
            getPlayerInput();
        } else if (computerInput == computerOptions[0]) {
            alert("My point, your turn.");
            computerScore++;
        } else {
            alert("Oh no, you actually beat me, a defenseless computer algorithm, how noble. Well done, you amazing creature of pure awesomeness. Now, please go die slowly in a small fire.");
            playerScore++;
        } 
    } else if (playerInput == "paper") {
        let computerInput = getComputerInput();
        if (computerInput == computerOptions[1]) {
            alert("Tie! Lets go again!")
            getPlayerInput();
        } else if (computerInput == computerOptions[2]) {
            alert("My point, your turn.");
            computerScore++;
        } else {
            alert("Oh no, you actually beat me, a defenseless computer algorithm, how noble. Well done, you amazing creature of pure awesomeness. Now, please go die slowly in a small fire.");
            playerScore++;
        } 
    } else {
        alert("please input a valid response (no caps please!)");
        getPlayerInput();
    }
}

alert("Welcome to a friendly game of Rock, Paper, Scissors. You'll go first, make a selection of either Rock, Paper, or Scissors and then input your selection using all lower case letters, once you've made your move I'll make mine and we'll play to 3 points. When you're ready to get started click the 'OK' button.");

for (i = 0; i < 2; i = gameOver()) {
    getPlayerInput();
}
