"use strict";
// const number = Math.trunc(Math.random() * 20 + 1);
let secretNumber = Math.trunc(Math.random() * 30 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //console.log(guess, typeof guess);
  //When no input
  if (!guess) {
    displayMessage("No number");
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }

  //When player wins
  else if (guess === secretNumber) {
    displayMessage("Correct number! 🏆");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
    }
    document.querySelector(".highscore").textContent = highScore;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 30 + 1);
  score = 20;
  document.querySelector(".score").textContent = "20";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
