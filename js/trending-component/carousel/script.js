$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 3,
    nav: true,
    margin: 30,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      675: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
