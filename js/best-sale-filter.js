let lstFilterBtn = document.querySelector(".best-sale-filter");
let elem = document.querySelector(".best-sale");
let iso = new Isotope(elem, {
  itemSelector: ".product-item",
  layoutMode: "fitRows",
});

let atSelectedIdx = 0;
let arrFilterBtn = [...lstFilterBtn.children];
arrFilterBtn.forEach((child, index) => {
  child.addEventListener("click", () => {
    if (atSelectedIdx !== undefined)
      arrFilterBtn[atSelectedIdx].classList.remove("selected");
    atSelectedIdx = index;
    child.classList.add("selected");
    let name = child.getAttribute("data-filter");
    iso.arrange({
      filter: function (itemElem) {
        if (name === "*") return true;
        return itemElem.classList.contains(name);
      },
    });
  });
});
