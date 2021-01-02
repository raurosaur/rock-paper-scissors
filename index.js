/*
    0 = Rock
    1 = Paper
    2 = Scissors
*/
const choices = ["Rock", "Paper",  "Scissors"];

function computerPlay(){
    return Math.ceil(Math.random() * (2));
}

function playRound(playerSelection, computerSelection){
    let playerChoice = getChoice(playerSelection.toLowerCase());

    if(playerChoice === -1)
        return {hasWon: false, isTie: false, msg: 'Error!'};
    if(playerChoice === computerSelection)
        return {hasWon: false, isTie: false, msg:'It\'s a tie.'};
    else if ((playerChoice === 0 && computerSelection === 2)||(playerChoice !== 0 && playerChoice > computerSelection))
        return {hasWon: true, isTie: false, msg: `You Won! ${playerSelection} beats ${choices[computerSelection]}`};
    else 
        return {hasWon: false, isTie: false, msg:`You lose. ${choices[computerSelection]} beats ${playerSelection} `};
}

function getChoice(val){
    return (val === "rock") ? 0 : (val === "paper") ? 1 : (val === "scissors") ? 2 : -1;
}

function game(){
    let counter = 0, player = 0, computer = 0;

    while(counter < 5){
        let {hasWon, isTie, msg} = playRound(prompt("Enter your Choice!", "Rock"), computerPlay());
        try{
        if(!isTie){
            if(hasWon)
                player++;
            else
                computer++;
        }
        alert(msg);
        }
        catch(error){
            alert(error);
        }
        counter++;
    }

    alert(`Your score is ${player} and computer score is ${computer}. There were ${5-player-computer} ties`);
    (player > computer) ? alert('You won!') : (player === computer) ? alert('It was tie. Still a win!')
    : alert('Oops, you lost. :( Better luck next time!');
}

game();