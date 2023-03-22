$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    center: false,
    items: 3,
    margin: 10,
    loop: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      680: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
