$(document).ready(function () {
  $(`#menu-btn`).click(changeNav);

  function changeNav() {
    $(`#nav-links`).toggle(2000);
    $(`#menu-btn`).toggleClass(`turn`);
  }
});
