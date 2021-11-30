const ARR = ['rock', 'paper', 'scissors'];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * ARR.length);

    const item = ARR[randomIndex];

    return item;
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    let winner;

    if (playerSelection == computerSelection) {
        return 'DRAW';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            winner = computerSelection;
        } else if (computerSelection == 'scissors') {
            winner = playerSelection;
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'rock') {
            winner = playerSelection;
        } else if (computerSelection == 'scissors') {
            winner = computerSelection;
        }
    } else {
        if (computerSelection == 'paper') {
            winner = playerSelection;
        } else if (computerSelection == 'rock') {
            winner = computerSelection;
        }
    }
    if (winner == playerSelection) {
        return `Your Win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `Your Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let player = 0;
    let computer = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Please enter your choice:');
        const computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult)
        if (roundResult.includes('Win')) {
            player += 1;
        } else if (roundResult.includes('Lose')) {
            computer += 1;
        }
    }

    if (player == computer) {
        console.log('YOU BOTH ARE IDIOTS')
    } else if (player > computer) {
        console.log('YOU ARE THE WINNER')
    } else {
        console.log('YOU ARE THE LOSER')
    }
}