let playerSelection;
let computerSelection;
let winner;
let playerCount = 0;
let computerCount = 0;
const OPTIONS = ['rock', 'paper', 'scissors'];


// COMPUTER SELECTION //

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * OPTIONS.length);
    computerSelection = OPTIONS[randomIndex];
    return computerSelection;
}

// PLAYER SELECTION //

const playerChoices = document.querySelectorAll('.player-choices');
playerChoices.forEach(function (choice) {
    choice.addEventListener('click', game);
})

// ROUND WINNER//

function playRound(playerSelection, computerSelection) {

    if (playerSelection == computerSelection) {
        return 'draw';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            computerCount += 1;
            return 'computer';
        } else if (computerSelection == 'scissors') {
            playerCount += 1;
            return 'player';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            playerCount += 1;
            return 'player';
        } else if (computerSelection == 'scissors') {
            computerCount += 1;
            return 'computer';
        }
    } else {
        if (computerSelection == 'paper') {
            playerCount += 1;
            return 'player';
        } else if (computerSelection == 'rock') {
            computerCount += 1;
            return 'computer';
        }
    }

}


// GAME //
function game(e) {
    console.log(e);
    if (playerCount <= 5 || computerCount <= 5) {
        const playerSelection = e.target.id;
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        Score();
    } else {
        if (playerCount > computerCount) {
            console.log('YOU ARE THE WINNER')
        } else {
            console.log('YOU ARE THE LOSER')
        }
    }
}

function Score() {
    document.querySelector('.player-score').textContent = `Player: ${playerCount}`;
    document.querySelector('.computer-score').textContent = `Computer: ${computerCount}`;
}