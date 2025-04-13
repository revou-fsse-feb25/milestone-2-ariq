const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const feedback = document.getElementById("feedback");
const remaining = document.getElementById("remaining");
const resetBtn = document.getElementById("resetBtn");

guessBtn.addEventListener("click", () => {
  const userGuess = Number(guessInput.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "❌ Please enter a number between 1 and 100.";
    return;
  }

  attempts--;
  remaining.textContent = attempts;

  if (userGuess === randomNumber) {
    feedback.textContent = `🎉 Congratulations! ${randomNumber} is correct!`;
    endGame();
  } else if (attempts === 0) {
    feedback.textContent = `😢 Game Over! The number was ${randomNumber}.`;
    endGame();
  } else if (userGuess < randomNumber) {
    feedback.textContent = "📉 Too low! Try again.";
  } else {
    feedback.textContent = "📈 Too high! Try again.";
  }

  guessInput.value = "";
});

resetBtn.addEventListener("click", () => {
  location.reload();
});

function endGame() {
  guessBtn.disabled = true;
  guessInput.disabled = true;
  resetBtn.style.display = "inline-block";
}
