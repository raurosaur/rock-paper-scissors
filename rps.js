const rock = document.getElementById('rock'),
paper = document.getElementById('paper'),
scissors = document.getElementById('scissors');

const value = {'rock': 0, 'paper': 1, 'scissors': 2};

const playerScore = document.getElementById('playerScore'),
compScore = document.getElementById('compScore');

const round = document.getElementById('round');

let i = 0;

rock.onclick = () => {playerScore.textContent = i++ };
paper.onclick = () => 1;
scissors.onclick = () => 2;