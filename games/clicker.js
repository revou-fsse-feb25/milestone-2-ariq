const clickBtn = document.getElementById("clickBtn");
const restartBtn = document.getElementById("restartBtn");
const scoreDisplay = document.getElementById("score");
const timeLeftDisplay = document.getElementById("timeLeft");

let score = 0;
let timeLeft = 15;
let timer;
let gameRunning = false;

function startGame() {
  score = 0;
  timeLeft = 15;
  gameRunning = true;
  scoreDisplay.textContent = score;
  timeLeftDisplay.textContent = timeLeft;
  clickBtn.disabled = false;
  restartBtn.style.display = "none";

  timer = setInterval(() => {
    timeLeft--;
    timeLeftDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(timer);
  gameRunning = false;
  clickBtn.disabled = true;
  restartBtn.style.display = "inline-block";
}

clickBtn.addEventListener("click", () => {
  if (!gameRunning) startGame();
  score++;
  scoreDisplay.textContent = score;
});

restartBtn.addEventListener("click", startGame);
