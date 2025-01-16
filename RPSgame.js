//selection of playerpoints//
const playerScore = document.getElementById("player-score");

//selection of computerpoint//
const computerScore = document.getElementById("computer-score");
//selecting the buttons//
const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");
let playerChoice = [rockBtn, paperBtn, scissorsBtn];

//to display the result//
const result = document.getElementById("result-message");

//choosing by the computer//
let computerChoiceArray = ["Rock", "Paper", "Scissors"];



//for each method on the playerChoice array//
playerChoice.forEach((btn) => {
  btn.addEventListener("click", () => {
   const playerSelection = btn.value;
    
    playRound(playerSelection);
  });
});

//playRound function //
const playRound = (playerSelection) =>{
    //randomly chosing the computer choice//
    const computerChoice = computerChoiceArray[Math.floor(Math.random() * computerChoiceArray.length)];

    //adding if else conditions//
    if(computerChoice === playerSelection){
        result.textContent = `It's a tie! Both you and computer chose ${playerSelection}`;
    }else if((playerSelection === "Rock" && computerChoice === "Scissors") ||
    (playerSelection === "Paper" && computerChoice === "Rock") ||
    (playerSelection === "Scissors" && computerChoice === "Paper")){
        result.textContent = `You win! ${playerSelection} beats ${computerChoice}`;
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else{
        result.textContent = `Computer wins! ${computerChoice} beats ${playerSelection}`;
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    //adding the checkWinner() function//
    checkWinner();
}

//checkWinner Function//
const checkWinner = () => {
    const winningScore = 5;
    if(parseInt(playerScore.textContent) === winningScore){
        result.textContent = "Congratulations! You've won the game!";
        endGame();
    }else if(parseInt(computerScore.textContent) === winningScore){
        result.textContent = "Sorry! Computer has won the game!";
        endGame();
    };
};

//endGame Function//
const endGame = () =>{
    playerChoice.forEach(button =>{
         button.disabled = true;
    });

    //add the reset button dynamically//
    const resetBtn = document.createElement("button");  //creating the reset button dynamically
    resetBtn.textContent = "play Again";
    resetBtn.classList.add("btn", "reset-btn"); //Adding an unique class to the reset button//
    resetBtn.addEventListener("click", resetGame);
   document.querySelector(".game-container").appendChild(resetBtn);
};

//resetGame Function//
const resetGame = () => {
    playerScore.textContent =0;
    computerScore.textContent = 0;
    result.textContent = "";
    playerChoice.forEach(button =>{
        button.disabled = false;
    });
    const resetBtn = document.querySelector(".game-container .reset-btn");
 resetBtn.remove();
};








