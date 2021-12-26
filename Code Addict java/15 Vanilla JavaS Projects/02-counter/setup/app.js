let count = 0;

const buttons = document.querySelectorAll(`.btn`);
const value = document.querySelector(`#value`);

buttons.forEach(function (item) {
  item.addEventListener(`click`, function (e) {
    const styles = e.currentTarget.classList; //sets styles to the equal to the class on the btn you just clicked on

    if (styles.contains(`decrease`)) {
      count--;
    } else if (styles.contains(`increase`)) {
      count++;
    } else {
      count = 0;
    }
    value.textContent = count;

    if (count > 0) {
      value.style.color = `green`;
    } else if (count < 0) {
      value.style.color = `red`;
    } else {
      value.style.color = `black`;
    }
  });
});
