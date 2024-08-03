// HOME SCREEN ELEMENTS
let homeWrapper = document.getElementById('home-container');
let playBtn = document.getElementById('play-btn');
let rulesBtn = document.getElementById('rules-btn');

// RULES SCREEN ELEMENTS
let rulesWrapper = document.getElementById('rules-container');
let closeBtn = document.getElementById('close-btn');

// GAME SCREEN ELEMENTS
let gameWrapper = document.getElementById('game-container');
let statusScreen = document.getElementById('status-screen-text');
let levelScreen = document.getElementById('level-screen-number');
let greenBtn = document.getElementById('green-btn');
let redBtn = document.getElementById('red-btn');
let yellowBtn = document.getElementById('yellow-btn');
let blueBtn = document.getElementById('blue-btn');
let gameHomeBtn = document.getElementById('home-btn');
let startBtn = document.getElementById('start-btn');
let resetBtn = document.getElementById('reset-btn');

// GAME SOUNDS
const gameSounds = {
  green: new Audio('assets/sounds/green-sound.mp3'),
  red: new Audio('assets/sounds/red-sound.mp3'),
  yellow: new Audio('assets/sounds/yellow-sound.mp3'),
  blue: new Audio('assets/sounds/blue-sound.mp3'),
  correct: new Audio(''),
  win: new Audio('assets/sounds/win.mp3'),
  gameOver: new Audio('assets/sounds/game-over.mp3'),
};

// PRELOAD SOUNDS
Object.values(gameSounds).forEach((sound) => sound.load());

// GAME VARIABLES
let level = 0;
let computerSequence = [];
let playerSequence = [];
let waitingForPlayer = false;
const WINNING_LEVEL = 11;

/**
 * Function to show home screen
 */
function homeScreenVisible() {
  homeWrapper.classList.remove('home-container--hide');
  rulesWrapper.classList.add('rules-container--hide');
  gameWrapper.classList.add('game-container--hide');
}

/**
 * Function to show rules screen
 */
function rulesScreenVisible() {
  homeWrapper.classList.add('home-container--hide');
  rulesWrapper.classList.remove('rules-container--hide');
  gameWrapper.classList.add('game-container--hide');
}

/**
 * Function to show game screen
 */
function gameScreenVisible() {
  homeWrapper.classList.add('home-container--hide');
  rulesWrapper.classList.add('rules-container--hide');
  gameWrapper.classList.remove('game-container--hide');
  resetBtn.classList.add('hide');
  flashSequence(2);
}

/**
 * Function to return home from rules screen
 */
function backHomeBtnRules() {
  homeWrapper.classList.remove('home-container--hide');
  rulesWrapper.classList.add('rules-container--hide');
  gameWrapper.classList.add('game-container--hide');
}

/**
 * Function to initialize and start the game
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
 * Function to advance to the next level
 */
function nextLevel() {
  level++;
  if (level >= WINNING_LEVEL) {
    winnerGame();
  } else {
    levelScreen.textContent = level.toString().padStart(2, '0');
    playerSequence = [];
    addNewColorToSequence();
    playSequence();
  }
}

/**
 * Function to add a new random color to the computer's sequence
 */
function addNewColorToSequence() {
  const colors = ['green', 'red', 'yellow', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  computerSequence.push(randomColor);
}

/**
 * Function to play the sound associated with a color
 * @param {string} color - The color whose associated sound should be played
 */
function playSound(color) {
  if (!isMuted) {
    gameSounds[color].play();
  }
}

/**
 * Function to flash the buttons
 */
function flashButton(color) {
  const button = document.getElementById(`${color}-btn`);
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 400);
}

/**
 * Function to play the computer sequence of colors to the player
 */
function playSequence() {
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
  }, 1000);
}

/**
 * Handles the click event for a color button
 * @param {string} color - The color of the button that was clicked
 */
function handleColorClick(color) {
  if (!waitingForPlayer) return;

  if (playerSequence.length >= computerSequence.length) return;

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
    levelScreen.textContent = 'OK';
    setTimeout(nextLevel, 1000);
  }
}

