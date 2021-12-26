//Width/Heigh - window, any element
//innerHeight - window
//innerWidth - window
//getBoundingClientRect() - any element

console.log(`heigh`, window.innerHeight);
console.log(`width`, window.innerWidth);

const dimensionsBtn = document.querySelector(`.dimensionsBtn`);
const box = document.querySelector(`.box`);

dimensionsBtn.addEventListener(`click`, () => {
  const dimensions = box.getBoundingClientRect();
  console.log(dimensions);
});
