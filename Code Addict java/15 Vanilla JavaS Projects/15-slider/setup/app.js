const slides = document.querySelectorAll(`.slide`);
const prevBtn = document.querySelector(`.prevBtn`);
const nextBtn = document.querySelector(`.nextBtn`);

slides.forEach(function (each, index) {
  each.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener(`click`, function () {
  counter++;
  slide();
});

prevBtn.addEventListener(`click`, function () {
  counter--;
  slide();
});

function slide() {
  //wroking with slides(optional, as you ca just hide btns like below)

  //   if (counter === slides.length) {
  //     counter = 0;
  //   }

  //   if (counter < 0) {
  //     counter = slides.length - 1;
  //   }

  //working with buttons
  if (counter < slides.length - 1) {
    nextBtn.style.display = `block`;
  } else {
    nextBtn.style.display = `none`;
  }

  if (counter > 0) {
    prevBtn.style.display = `block`;
  } else {
    prevBtn.style.display = `none`;
  }

  slides.forEach(function (each) {
    each.style.transform = `translateX(-${counter * 100}%)`;
  });
}

prevBtn.style.display = `none`;
