// /**@type {<K extends keyof HTMLElementTagNameMap>(selectors: K) => HTMLElementTagNameMap[K] | null} */
// const $ = document.querySelector.bind(document);
/**@type {<K extends keyof HTMLElementTagNameMap>(selectors: K) => NodeListOf<HTMLElementTagNameMap[K]>} */
const $$ = document.querySelectorAll.bind(document);

document.body.innerHTML += `<div class="switcher-container">
    <a class="switch-icon"><i></i></a>
    <h2>STYLE SWITCHER</h2>
    <div class="selector-box">
      <div class="clearfix"></div>
      <div class="sw-odd">
        <div class="sw-image">
          <a>
            <img src="https://themesflat.com/html/modaz/images/wordpress-version.png">
          </a>
          <button type="submit">BUY NOW</button>
        </div>
        <h3>SCHEME COLOR</h3>
        <div class="sw-color">
          <label for="sw-color-1" style="--switcher: #f63440"></label>
          <label for="sw-color-2" style="--switcher: #7cc576"></label>
          <label for="sw-color-3" style="--switcher: #cfc300"></label>
          <label for="sw-color-4" style="--switcher: #f8b334"></label>
        </div>
      </div>
      <div class="sw-even">
        <h3>Layout:</h3>
        <a class="sw-light">box</a>
        <a class="sw-dark">wide</a>
      </div>
      <div class="sw-pattern hidden">
        <h3>Background pattern:</h3>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/1.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/2.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/3.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/3.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/3.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/3.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/7.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/8.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/8.png">
        </a>
        <a class="sw-pat">
          <img src="https://themesflat.com/html/modaz/images/pattern/10.png">
        </a>
      </div>
    </div>
  </div>`;

document.addEventListener("DOMContentLoaded", () => loadEvent());

var loadEvent = function () {
  const switcherContainer = document.querySelector(".switcher-container");
  const switcher = document.querySelector(".switch-icon");
  const switchColors = $$(".sw-color > label");
  const switchBox = $$(".sw-even > a");
  const boxTypeContainer = document.querySelector(".sw-pattern");
  const boxStyles = $$(".sw-pat");

  var isSwitchOff = true;
  switcher.addEventListener("click", () => {
    if (isSwitchOff) switcherContainer.style.left = 0;
    else
      switcherContainer.style.left =
        "-" + getComputedStyle(switcherContainer).width;
    switcher.classList.toggle("active");
    isSwitchOff = !isSwitchOff;
  });

  var checkedBoxColor;
  switchColors.forEach((swColor, index) => {
    swColor.addEventListener("click", () => {
      if (checkedBoxColor !== null)
        switchColors[checkedBoxColor].classList.remove("checked");
      checkedBoxColor = index;
      swColor.classList.add("checked");
      localStorage.setItem("checkedBoxColor", index);
      setColor("--switcher", swColor.style.getPropertyValue("--switcher"));
    });
  });

  switchBox.forEach((swBox) => {
    swBox.addEventListener("click", (e) => {
      if (e.currentTarget.textContent === "box") {
        boxTypeContainer.classList.remove("hidden");
      } else {
        boxTypeContainer.classList.add("hidden");
        boxStyles[checkedBoxStyle].classList.remove("checked");
        removeColor("--background");
      }
    });
  });

  var checkedBoxStyle;
  boxStyles.forEach((bxStyle, index) => {
    bxStyle.addEventListener("click", (e) => {
      if (checkedBoxStyle !== null)
        boxStyles[checkedBoxStyle].classList.remove("checked");
      checkedBoxStyle = index;
      bxStyle.classList.add("checked");
      localStorage.setItem("checkedBoxStyle", index);
      setColor(
        "--background",
        "url(" + e.currentTarget.firstElementChild.src + ")"
      );
    });
  });

  initColor("--switcher", "--background");
  loadCheck();

  function initColor(...args) {
    for (const key of args) {
      const value = localStorage.getItem(key);
      if (value) setColor(key, value);
    }
  }

  function loadCheck() {
    checkedBoxStyle = localStorage.getItem("checkedBoxStyle");
    if (checkedBoxStyle === null) checkedBoxStyle = 0;
    boxStyles[checkedBoxStyle].classList.add("checked");
    checkedBoxColor = localStorage.getItem("checkedBoxColor");
    if (checkedBoxColor === null) checkedBoxColor = 0;
    switchColors[checkedBoxColor].classList.add("checked");
  }

  function setColor(key, value) {
    localStorage.setItem(key, value);
    document.documentElement.style.setProperty(key, value);
  }

  function removeColor(key) {
    localStorage.removeItem(key);
    document.documentElement.style.removeProperty(key);
  }
};
