'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn btn--new');
const btnRoll = document.querySelector('.btn btn--roll');
const btnHold = document.querySelector('.btn btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  //1.Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //2.Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  //3.check for rolled 1: if true,switch to next player
});
