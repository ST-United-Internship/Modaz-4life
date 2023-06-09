const seconds = document.querySelector(".seconds .number");
const minutes = document.querySelector(".minutes .number");
const hours = document.querySelector(".hours .number");
const days = document.querySelector(".days .number");


let secvalues = 60,
    minvalues = 60,
    houvalues = 2,
    dayvalues = 9;

const timeFunc = setInterval(()=>{
    secvalues--;
    if (secvalues === 0) {
        minvalues--
        secvalues = 60;
    }
    if (minvalues === 0) {
        houvalues--
        minvalues = 60;
    }
    if (houvalues === 0) {
        dayvalues--
        houvalues = 60;
    }
    if (dayvalues === 0) {
        clearInterval(timeFunc)
    }
    seconds.textContent = secvalues < 10 ? `0${secvalues}` : secvalues;
    minutes.textContent = minvalues < 10 ? `0${minvalues}` : minvalues;
    hours.textContent = houvalues < 10 ? `0${houvalues}` : houvalues;
    days.textContent = dayvalues < 10 ? `0${dayvalues}` : dayvalues;
    minvalues.textContent = minvalues;
},1000)