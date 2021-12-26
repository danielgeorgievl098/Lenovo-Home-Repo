$(document).ready(function () {
  // init isotope
  let $grid = $(".picture-container").isotope({});
  //filte buttons on click
  $(`.filter-button-group`).on(`click`, `button`, function () {
    let filterValue = $(this).attr(`data-filter`);
    $grid.isotope({
      filter: filterValue,
    });
  });
  //makes sure that the iso works only after iamges have loaded, to prevent laod time
  $grid.imagesLoaded().progress(function () {
    $grid.isotope("layout");
  });
});
