/*
    0 = Rock
    1 = Paper
    2 = Scissors
*/
const rock = document.getElementById('rock'),
    paper = document.getElementById('paper'),
    scissors = document.getElementById('scissors');

const choices = ['Rock', 'Paper', 'Scissors'];

const playerScore = document.getElementById('playerScore'),
    compScore = document.getElementById('compScore');

const round = document.getElementById('round'),
    statusBar = document.getElementById('status-bar')

let i = 0;

rock.onclick = () => { playRound(0, computerPlay()) };
paper.onclick = () => { playRound(1, computerPlay()) };
scissors.onclick = () => { playRound(2, computerPlay()) };

let player = 0, numRound = 1, comp = 0;

function playRound(playerChoice, computerSelection) {
    if (playerChoice === computerSelection) {
        statusBar.textContent = 'It\'s a tie';
    }
    else if ((playerChoice === 0 && computerSelection === 2) || (playerChoice !== 0 && playerChoice > computerSelection)) {
        statusBar.textContent = `You Won! ${choices[playerChoice]} beats ${choices[computerSelection]}`;
        playerScore.textContent = ++player;
    }
    else {
        statusBar.textContent = `You lose. ${choices[computerSelection]} beats ${choices[playerChoice]}`;
        compScore.textContent = ++comp;
    };
    numRound++;
    if (numRound <= 5)
        round.textContent = numRound;
    if (numRound === 6) {
        let winner = (player > comp) ? 'You! Congrats!🎉' : (player === comp) ? 'A tie.' : 'Uh Oh! You lost. 🙁';
        statusBar.textContent = 'The winner is...';
        setTimeout(() => { statusBar.textContent = `${winner}` }, 2000);
        setTimeout(reset, 5000);
    }
}

function computerPlay() {
    return Math.ceil(Math.random() * (2));
}

function reset() {
    player = 0;
    numRound = 1;
    comp = 1;
    round.textContent = numRound;
    playerScore.textContent = player;
    compScore.textContent = comp;
    statusBar.textContent = 'To start a new game, click another image!';
};