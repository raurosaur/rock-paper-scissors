interface RPS {
  player: number[];
}
export const spr = ["scissors", "paper", "rock"];
export const src = spr.map((el) => `./src/images/icon-${el}.svg`);

class Game implements RPS {
  playerScore = 0;
  computerScore = 0;
  round = 0;
  isPlayerTurn = false;
  playerName: string;
  player: number[];
  computer: number[];

  constructor(playerName?: string) {
    this.playerName = playerName?.toUpperCase() ?? "PLAYER";
    this.player = [];
    this.computer = [];
  }

  reset() {
    this.player = [];
    this.computer = [];
  }

  getChoice(choice: number) {
    return spr[choice];
  }

  getRoundWinner() {
    const computer = this.computer[this.round-1];
    const player = this.player[this.round-1];
    // console.log(computer, player);
    let winner = '';
    if (computer === 2 && player === 0) {
      winner = "LOSE";
    } else if (player === 2 && computer === 0) {
      this.playerScore++;
      winner = "WIN";
    } else {
      if(computer > player) this.playerScore++;
      winner = computer < player ? "LOSE" : computer === player ? 'TIE' : "WIN";
    }
    console.log(winner);
    return winner;
  }

  playerPlay(num: number){
    this.player.push(num);
    console.log(this.player);
    this.round++;
  }
  computerPlay() :number {
    this.computer.push(Math.floor(Math.random() * 3));
    return this.computer[this.computer.length-1];
  }

  getPlayerScore(){
    return this.playerScore;
  }
}

export default Game;
