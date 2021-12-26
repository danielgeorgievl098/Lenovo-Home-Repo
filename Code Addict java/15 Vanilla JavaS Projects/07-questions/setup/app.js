//using selectors inside the element
// traversing the dom

const questionBtns = document.querySelectorAll(`.question-btn`);

questionBtns.forEach(function (item) {
  item.addEventListener(`click`, function (event) {
    const parent = event.currentTarget.parentElement.parentElement;

    if (parent.classList.contains(`show-text`)) {
      parent.classList.remove(`show-text`);
    } else {
      parent.classList.add(`show-text`);
    }
  });
});
