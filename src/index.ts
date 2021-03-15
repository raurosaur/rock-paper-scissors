import "./index.css";
import Game, { src, spr } from "./Game";

//Game Helper Functions
// const name = prompt('Enter Name');
const game = new Game(undefined);

//DOM Elements
const modal_close = document.querySelector(
  "section.modal>img:first-of-type"
) as HTMLDivElement;
const rules = document.querySelector("section>button") as HTMLDivElement;
const icons = document.querySelectorAll(
  "main.landing>div"
) as NodeListOf<HTMLDivElement>;
const playScreen = document.querySelector("main.play");
const playerTab = playScreen.querySelector(
  "div:first-of-type"
) as HTMLDivElement;
const compTab = playScreen.querySelector("div:last-of-type") as HTMLDivElement;
const scoreBoard = document.querySelector(
  "header > div > span"
) as HTMLSpanElement;
const playAgain = document.querySelector(
  "main.play>aside>button"
) as HTMLButtonElement;
const rulesTab = modal_close.parentElement as HTMLDivElement;

let pos1 = 0,
  pos2 = 0,
  pos3 = 0,
  pos4 = 0;

//Modal Drag Function
function displace(e: MouseEvent) {
  e.preventDefault();
  pos1 = pos3 - e.clientY;
  pos2 = pos4 - e.clientX;
  pos3 = e.clientY;
  pos4 = e.clientX;
  rulesTab.style.top = `${rulesTab.offsetTop - pos1}px`;
  rulesTab.style.left = `${rulesTab.offsetLeft - pos2}px`;
}

//Rules Modal Hide
function toggleRules(e: Event | MouseEvent | TouchEvent) {
  rulesTab.classList.toggle("hide");
}

//Screen Toggle
function toggleScreen() {
  document.querySelector("main.landing").classList.toggle("d-none");
  playScreen.classList.toggle("d-none");
}
setTimeout(() => {
(document.querySelector("#onload") as HTMLDivElement).style.opacity = "0";
}, 2000)
setTimeout(() => {
  (document.querySelector("#onload") as HTMLDivElement).style.display = "none";
}, 1500);
/*****************************Event Listeners****************************/
//Show/Hide Rules
modal_close.addEventListener("click", toggleRules);
rules.addEventListener("click", toggleRules);
//Grabbing Rules Modal and Displace
rulesTab.addEventListener("mousedown", (e) => {
  e.preventDefault();
  pos3 = e.clientY;
  pos4 = e.clientX;
  rulesTab.addEventListener("mousemove", displace);
  rulesTab.style.cursor = "grabbing";
});
//Stop Grab and Stay
rulesTab.addEventListener("mouseup", () => {
  rulesTab.style.cursor = "grab";
  rulesTab.removeEventListener("mousemove", displace);
});
//Player
icons.forEach((el) =>
  el.addEventListener("click", (e) => {
    const target = e.currentTarget as HTMLDivElement;
    toggleScreen();
    const i = spr.indexOf(target.className);
    playerTab.classList.replace(playerTab.classList[1], target.className);
    playerTab.children[0].setAttribute("src", src[i]);
    game.playerPlay(i);
    setTimeout(() => {
      const compChoice = game.computerPlay();
      compTab.classList.replace(compTab.classList[1], spr[compChoice]);
      compTab.children[0].setAttribute("src", src[compChoice]);
      const status = document.querySelector(
        "aside.status>p>span"
      ) as HTMLSpanElement;
      const winner = game.getRoundWinner();
      if (winner === "WIN")
        scoreBoard.innerText = game.getPlayerScore().toString();
      status.innerText = winner;
    }, 50);
  })
);
//Play Again
playAgain.addEventListener("click", toggleScreen);
