const productQuantity = document.querySelector(".quantity");
const arrQuantity = [...productQuantity.children];
const [inputQuantity, btnInc, btnDec] = arrQuantity;

let currentQuantity = 1;
window.onload = function () {
  inputQuantity.value = currentQuantity;
};

btnInc.addEventListener("click", () => incDec(1));
btnDec.addEventListener("click", () => incDec(-1));
inputQuantity.addEventListener("change", (e) => {
  let intInput = parseInt(e.target.value);
  if (intInput > 0) currentQuantity = intInput;
  else inputQuantity.value = currentQuantity = 1;
});

function incDec(number) {
  currentQuantity += number;
  if (currentQuantity > 0) inputQuantity.value = currentQuantity;
  else currentQuantity -= number;
}
