//.first - after 1 sec red
//.second - after 3 sec blue; 4sec
//.third - after 2 sec green; 6sec
// IN SEQUNCE

const promiseBtn = document.querySelector(`.promiseBtn`);

promiseBtn.addEventListener(`click`, () => {
  addcolor(1000, `.first`, `red`)
    .then(() => addcolor(3000, `.second`, `blue`)) //because addColor returns a promise, you can keep chaining .then each time you envoke it
    .then(() => addcolor(2000, `.third`, `green`))
    .catch((err) => console.log(err));
});

function addcolor(time, selector, varnish) {
  const element = document.querySelector(selector);
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = varnish;
        resolve(); // if you don't resolve here, the promise is still pending meaning .then won't work. You need to either RESOLVE or REJECT EVERY TIME
      }, time);
    } else {
      reject(`There is no such element: "${selector}"`);
    }
  });
}
