// home screen elements
// let homeHeading = document.getElementById('home-heading');
// let homeBtns = document.getElementById('home-btns');
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

// FUNCTIONS
// show home screen only
function homeScreenVisible() {
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

// go to RULES screen
function rulesScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.remove('hide');
  gameWrapper.classList.add('hide');
}

// functionality for HOME button on RULES screen
function backHomeBtnRules() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

// go to GAME screen
function gameScreenVisible() {
  homeWrapper.classList.add('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.remove('hide');
  resetBtn.classList.add('hide');
}

// functionality for START button on GAME screen
function starGame() {
  // code here
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

// go to rules screen
rulesBtn.addEventListener('click', () => {
  rulesScreenVisible();
});

// go to game screen
playBtn.addEventListener('click', () => {
  gameScreenVisible();
});

// "HOME" button at GAME screen
gameHomeBtn.addEventListener('click', () => {
  backHomeBtnGame();
});

// "HOME" button at RULES screen
rulesHomeBtn.addEventListener('click', () => {
  backHomeBtnRules();
});
