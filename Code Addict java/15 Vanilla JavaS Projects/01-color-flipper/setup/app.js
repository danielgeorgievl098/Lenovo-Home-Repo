const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById(`btn`);
const color = document.querySelector(`.color`);

btn.addEventListener(`click`, function () {
  const randomNumber = Math.floor(Math.random() * colors.length); //gets a random num bt 0-3
  document.body.style.backgroundColor = colors[randomNumber]; //sets the color to the random num
  color.textContent = colors[randomNumber]; //prints the text of random num
});
