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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors):`);
        const computerSelection = getComputerChoice();

        const roundResult = playRound(playerSelection, computerSelection);
        console.log(`Round ${roundResult}`);

        if (roundResult.includes('You Win!')) {
            playerScore++;
        } else if (roundResult.includes('You Lose!')) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > playerScore) {
        console.log('You lose the game.');
    } else {
        console.log("It's a tie game.");
    }
}

game()

