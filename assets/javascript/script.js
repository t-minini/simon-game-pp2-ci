// home screen elements
let homeWrapper = document.getElementById('wrapper-home');
let playBtn = document.getElementById('play-btn');
let rulesBtn = document.getElementById('rules-btn');

// rules screen elements
let rulesWrapper = document.getElementById('rules-wrapper');
let rulesHomeBtn = document.getElementById('rules-home-btn');

// game screen elements
let gameWrapper = document.getElementById('game-wrapper');
let statusScreen = document.getElementById('status-screen-text');
let levelScreen = document.getElementById('level-screen-number');
let greenBtn = document.getElementById('green-btn');
let redBtn = document.getElementById('red-btn');
let yellowBtn = document.getElementById('yellow-btn');
let blueBtn = document.getElementById('blue-btn');
let gameHomeBtn = document.getElementById('home-btn');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');

// game sounds
let greenSound = new Audio('assets/sounds/green-sound.mp3');
let redSound = new Audio('assets/sounds/red-sound.mp3');
let yellowSound = new Audio('assets/sounds/yellow-sound.mp3');
let blueSound = new Audio('assets/sounds/blue-sound.mp3');
let correctSound = new Audio('');
let wrongSound = new Audio('assets/sounds/wrong-sound.mp3');

// game variables
let level = 0;
let computerSequence = [];
let playerSequence = [];
let waitingForPlayer = false;

/**
 * Function to show home screen only
 */
function homeScreenVisible() {
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

/**
 * Function to show rules screen only
 */
function rulesScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.remove('hide');
  gameWrapper.classList.add('hide');
}

/**
 * Function to show game screen only
 */
function gameScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.remove('hide');
  resetBtn.classList.add('hide');
}

/**
 * Function to to return home from rules screen
 */
function backHomeBtnRules() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

/**
 * Function to initialize and start: reset the game level to 0,
 * clear the computer and player's color sequence, update the top status
 * screen, display the start level 01 to the level screen, make the reset
 * button visible, hides start button and proceed to the next level.
 */
function startGame() {
  level = 0;
  computerSequence = [];
  playerSequence = [];
  statusScreen.textContent = 'WATCH THE SEQUENCE!';
  levelScreen.textContent = '01';
  resetBtn.classList.remove('hide');
  startBtn.classList.add('hide');
  nextLevel();
}

/**
 * Function to advance to the next level: increment the game level by 1,
 * update the level display on the screen, clear the player's input sequence.
 */
function nextLevel() {
  level++;
  levelScreen.textContent = level.toString().padStart(2, '0');
  playerSequence = [];
  addNewColorToSequence();
  playNextSequence();
}

/**
 * Function to add a new random color to the computer's sequence:
 * selects a random color from the available options
 * and adds it to the sequence array.
 */
function addNewColorToSequence() {
  const colors = ['green', 'red', 'yellow', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  computerSequence.push(randomColor);
}

/**
 * Function to play the sequence of colors to the player.
 */
function playNextSequence() {
  waitingForPlayer = false;
  let i = 0;
  statusScreen.textContent = 'WATCH THE SEQUENCE!';
  const interval = setInterval(() => {
    if (i >= computerSequence.length) {
      clearInterval(interval);
      waitingForPlayer = true;
      statusScreen.textContent = 'YOUR TURN!';
    } else {
      const color = computerSequence[i];
      playSound(color);
      flashButton(color);
      i++;
    }
  }, 800);
}

/**
 * Function to play the sound associated with a color.
 * @param {string} color - The color whose associated sound should be played.
 */
function playSound(color) {
  switch (color) {
    case 'green':
      greenSound.play();
      break;
    case 'red':
      redSound.play();
      break;
    case 'yellow':
      yellowSound.play();
      break;
    case 'blue':
      blueSound.play();
      break;
  }
}

/**
 * Function to visually flash a color button:
 * retrieves the button element corresponding to the given color,
 * adds the 'active' class to the button to change its appearance,
 * and removes the 'active' class after a short delay (400 milliseconds)
 * to simulate the button flashing.
 * @param {string} color - The color of the button to be flashed.
 */
function flashButton(color) {
  const button = document.getElementById(`${color}-btn`);
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 400);
}

/**
 * Handles the click event for a color button.
 * @param {string} color - The color of the button that was clicked.
 */
function handleColorClick(color) {
  if (!waitingForPlayer) return;

  playerSequence.push(color);
  playSound(color);
  flashButton(color);

  if (
    playerSequence[playerSequence.length - 1] !==
    computerSequence[playerSequence.length - 1]
  ) {
    gameOver();
    return;
  }

  if (playerSequence.length === computerSequence.length) {
    // correctSound.play();
    levelScreen.textContent = 'OK';
    setTimeout(nextLevel, 1000);
  }
}

/**
 * Function to call the startGame function to reset the game
 * to its initial state.
 */
function resetGame() {
  startGame();
}

/**
 * Function to navigate back to the home screen from the game screen.
 * This function hides the game screen and rules screen while showing
 * the home screen. Additionally, it reloads the page to reset the game
 * state and clear any ongoing data.
 */
function backHomeBtnGame() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
  location.reload();
}

// functionality for when player WINS GAME.
function winnerGame() {
  // code here
}

/**
 * Function to handle the game over state when the player makes an incorrect move.
 */
function gameOver() {
  statusScreen.textContent = 'WRONG SEQUENCE!';
  levelScreen.textContent = 'NO';
  wrongSound.play();
  setTimeout(() => {
    statusScreen.textContent = 'CLICK RESET TO PLAY AGAIN!';
    levelScreen.textContent = '--';
    resetBtn.classList.remove('hide');
  }, 2000);
  waitingForPlayer = false;
}

// EVENT LISTENERS
// show home screen on page load
window.addEventListener('DOMContentLoaded', (event) => {
  homeScreenVisible();
});

rulesBtn.addEventListener('click', rulesScreenVisible);
playBtn.addEventListener('click', gameScreenVisible);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
gameHomeBtn.addEventListener('click', backHomeBtnGame);
rulesHomeBtn.addEventListener('click', backHomeBtnRules);

greenBtn.addEventListener('click', () => handleColorClick('green'));
redBtn.addEventListener('click', () => handleColorClick('red'));
yellowBtn.addEventListener('click', () => handleColorClick('yellow'));
blueBtn.addEventListener('click', () => handleColorClick('blue'));
