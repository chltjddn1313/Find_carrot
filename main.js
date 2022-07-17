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
const message = document.querySelector('.message');

play.addEventListener('click', ()=> {
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
let time_limit = TIME_LIMIT;

window.addEventListener('click', (e)=> {
  if (e.target.className == 'carrot') {

  } else if (e.target.className == 'bug') {
    message.innerHTML = 'YOU LOSE!';
    return alert.className = 'alert';
  }
});

function playGame() {
  time.innerHTML = time_limit;
  count.innerHTML = CARROT_COUNT;
  setTimeout(function() {

    if(time_limit == 0) {
      message.innerHTML = 'YOU LOSE!';
      return alert.className = 'alert';
    }
    time_limit--;
    playGame();
  }, 1000);
}