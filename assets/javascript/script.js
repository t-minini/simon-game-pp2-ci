// home screen elements
let homeWrapper = document.getElementById('home-wrapper');
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
let greenSound = new Audio('../sounds/green-sound.mp3');
let redSound = new Audio('../sounds/red-sound.mp3');
let yellowSound = new Audio('../sounds/yellow-sound.mp3');
let blueSound = new Audio('../sounds/blue-sound.mp3');
let correctSound = new Audio('');
let wrongSound = new Audio('../sounds/wrong-sound.mp3');

// game variables
let level = 0;
let sequence = [];
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
  sequence = [];
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
  levelScreen.textContent = level.tostring().padStart(2, '0');
  playerSequence = [];
}

// functionality for RESET button on GAME screen
function resetGame() {
  // code here
}

// functionality for HOME button on GAME screen
function backHomeBtnGame() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

// functionality for when player WINS GAME.
function winnerGame() {
  // code here
}

// functionality for when is GAME OVER.
function gameOver() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.remove('hide');
  resetBtn.classList.add('hide');
}

// EVENT LISTENERS
// show home screen on page load
window.addEventListener('DOMContentLoaded', (event) => {
  homeScreenVisible();
});

rulesBtn.addEventListener('click', rulesScreenVisible);
playBtn.addEventListener('click', gameScreenVisible);
startBtn.addEventListener('click', startGame);
gameHomeBtn.addEventListener('click', backHomeBtnGame);
rulesHomeBtn.addEventListener('click', backHomeBtnRules);
