'use strict';

///////////////////////////variables///////////////////
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close-modal');
const showBtns = document.querySelectorAll('.show-modal'); //gets ALL the buttons with that class
//we create a function to avoid code repetition
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//loops over array of buttons
for (let i = 0; i < showBtns.length; i++) {
  //removes the class hidden on every click
  showBtns[i].addEventListener('click', openModal);
}

//adds class "hidden" to modal
closeBtn.addEventListener('click', closeModal); //we NEVER ENVOKE the func here, because this way it will execute before we actually click

//when we click outside
overlay.addEventListener('click', closeModal);

////////////////////////KEY PRESS EVENTS/////////////////

//when you press a key it returns an object and we pass this object as argument
document.addEventListener('keydown', function (event) {
  //if the key on the event object has a value of Escape
  if (event.key === 'Escape') {
    //if modal does NOT have "hidden" in it's classList
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
