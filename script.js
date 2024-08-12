"use strict";

// help functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// intialization each one play the game
const secrectNumber = Math.floor(Math.random() * 20) + 1;
let curScore = 20;
document.querySelector(".score").textContent = curScore;
let higherScore = 0;
// intializaing againg when click again button
document.querySelector(".again").addEventListener("click", function () {
  const secrectNumber = Math.floor(Math.random() * 20) + 1;
  curScore = 20;
  document.querySelector(".score").textContent = curScore;
  document.body.style.backgroundColor = "#222222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = "";
});

//the logic of the game
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // while there is a score to try
  if (curScore > 1) {
    if (!guess) {
      displayMessage("⛔ NO NUMBER !!");
    } else if (guess < 0) {
      displayMessage("⛔ NO NEGATIVE NUMBERS !!");
    } else {
      // correct case
      if (guess === secrectNumber) {
        document.querySelector(".message").textContent =
          "🎇🥳 Congratulations ...";
        document.body.style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = guess;
        document.querySelector(".number").style.width = "30rem";
        higherScore = Math.max(higherScore, curScore);
        document.querySelector(".highscore").textContent = higherScore;
      }
      // higher -- lower case
      else {
        displayMessage(guess > secrectNumber ? "Too High..." : "Too Low..");
        curScore--;
        document.querySelector(".score").textContent = curScore;
      }
    }
  }
  // case end the score
  else {
    curScore = 0;
    document.querySelector(".score").textContent = curScore;
    displayMessage("😥Oh You Lose...");
  }
});
