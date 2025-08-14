let your_score = 0;
let c_score = 0;

const chooses = document.querySelectorAll(".choose");
const msg = document.querySelector("#msg");

const yourScorePara = document.querySelector("#your_score");
const compScorePara = document.querySelector("#c_score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Your Game is Draw.Please take another move";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (yourWin, yourChoice, compChoice) => {
  if (yourWin) {
    your_score++;
    yourScorePara.innerText = your_score;
    msg.innerText = `You won the game! Your ${yourChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    c_score++;
    compScorePara.innerText = c_score;
    msg.innerText = `You lost the game! Computer ${compChoice} beats your ${yourChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (yourChoice) => {
  
  const compChoice = genCompChoice();

  if (yourChoice === compChoice) {
    
    drawGame();
  } else {
    let yourWin = true;
    if (yourChoice==="rock") {
      
      yourWin = compChoice === "paper" ? false : true;
    } else if (yourChoice === "paper") {
      
      yourWin = compChoice === "scissors" ? false : true;
    } else {
      
      yourWin = compChoice === "rock" ? false : true;
    }
    showWinner(yourWin, yourChoice, compChoice);
  }
};

chooses.forEach((choose) => {
  choose.addEventListener("click", () => {
    const yourChoice = choose.getAttribute("id");
    playGame(yourChoice);
  });
});
