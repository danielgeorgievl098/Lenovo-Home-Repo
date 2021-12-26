const btn = document.querySelector(`.nav__btn`);
btn.addEventListener(`click`, showNav);

function showNav() {
  document.querySelector(`.nav__links`).classList.toggle(`show__links`);
}
