const pqmark= document.querySelector(".Side .Player h1");
const cqmark= document.querySelector(".Side .Computer h1");
const resulttext=document.getElementById("resulttext");
const pl_score=document.querySelector(".Player h2")
const comp_score=document.querySelector(".Computer h2")
const rockbutton= document.querySelector("#rock");
const paperbutton= document.querySelector("#paper");
const scissorsbutton= document.querySelector("#scissors");
const playerimg = document.getElementById("playerimg");
const comperimg = document.getElementById("comperimg");
const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const popupss = document.querySelector("#popup p");
const playagain = document.getElementById("playagain");

let playerselection = 0;
let compselection = 0;
let playerscore = 0;
let compscore = 0;

function decide(playerselection, compselection) {

    if (playerselection == "Rock" && compselection == "Scissors") {
      resulttext.textContent="Result: Rock beats Scissors";
      pl_score.textContent= `Player: ${++playerscore}`;

    } else if (playerselection == "Paper" && compselection == "Rock") {
      resulttext.textContent = "Result: Paper beats Rock";
      pl_score.textContent = `Player: ${++playerscore}`;

    } else if (playerselection == "Scissors" && compselection == "Paper") {
      resulttext.textContent = "Result: Scissors beats Paper";
      pl_score.textContent = `Player: ${++playerscore}`;

    } else if (playerselection == compselection) {
      resulttext.textContent = "Result: Draw";

    } else {
      resulttext.textContent = `${compselection} beats ${playerselection}`;
      comp_score.textContent = `Computer: ${++compscore}`;

    }
    if ((playerscore >= 5) || (compscore >= 5)) {
        Gameover(playerscore, compscore);
    }
}

function getcompselection() {

    const array =["Rock","Paper","Scissors"];
    compselection=array[Math.floor (Math.random() * 3 )];
}

paperbutton.addEventListener("click", function (e) {
    playerselection = e.target.alt;
    getcompselection();
    pqmark.remove();
    cqmark.remove();
    playerimg.src = "Paper.png";
    comperimg.src = `${compselection}.png`; 
    decide(playerselection, compselection);
});

rockbutton.addEventListener("click", function (e) {
    playerselection = e.target.alt;
    getcompselection();
    playerimg.src = "Rock.png";
    comperimg.src = `${compselection}.png`;
    pqmark.remove();
    cqmark.remove();
    decide(playerselection, compselection);
});

scissorsbutton.addEventListener("click", function (e) {
    playerselection = e.target.alt;
    getcompselection();
    playerimg.src = "Scissors.png";
    comperimg.src = `${compselection}.png`;
    pqmark.remove();
    cqmark.remove();
    decide(playerselection, compselection);
});

function Gameover(playerscore, compscore) {
    overlay.setAttribute("style", "visibility: visible;");
    popup.setAttribute("style", "visibility: visible;");
    if (playerscore > compscore) {
        popupss.textContent = "You won!!";
      } else {
        popupss.textContent = "You Lose...";
      }
    }

 playagain.addEventListener("click", () => {
        playerscore = 0;
        compscore = 0;
        pl_score.textContent = "You: 0";
        comp_score.textContent = "Computer: 0";
        overlay.setAttribute("style", "visibility: hidden;");
        popup.setAttribute("style", "visibility: hidden;");
});



