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
let greenSound = new Audio('');
let redSound = new Audio('');
let yellowSound = new Audio('');
let blueSound = new Audio('');
let correctSound = new Audio('');
let wrongSound = new Audio('');

// game variables
let level = 0;
let sequence = [];
let playerSequence = [];
let waitingForPlayer = false;

// FUNCTIONS
// hide and show screens
function homeScreenVisible() {
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

function rulesScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.remove('hide');
  gameWrapper.classList.add('hide');
}

function gameScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.remove('hide');
  resetBtn.classList.add('hide');
}

// functionality for HOME button on RULES screen
function backHomeBtnRules() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

// game functions

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

function nextLevel() {
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

// "HOME" button at GAME screen
gameHomeBtn.addEventListener('click', () => {
  backHomeBtnGame();
});

// "HOME" button at RULES screen
rulesHomeBtn.addEventListener('click', () => {
  backHomeBtnRules();
});
