'use strict';

const IMGSIZE = 80;
const TIME_LIMIT = 10;
const CARROT_COUNT = 5;
const BUG_COUNT = 5;
const PLAY = true;

const play = document.querySelector('.play');
const field = document.querySelector('.field');
const fieldRect = field.getBoundingClientRect();
const time = document.querySelector('.time');
const count = document.querySelector('.count');
const alert = document.querySelector('.alert');
const replay = document.querySelector('.replay');
const message = document.querySelector('.message');

let time_limit = TIME_LIMIT;
let bool = true;
count.innerHTML = CARROT_COUNT;

play.addEventListener('click', ()=> {
  createGame('carrot', CARROT_COUNT, 'img/carrot.png');
  createGame('bug', BUG_COUNT, 'img/bug.png');
  playGame();
});

replay.addEventListener('click', ()=> {
  alert.className = 'alert alert__hide';
  while (field.firstChild != null) {
    field.removeChild(field.firstChild);
  }
  count.innerHTML = CARROT_COUNT;
  time_limit = TIME_LIMIT;
  bool = true;
  createGame('carrot', CARROT_COUNT, 'img/carrot.png');
  createGame('bug', BUG_COUNT, 'img/bug.png');
  playGame();
});

function createGame(className, count, imgPath) {
  const xmin = 0;
  const ymin = 0;
  const xmax = fieldRect.width - IMGSIZE;
  const ymax = fieldRect.height - IMGSIZE;
  for (let i = 0; i < count; i++) {
    const initGame = document.createElement('img');
    initGame.setAttribute('class', className);
    initGame.setAttribute('src', imgPath);
    const x = randomNumber(xmin, xmax);
    const y = randomNumber(ymin, ymax);
    initGame.style.position = 'absolute';
    initGame.style.left = `${x}px`;
    initGame.style.top = `${y}px`;
    field.appendChild(initGame);
  }
}

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

window.addEventListener('click', (e)=> {
  if (e.target.className == 'carrot') {
    field.removeChild(e.target);
    count.innerHTML--;
    if (count.innerHTML == 0) {
      gameOver(true);
    }
  } else if (e.target.className == 'bug') {
    gameOver(false);
  }
});

function gameOver(bol) {
  alert.className = 'alert';
  if (bol) {
    bool = false;
    message.innerHTML = 'YOU WIN!';
  } else {
    bool = false;
    message.innerHTML = 'YOU LOSE!';

  }
}

function playGame() {
  time.innerHTML = time_limit;
  setTimeout(function() {

    if(time_limit == 0) {
      return gameOver(false);
    }
    time_limit--;
    if (bool) {
      playGame();
    }
  }, 1000);
}