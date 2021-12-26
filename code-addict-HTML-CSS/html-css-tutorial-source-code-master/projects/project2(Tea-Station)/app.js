const navbar = document.getElementById(`navbar`);
const navBtn = document.getElementById(`nav-btn`);
const navClose = document.getElementById(`close`);

navBtn.addEventListener(`click`, () => {
  navbar.classList.add("showNav");
});

navClose.addEventListener(`click`, () => {
  navbar.classList.remove("showNav");
});
