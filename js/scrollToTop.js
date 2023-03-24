const btnScrollToTop = document.querySelector(".btn-scroll-top");

btnScrollToTop.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 1000) btnScrollToTop.classList.add("show");
  else btnScrollToTop.classList.remove("show");
});
