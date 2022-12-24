import "./styles/styles.css";

// The data/time we want to countdown to
const countDownDate = new Date("Feb 21, 2023 18:00:00").getTime();

// Run myfunc every second
const myfunc = setInterval(function() {

const now = new Date().getTime();
const timeleft = countDownDate - now;
    
// Calculating the days, hours, minutes and seconds left
const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
const hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
// Result is output to the specific element
document.getElementById("days").innerHTML = String(days).length > 1 ? days : `0${days}`;
document.getElementById("hours").innerHTML = String(hours).length > 1 ? hours : `0${hours}`;
document.getElementById("mins").innerHTML = String(minutes).length > 1 ? minutes : `0${minutes}`;
document.getElementById("secs").innerHTML = String(seconds).length > 1 ? seconds : `0${seconds}`;
    
// Display the message when countdown is over
if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = ""
    document.getElementById("hours").innerHTML = "" 
    document.getElementById("mins").innerHTML = ""
    document.getElementById("secs").innerHTML = ""
}
}, 1000);