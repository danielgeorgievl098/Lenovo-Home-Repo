const about = document.querySelector(`.about`);
const btns = document.querySelectorAll(`.tab-btn`);
const articles = document.querySelectorAll(`.content`);

about.addEventListener(`click`, function (e) {
  const clicked = e.target.dataset.id;

  if (clicked) {
    //remove active from all btns
    btns.forEach(function (btn) {
      btn.classList.remove(`active`);
      e.target.classList.add(`active`); //adds active on clicked btn
    });

    //hide all articles
    articles.forEach(function (article) {
      article.classList.remove(`active`);
    });

    const element = document.getElementById(clicked);
    element.classList.add(`active`);
  }
});
