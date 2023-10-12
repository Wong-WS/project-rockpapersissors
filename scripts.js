function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock" && computerSelection === "paper") {
        return("You lose! Paper beats Rock");
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return("You lose! Scissors beats Paper");
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return("You lose! Rock beats Scissors");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return("You win! Rock beats Scissors");
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return("You win! Paper beats Rock");
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return("You win! Scissors beats Paper");
    } else {
        return("It's a tie")
    }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const resultElement = document.getElementById("result");
const gameResult = document.getElementById("gameResult");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    displayResult(result);

    if (roundsPlayed === 0) {
        document.getElementById("gameResult").textContent = "";
        document.getElementById("playerScore").textContent = "Player: 0";
        document.getElementById("computerScore").textContent = "Computer: 0";
    }

    if (result.includes("You win!")) {
        playerScore++
    } else if (result.includes("You lose!")) {
        computerScore++
    }

    roundsPlayed++

    document.getElementById("playerScore").textContent = "Player: " + playerScore;
    document.getElementById("computerScore").textContent = "Computer: " + computerScore;

    if (roundsPlayed === 5) {
        if (playerScore > computerScore) {
            gameResult.textContent = "You win the game!";
        } else if (computerScore > playerScore) {
            gameResult.textContent = "You lose the game!";
        } else {
            gameResult.textContent = "It's a tie game.";
        }
        
        playerScore = 0;
        computerScore = 0;
        roundsPlayed = 0;
    }
}

function displayResult(result) {
    resultElement.textContent = result;
}

rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));





// rockBtn.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = "rock".toLowerCase();
//     const result = playRound(playerSelection, computerSelection);
//     displayResult(result);
// });

// paperBtn.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = "paper".toLowerCase();
//     const result = playRound(playerSelection, computerSelection);
//     displayResult(result);
// });

// scissorsBtn.addEventListener("click", () => {
//     const computerSelection = getComputerChoice();
//     const playerSelection = "scissors".toLowerCase();
//     const result = playRound(playerSelection, computerSelection);
//     displayResult(result);
// });

// function displayResult(result) {
//     resultElement.textContent = result;
// }



// for (let round = 1; round <= 5; round++) {
//     if (result.includes("You win!")) {
//         playerScore++;
//     } else if (result.includes("You lose!")) {
//         computerScore++;
//     }
// }

// if (playerScore > computerScore) {
//     resultElement.textContent = "You win the game!";
// } else if (computerScore > playerScore) {
//     resultElement.textContent = "You lose the game!";
// } else {
//     resultElement.textContent = "It's a tie game.";
// }


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let round = 1; round <= 5; round++) {
//         const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
//         const computerSelection = getComputerChoice();

//         const roundResult = playRound(playerSelection, computerSelection);
//         console.log(`Round ${roundResult}`);

//         if (roundResult.includes('You Win!')) {
//             playerScore++;
//         } else if (roundResult.includes('You Lose!')) {
//             computerScore++;
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log('You win the game!');
//     } else if (computerScore > playerScore) {
//         console.log('You lose the game.');
//     } else {
//         console.log("It's a tie game.");
//     }
// }

// game()

