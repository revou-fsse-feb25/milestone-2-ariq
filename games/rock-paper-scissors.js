const buttons = document.querySelectorAll('button[data-choice]');
const playerChoice = document.getElementById("playerChoice");
const computerChoice = document.getElementById("computerChoice");
const gameResult = document.getElementById("gameResult");
const playerScoreDisplay = document.getElementById("playerScore");
const computerScoreDisplay = document.getElementById("computerScore");

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const player = button.dataset.choice;
    const computer = getComputerChoice();
    const result = getResult(player, computer);

    playerChoice.textContent = player;
    computerChoice.textContent = computer;
    gameResult.textContent = result;

    if (result === "You win!") playerScore++;
    if (result === "You lose!") computerScore++;

    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  });
});

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}
