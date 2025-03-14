'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const closeModal = document.querySelector('.close-modal');

const showModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click', openModal);

closeModal.addEventListener('click', close);

overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.remove('hidden')) {
    close();
  }
});