/**
 * Function to reset the game to its initial state
 */
function resetGame() {
  startGame();
}

/**
 * Function to navigate back to the home screen from the game screen
 */
function backHomeBtnGame() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
  location.reload();
}

/**
 * Function for when the player wins the game
 */
function winnerGame() {
  statusScreen.textContent = 'CONGRATULATIONS, YOU WIN!';
  levelScreen.textContent = '\u{1F3C6}';
  gameSounds.win.play();
  resetBtn.disabled = true;
  flashAll(2);
  setTimeout(() => {
    statusScreen.textContent = 'CLICK RESET TO PLAY AGAIN!';
    levelScreen.textContent = '--';
    resetBtn.classList.remove('hide');
    resetBtn.disabled = false;
  }, 4000);
  waitingForPlayer = false;
}

/**
 * Function to handle the game over state when the player makes an incorrect move
 */
function gameOver() {
  statusScreen.textContent = 'WRONG SEQUENCE!';
  levelScreen.textContent = 'NO';
  resetBtn.disabled = true;
  setTimeout(() => {
    flashAll(1);
    gameSounds.gameOver.play();
    levelScreen.textContent = '\u{1F480}';
    setTimeout(() => {
      statusScreen.textContent = 'CLICK RESET TO PLAY AGAIN!';
      levelScreen.textContent = '--';
      resetBtn.classList.remove('hide');
      resetBtn.disabled = false;
    }, 2000);
  }, 1000);
  waitingForPlayer = false;
}

// EVENT LISTENERS
// Show home screen on page load
window.addEventListener('DOMContentLoaded', () => {
  homeScreenVisible();
});

// Button event listeners
rulesBtn.addEventListener('click', rulesScreenVisible);
playBtn.addEventListener('click', gameScreenVisible);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
gameHomeBtn.addEventListener('click', backHomeBtnGame);
closeBtn.addEventListener('click', backHomeBtnRules);

// Color button event listeners
const colorButtons = {
  green: greenBtn,
  red: redBtn,
  yellow: yellowBtn,
  blue: blueBtn,
};
Object.keys(colorButtons).forEach((color) => {
  const btn = colorButtons[color];
  btn.addEventListener('click', () => handleColorClick(color));
  btn.addEventListener('touchstart', (event) => {
    event.preventDefault();
    handleColorClick(color);
  });
});

/**
 * Function to flash buttons in sequence
 * @param {number} rounds - The number of rounds to blink the sequence
 */
function flashSequence(rounds) {
  const colors = ['green', 'red', 'blue', 'yellow'];
  let currentRound = 0;
  let index = 0;

  function blink() {
    if (currentRound >= rounds) return;

    const color = colors[index];
    flashButton(color);

    index++;
    if (index >= colors.length) {
      index = 0;
      currentRound++;
      setTimeout(blink, 500);
    } else {
      setTimeout(blink, 100);
    }
  }
  setTimeout(() => {
    blink();
  }, 500);
}

/**
 * Function to flash all buttons together
 * @param {number} times - The number of times to flash the buttons
 */
function flashAll(times) {
  const colors = ['green', 'red', 'yellow', 'blue'];
  let count = 0;

  function flash() {
    if (count >= times * 2) return;

    colors.forEach((color) => {
      const button = document.getElementById(`${color}-btn`);
      button.classList.add('active');
    });

    setTimeout(() => {
      colors.forEach((color) => {
        const button = document.getElementById(`${color}-btn`);
        button.classList.remove('active');
      });

      count++;
      setTimeout(flash, 500);
    }, 300);
  }
  flash();
}

let isMuted = false;

function toggleMute() {
  isMuted = !isMuted;

  const soundOffIcon = document.getElementById('sound-off');
  const soundOnIcon = document.getElementById('sound-on');

  if (isMuted) {
    soundOffIcon.style.display = 'none';
    soundOnIcon.style.display = 'block';
  } else {
    soundOffIcon.style.display = 'block';
    soundOnIcon.style.display = 'none';
  }
}

document.getElementById('sound-btns').addEventListener('click', toggleMute);
