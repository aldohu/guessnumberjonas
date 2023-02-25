'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'correct number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess'));


*/
const playAgain = document.querySelector('.again');

const startGame = function () {
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.body.style.background = '#222';
  document.querySelector('.number').textContent = '?';
  const highScore = document.querySelector('.highscore');

  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  let score = 20;
  document.querySelector('.score').textContent = score;

  document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    //no input
    if (!guess) {
      document.querySelector('.message').textContent = 'No number';
    }
    //if guess is right
    else if (guess == secretNumber) {
      document.querySelector('.message').textContent =
        'Your guess is correct you won';
      document.querySelector('.number').textContent = secretNumber;
      document.body.style.backgroundColor = '#60b347';

      document.querySelector('.number').style.width = '30rem';
      if (highScore.textContent <= score) {
        highScore.textContent = score;
      }
    }
    //if guess is to low
    else if (guess < secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'You guess is to Low';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //if player lost game
      else {
        document.querySelector('.message').textContent = 'You lost the game';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
    //if guess is to high
    else if (guess > secretNumber) {
      if (score > 1) {
        document.querySelector('.message').textContent = 'You guess is to High';
        score--;
        document.querySelector('.score').textContent = score;
      }
      //if player lost game
      else {
        document.querySelector('.message').textContent = 'You lost the game';
        score--;
        document.querySelector('.score').textContent = score;
      }
    }
  });
};
startGame();
playAgain.addEventListener('click', startGame);
