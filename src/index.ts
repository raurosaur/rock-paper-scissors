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
const playAgain = document.querySelector("main.play>aside>button") as HTMLButtonElement;

//Modal Drag Function
function displace(e: MouseEvent) {
  const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
  modal_close.parentElement.style.top = `${e.clientY}px`;
  modal_close.parentElement.style.left = `${e.clientX}px`;
}

//Rules Modal Hide
function toggleRules(e: Event | MouseEvent | TouchEvent) {
  modal_close.parentElement.classList.toggle("hide");
}

//Screen Toggle
function toggleScreen(){
  document.querySelector("main.landing").classList.toggle("d-none");
  playScreen.classList.toggle("d-none");
}
/*****************************Event Listeners****************************/
//Show/Hide Rules
modal_close.addEventListener("click", toggleRules);
rules.addEventListener("click", toggleRules);
//Grabbing Rules Modal and Displace
modal_close.parentElement.addEventListener("mousedown", () => {
  modal_close.parentElement.addEventListener("mousemove", displace);
  modal_close.parentElement.style.cursor = "grabbing";
});
//Stop Grab and Stay
modal_close.parentElement.addEventListener("mouseup", () => {
  modal_close.parentElement.style.cursor = "grab";
  modal_close.parentElement.removeEventListener("mousemove", displace);
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
    setTimeout(()=>{
    const compChoice = game.computerPlay();
    compTab.classList.replace(compTab.classList[1], spr[compChoice]);
    compTab.children[0].setAttribute("src", src[compChoice]);
    const status = document.querySelector('aside.status>p>span') as HTMLSpanElement;
    const winner = game.getRoundWinner();
    if (winner === "WIN")
      scoreBoard.innerText = game.getPlayerScore().toString();
    status.innerText = winner;
    }, 50);
  })
);
//Play Again
playAgain.addEventListener("click", toggleScreen);