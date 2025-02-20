// HOME SCREEN ELEMENTS
const homeWrapper = document.getElementById('container--home');
const playBtn = document.getElementById('play-btn');
const rulesBtn = document.getElementById('rules-btn');

// RULES SCREEN ELEMENTS
const closeBtn = document.getElementById('close-btn');
const rulesWrapper = document.getElementById('container--rules');

// GAME SCREEN ELEMENTS
const blueBtn = document.getElementById('blue-btn');
const gameHomeBtn = document.getElementById('home-btn');
const gameWrapper = document.getElementById('container--game');
const greenBtn = document.getElementById('green-btn');
const levelScreen = document.getElementById('level-screen-number');
const redBtn = document.getElementById('red-btn');
const resetBtn = document.getElementById('reset-btn');
const soundOffIcon = document.getElementById('sound-off');
const soundOnIcon = document.getElementById('sound-on');
const startBtn = document.getElementById('start-btn');
const statusScreen = document.getElementById('status-screen-text');
const yellowBtn = document.getElementById('yellow-btn');

// GAME SOUNDS
const gameSounds = {
  blue: new Audio('assets/sounds/blue-sound.mp3'),
  gameOver: new Audio('assets/sounds/game-over-sound.mp3'),
  green: new Audio('assets/sounds/green-sound.mp3'),
  red: new Audio('assets/sounds/red-sound.mp3'),
  win: new Audio('assets/sounds/win-sound.mp3'),
  yellow: new Audio('assets/sounds/yellow-sound.mp3'),
};

// PRELOAD SOUNDS
Object.values(gameSounds).forEach((sound) => sound.load());

// GAME VARIABLES
const WINNING_LEVEL = 11;
let computerSequence = [];
let isMuted = false;
let level = 0;
let playerSequence = [];
let waitingForPlayer = false;

// NAVIGATION LOGIC STARTS HERE
/**
 * Show home screen
 */
function homeScreenVisible() {
  homeWrapper.classList.remove('container--hide');
  rulesWrapper.classList.add('container--hide');
  gameWrapper.classList.add('container--hide');
}

/**
 * Show rules screen
 */
function rulesScreenVisible() {
  homeWrapper.classList.add('container--hide');
  rulesWrapper.classList.remove('container--hide');
  gameWrapper.classList.add('container--hide');
}

/**
 * Show game screen
 */
function gameScreenVisible() {
  homeWrapper.classList.add('container--hide');
  rulesWrapper.classList.add('container--hide');
  gameWrapper.classList.remove('container--hide');
  resetBtn.classList.add('hide');
  flashSequence(2);
}

/**
 * Navigate back to home screen from rules screen
 */
function backHomeBtnRules() {
  homeWrapper.classList.remove('container--hide');
  rulesWrapper.classList.add('container--hide');
  gameWrapper.classList.add('container--hide');
}

/**
 * Navigate back to the home screen from the game screen
 */
function backHomeBtnGame() {
  homeWrapper.classList.remove('hide');
  rulesWrapper.classList.add('hide');
  gameWrapper.classList.add('hide');
  location.reload();
}

// GAME LOGIC STARTS HERE
/**
 * Initialize and start the game
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
 * Advance to the next game level
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
 * Add a new random color to the computer's sequence
 */
function addNewColorToSequence() {
  const colors = ['green', 'red', 'yellow', 'blue'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  computerSequence.push(randomColor);
}

/**
 * Play the sound associated with a color
 * @param {string} color - The color whose associated sound should be played
 */
function playSound(color) {
  if (!isMuted) {
    gameSounds[color].play();
  }
}

/**
 * Flash the buttons
 */
function flashButton(color) {
  const button = document.getElementById(`${color}-btn`);
  button.classList.add('active');
  setTimeout(() => {
    button.classList.remove('active');
  }, 400);
}

/**
 * Play the computer sequence of colors to the player
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
 * Handle the click event for a color button
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
 * Reset the game to its initial state
 */
function resetGame() {
  startGame();
}

/**
 * Player wins the game
 */
function winnerGame() {
  statusScreen.textContent = 'CONGRATULATIONS, YOU WIN!';
  levelScreen.textContent = '🏆';
  if (!isMuted) {
    gameSounds.win.play();
  }
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
 * Player looses the game
 */
function gameOver() {
  statusScreen.textContent = 'WRONG SEQUENCE!';
  levelScreen.textContent = 'NO';
  resetBtn.disabled = true;
  setTimeout(() => {
    flashAll(1);
    if (!isMuted) {
      gameSounds.gameOver.play();
    }
    levelScreen.textContent = '💀';
    setTimeout(() => {
      statusScreen.textContent = 'CLICK RESET TO PLAY AGAIN!';
      levelScreen.textContent = '--';
      resetBtn.classList.remove('hide');
      resetBtn.disabled = false;
    }, 2000);
  }, 1000);
  waitingForPlayer = false;
}

/**
 * Flash buttons in sequence
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
 * Flash all buttons together
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

/**
 * Mute and Unmute Buttons
 */
function toggleMute() {
  isMuted = !isMuted;

  if (isMuted) {
    soundOffIcon.style.display = 'none';
    soundOnIcon.style.display = 'block';
  } else {
    soundOffIcon.style.display = 'block';
    soundOnIcon.style.display = 'none';
  }
}

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', () => {
  homeScreenVisible();
});
rulesBtn.addEventListener('click', rulesScreenVisible);
playBtn.addEventListener('click', gameScreenVisible);
startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
gameHomeBtn.addEventListener('click', backHomeBtnGame);
closeBtn.addEventListener('click', backHomeBtnRules);

// Event listener for sound buttons
document.getElementById('sound-btns').addEventListener('click', toggleMute);

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

// Keyboard event listeners for sound icons
document.querySelectorAll('.sound-icon').forEach((icon) => {
  icon.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' || event.key === ' ') {
      icon.click();
    }
  });
});
