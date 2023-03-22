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
    if (secvalues == 0) {
        minvalues--
        secvalues = 60;
    }
    seconds.textContent = secvalues < 10 ? `0${secvalues}` : secvalues;
    minvalues.textContent = minvalues;
},1000)