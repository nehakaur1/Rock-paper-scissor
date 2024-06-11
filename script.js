let userscore = 0;
let compscore = 0;
//gernerat ecomputer choice
let gencompchoice = () => {
  // stone paper scissor
  let options = ["rock", "paper", "scissor"];
  let randindx = Math.floor(Math.random() * 3);
  return options[randindx];
};
let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
let playgame = (userchoice) => {
  let computerchoice = gencompchoice();
  if (userchoice == computerchoice) {
    //draw
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      //scissor,paper
      userwin = computerchoice === "scissor" ? true : false;
    } else if (userchoice === "paper") {
      //scissor,rock
      userwin = computerchoice === "rock" ? true : false;
    } else {
      //paper,rock
      userwin = computerchoice === "paper" ? true : false;
    }
    showwinner(userwin, userchoice, computerchoice);
  }
};
let drawgame = () => {
  console.log("This Game was Draw");
  msg.innerText = "Game was Draw.Play again.";
  msg.style.backgroundColor = "#081b31";
};

let showwinner = (userwin, userchoice, computerchoice) => {
  if (userwin) {
    userscore++;
    uscore.innerText = userscore;
    msg.innerText = `You Won! Your ${userchoice} beats ${computerchoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compscore++;
    cscore.innerText = compscore;
    msg.innerText = `You Lost! ${computerchoice} beats Your ${userchoice} `;
    msg.style.backgroundColor = "Red";
  }
};
let msg = document.querySelector("#msg");
let uscore = document.querySelector("#user-score");
let cscore = document.querySelector("#Comp-score");
