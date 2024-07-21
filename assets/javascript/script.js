// home screen elements
// let homeHeading = document.getElementById('home-heading');
// let homeBtns = document.getElementById('home-btns');
let homeWrapper = document.getElementById('home-wrapper');
let playBtn = document.getElementById('play-btn');
let rulesBtn = document.getElementById('rules-btn');
let rulesWrapper = document.getElementById('rules-wrapper');

// game screen elements
let gameWrapper = document.getElementById('game-wrapper');
let topGameScreen = document.getElementById('top-screen-text');
let levelScreen = document.getElementById('level-screen-number');
let greenBtn = document.getElementById('green-btn');
let redBtn = document.getElementById('red-btn');
let yellowBtn = document.getElementById('yellow-btn');
let blueBtn = document.getElementById('blue-btn');
let backBtn = document.getElementById('back-btn');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');

// game sounds
let greenSound = new Audio('');
let redSound = new Audio('');
let yellowSound = new Audio('');
let blueSound = new Audio('');
let correctSound = new Audio('');
let wrongSound = new Audio('');

// functions
// show home screen only
function homeScreenVisible() {
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
}

// event listeners
window.addEventListener('DOMContentLoaded', (event) => {
  homeScreenVisible();
});
