'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.number').textContent = 14;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 11;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  // Whene there is no output
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number';

    displayMessage('No Number');

    // when players wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number';
    displayMessage('Correct Number');

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Whene guess is too High
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too High' : 'Too Low';
      score--;

      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game';
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {

  //   // Whene guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too Low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';

  document.querySelector('body').style.backgroundColor = '#222';
});
