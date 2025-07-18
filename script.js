// **GAME STARTS RUNNING**
const startButton = document.querySelector("#start-button");
const roundForm = document.querySelector("#round-form");
const roundCount = document.querySelector("#round-count");
const rpsButtons = document.querySelector(".rps-buttons");
const choiceButtons = document.querySelectorAll(".choice-button");
const resultsPanel = document.querySelector(".results-panel");
const resultsTitle = document.querySelector(".results-title");
const roundResult = document.querySelector("#round-result");
const gameStats = document.querySelector("#game-stats");
const finalResult = document.querySelector("#final-result");

let userChoice = "";
let computerChoice = "";
let currentRound = 0;
let totalRounds = 0;
let userScore = 0;
let computerScore = 0;
let tieCount = 0;
const rpsChoices = ["rock", "paper", "scissors"];

function capitalizeFirstLetter(word) {
    return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
};

function handleRoundFormSubmit(e) {
    e.preventDefault();
    totalRounds = roundCount.value;
    roundCount.value = "";
    roundForm.style.display = "none"
    rpsButtons.style.display = "block"
}

function showCurrentRoundWinner(winner) {
    //If the value received is true, the computer won the round, if the value received is false, the user won the round.
    let userWonRound = `The user won this round, ${capitalizeFirstLetter(userChoice)} beats ${capitalizeFirstLetter(computerChoice)}`;
    let computerWonRound = `The computer won this round, ${capitalizeFirstLetter(computerChoice)} beats ${capitalizeFirstLetter(userChoice)}`;
    winner ? roundResult.textContent = computerWonRound : roundResult.textContent = userWonRound;
}

function compareChosenOptions(userOption, computerOption) {
    resultsTitle.style.display = "block";
    if (userOption === computerOption) {
        let currentRoundTied = `Both players made the same choice, so this round is a tie. User chose ${capitalizeFirstLetter(userOption)} and computer chose ${capitalizeFirstLetter(computerOption)}.`;
        roundResult.textContent = currentRoundTied;
        tieCount++;
    } else {
        switch (userOption) {
            case "rock":
                computerOption === "paper" ? computerScore++ : userScore++;
                showCurrentRoundWinner(computerOption === "paper");
                break;
            case "paper":
                computerOption === "scissors" ? computerScore++ : userScore++;
                showCurrentRoundWinner(computerOption === "scissors");
                break;
            case "scissors":
                computerOption === "rock" ? computerScore++ : userScore++;
                showCurrentRoundWinner(computerOption === "rock");
                break;
            default:
                console.log("Something strange is going on here bro...");
                break;
        }
    }
    let currentStatistics = `User score: ${userScore} | Computer score: ${computerScore} | Tied rounds: ${tieCount}`;
    gameStats.textContent = currentStatistics;
}

function showGameWinner(userData, computerData, tieData) {
    rpsButtons.style.display = "none";
    startButton.style.display = "block";
    gameStats.textContent = "";
    let userWin = `The user has won the game, congratulations! <br>User score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`;
    let computerWin = `The computer has won the game, better luck next time. <br>User score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`;
    let tieEndGame = `The game ended in a tie, both players have the same score at the end of the total number of rounds played. <br>User score: ${userData} | Computer score: ${computerData} | Tied rounds: ${tieData}`;
    if (userData == computerData) {
        console.log(tieEndGame);
        finalResult.innerHTML = tieEndGame;
    } else if (userData > computerData) {
        console.log(userWin);
        finalResult.innerHTML = userWin;
    } else {
        console.log(computerWin);
        finalResult.innerHTML = computerWin;
    }
}

function handleUserChoice(chosenElement) {
    userChoice = chosenElement.target.offsetParent.dataset.choice;
    computerChoice = rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
    compareChosenOptions(userChoice, computerChoice);
    currentRound++;
    if (currentRound == totalRounds) {
        showGameWinner(userScore, computerScore, tieCount);
    }
}

function startNewGame() {
    userChoice = "";
    computerChoice = "";
    currentRound = 0;
    totalRounds = 0;
    userScore = 0;
    computerScore = 0;
    tieCount = 0;
    resultsTitle.style.display = "none";
    roundResult.textContent = "";
    finalResult.textContent = "";
    startButton.style.display = "none";
    roundForm.style.display = "block";
}

choiceButtons.forEach(button => {
    button.addEventListener("click", handleUserChoice);
});
roundForm.addEventListener("submit", handleRoundFormSubmit);
startButton.addEventListener("click", startNewGame);

// **GAME OVER**