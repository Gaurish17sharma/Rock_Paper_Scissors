const pqmark = document.querySelector(".player h3");
const cqmark = document.querySelector(".computer h3");
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorbutton = document.querySelector("#scissors");
const playerimg = document.getElementById("playerimg");
const compimg = document.getElementById("compimg");

let playerturn = 0;
let compturn = 0;
let playerscore = 0;
let compscore = 0;

function compselection() {
    const random = ["Rock", "Paper", "Scissors"];
    compturn = random[Math.floor(Math.random() * 3)];
}





