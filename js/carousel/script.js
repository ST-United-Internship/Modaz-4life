$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    center: true,
    items: 3,
    autoWidth: true,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  });
});
