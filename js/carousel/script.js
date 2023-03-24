$(document).ready(function () {
  $(".slider-trending").owlCarousel({
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


$(document).ready(function () {
  $(".slider-banner").owlCarousel({
    loop: true,
    dots: true,
    items: 1,
    autoPlay: true,
    smartSpeed: 1200,
  });
});