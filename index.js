// Greeting logic
const greetings = [
    "Welcome, gamer!",
    "Ready to have fun?",
    "Choose a game and start playing!",
    "Let's test your skills!",
    "Enjoy your time at RevoFun!"
  ];
  document.getElementById("dynamicGreeting").textContent =
    greetings[Math.floor(Math.random() * greetings.length)];
  
  // Hover animation on cards
  const cards = document.querySelectorAll(".game-card");
  
  cards.forEach(card => {
    card.addEventListener("mouseover", () => {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
    });
    card.addEventListener("mouseout", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)";
    });
  });
  
  
  
  