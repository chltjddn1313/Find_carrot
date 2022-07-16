'use strict';

const play = document.querySelector('.play');
const field = document.querySelector('.field');
const fieldRect = field.getBoundingClientRect();
const IMGSIZE = 80;

play.addEventListener('click', ()=> {
  playGame('carrot', 5, 'img/carrot.png');
  playGame('bug', 5, 'img/bug.png');
  console.log(fieldRect);
});

function playGame(className, count, imgPath) {
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