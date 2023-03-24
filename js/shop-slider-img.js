const swiperWrapper = document.querySelector(".swiper-main > .swiper-wrapper");
const swiperSlides = document.querySelectorAll(".swiper-main .swiper-slide");
const swiperThumbs = document.querySelectorAll(".swiper-thumbs .swiper-slide");
const productBackground = document.querySelector(".product-background-img");
const imgScope = document.querySelector(".product-img-scope");
const imgTarget = document.querySelector(".product-img-target");
const closeImgScope = document.querySelector(".product-img-scope > button");
const openImgScopeBtn = document.querySelectorAll(
  ".swiper-main .fa-search-plus"
);
let prevIdx = 0;

swiperThumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    if (prevIdx !== undefined) swiperThumbs[prevIdx].classList.remove("active");
    thumb.classList.add("active");
    const { width } = swiperSlides[index].getBoundingClientRect();
    swiperWrapper.style.transform = `translateX(-${index * width}px)`;
    prevIdx = index;
  });
});

closeImgScope.addEventListener("click", () => {
  productBackground.style.display = "none";
  imgScope.style.display = "none";
});

productBackground.addEventListener("click", () => {
  productBackground.style.display = "none";
  imgScope.style.display = "none";
});

console.log(openImgScopeBtn);

openImgScopeBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    productBackground.style.display = "block";
    imgScope.style.display = "block";
    let source = swiperSlides[index].lastElementChild.src;
    imgTarget.src = source;
  });
});
