const filterBtn = document.querySelector(".show-filter");
const boxFilter = document.querySelector(".box-filter-product");
const closeBtn = document.querySelector(".btn-close");
const searchBtn = document.querySelector(".search-product");
const searchBox = document.querySelector(".shop-search");

let rootColor = getComputedStyle(document.documentElement).getPropertyValue(
  "--switcher"
);

let isOpenFilter = false;
filterBtn.addEventListener("click", () => {
  isOpenFilter = !isOpenFilter;
  if (!isOpenFilter) boxFilter.style.maxHeight = "0";
  else boxFilter.style.maxHeight = "1600px";
  filterBtn.classList.toggle("active");
});

closeBtn.onclick = () => {
  isOpenFilter = !isOpenFilter;
  boxFilter.style.maxHeight = "0";
};

let isOpenSearch = false;
searchBtn.addEventListener("click", () => {
  isOpenSearch = !isOpenSearch;
  if (!isOpenSearch) searchBox.style.maxHeight = "0";
  else searchBox.style.maxHeight = "100px";
  searchBtn.classList.toggle("active");
});
