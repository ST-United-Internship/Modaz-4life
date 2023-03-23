$(document).ready(function () {
  // hide in default
  $("#vertical-item-menu").hide();
  // show menu
  $("#btn-menu-bar").click(function (e) {
    $("#vertical-item-menu").slideToggle();
    $("#icon-btn").toggleClass("bi bi-x");
  });

  // Hide sub menu default
  $(".sub-menu").slideUp();

  $("#shop-item").click(function (e) {
    // Show sub menu
    $("#shop-item-sub").slideToggle();
    // Change icon
    $("#shop-item-icon-down").toggleClass("fbi bi-chevron-up");
  });

  $("#page-item").click(function (e) {
    // Show sub menu
    $("#page-item-sub").slideToggle();
    // Change icon
    $("#page-item-icon-down").toggleClass("fbi bi-chevron-up");
  });

  $("#blog-item").click(function (e) {
    // Show sub menu
    $("#blog-item-sub").slideToggle();
    // Change icon
    $("#blog-item-icon-down").toggleClass("fbi bi-chevron-up");
  });
});
