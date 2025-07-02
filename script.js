console.log("FML bro, IWTD so badly...");

// **GAME STARTS RUNNING**

// Create a variable for the user's answer (userChoice).
let userChoice = 0;
// Create a variable for the computer's answer (computerChoice).
let computerChoice = 0;
// Create a variable for the number of rounds to play (totalRounds).
let totalRounds = 0;
// Create a counter for user wins (userScore).
let userScore = 0;
// Create a counter for computer wins (computerScore).
let computerScore = 0;
// Create a counter for ties (tieCount).
let tieCount = 0;
// Create a list with the choices available to play (choices)
const choices = ["rock", "paper", "scissors"];
// Create switch variable to keep the game active or close it.(keepPlaying)
let keepPlaying = true;

function compareChosenOptions(userOption, computerOption) {
    //     Compare userChoice and computerChoice:
    //         If user beats computer, increment userScore.
    //         Else if computer beats user, increment computerScore.
    //         Else, increment tieCount.
    switch (userOption) {
        case 1:
            if (computerOption == 1) {
                tieCount++;
            } else {
                computerOption == 2 ? computerScore++ : userScore++;
            }
            break;
        case 2:
            if (computerOption == 2) {
                tieCount++;
            } else {
                computerOption == 3 ? computerScore++ : userScore++;
            }
            break;
        case 3:
            if (computerOption == 3) {
                tieCount++;
            } else {
                computerOption == 1 ? computerScore++ : userScore++;
            }
            break;
        default:
            break;
    }
}

function showGameWinner(userData, computerData, tieData) {
    // After all rounds:
    //     If userScore > computerScore:
    //         Display final statistics and declare the user as the winner.
    //     Else if computerScore > userScore:
    //         Display final statistics and declare the computer as the winner.
    //     Else:
    //         Display final statistics and declare a tie.
    let userWin = `The user has won the game, congratulations! \nUser score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`;
    let computerWin = `The computer has won the game, better luck next time. \nUser score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`;
    if (userData == computerData) {
        console.log(`The game ended in a tie, both players have the same score at the end of the total number of rounds played. \nUser score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`);
        alert(`The game ended in a tie, both players have the same score at the end of the total number of rounds played. \nUser score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`);
    } else if (userData > computerData) {
        console.log(userWin);
        alert(userWin);
    } else {
        console.log(computerWin);
        alert(computerWin);
    }
}

function runGame() {
    // Ask the user to choose a number of rounds to play from the available options.
    // Set totalRounds based on user's input.
    totalRounds = prompt(`Welcome to the rock, paper, scissors game created by Haakon Beck \nPlease indicate how many rounds you would like to play in total:`);

    // For each round from 1 to totalRounds:
    for (let index = 0; index < totalRounds; index++) {
        // Ask the user to choose between Rock, Paper, or Scissors.
        userChoice = parseInt(prompt(`Please choose one of the available options to play: \n1.Rock \n2.Paper \n3.Scissors`));
        console.log(`Round ${index + 1} of ${totalRounds}`)
        console.log(`User: ${choices[userChoice - 1]}`);
        // Generate a random choice for the computer.
        computerChoice = Math.floor(Math.random() * 3);
        console.log(`Computer: ${choices[computerChoice]}`);
        compareChosenOptions(userChoice, (computerChoice + 1));
    }
    showGameWinner(userScore, computerScore, tieCount);
}

while (keepPlaying) {
    runGame();
    // Ask the user if they want to play again.
    //     If yes, reset all variables and repeat the game.
    //     If no, end the game.
    let anotherGame = parseInt(prompt(`Do you want to play again or leave? \n1.Play again \n2.Exit`));
    if (anotherGame == 1) {
        userChoice = 0;
        computerChoice = 0;
        totalRounds = 0;
        userScore = 0;
        computerScore = 0;
        tieCount = 0;
    } else {
        keepPlaying = false;
    }
}

// **GAME OVER**