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

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = 'No number';
  } else if (guess == secretNumber) {
    document.querySelector('.message').textContent = 'Your guess is correct';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'You guess to Low';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'You guess to High';
  }
});
