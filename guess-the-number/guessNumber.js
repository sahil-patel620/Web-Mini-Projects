// Load the cheering sound
const cheeringSound = new Audio("cheering.mp3");

let randomNum = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const footer = document.querySelector(".footer");

const startBtn = document.createElement("button");
let prevGuess = [];
let numGuess = 0;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter  number more than 1");
  } else if (guess > 100) {
    alert("Please enter number less than 100");
  } else {
    prevGuess.push(guess);
    numGuess++;
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over , Number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You guessed it Right");
    cheeringSound.play(); // Play cheering sound
    createConfetti();
    setTimeout(removeConfetti, 10000); // Remove confetti after 4 seconds
    endGame();
  } else if (guess > randomNum) {
    displayMessage("Number is too high");
  } else {
    displayMessage("Number is too low");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}  `;
  //   numGuess++;
  remaining.innerHTML = `${10 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  startBtn.classList.add("newGame");
  startBtn.innerHTML = "Start New Game";
  footer.appendChild(startBtn);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector(".newGame");
  newGameBtn.addEventListener("click", function (e) {
    randomNum = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 0;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    remaining.innerHTML = `${10 - numGuess} `;
    userInput.removeAttribute("disabled");
    footer.removeChild(startBtn);
    playGame = true;
  });
}

// trying to add animation
function createConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.setProperty("--color", randomColor());
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDelay = `${Math.random() * 4}s`;
    confettiContainer.appendChild(confetti);
  }
}

function randomColor() {
  const colors = [
    "#ff0a54",
    "#ff477e",
    "#ff85a1",
    "#fbb1bd",
    "#f7cad0",
    "#ff57bb",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function removeConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  confettiContainer.innerHTML = "";
}
