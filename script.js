const startButtonSelector = ".button__start"
const stopButtomSelector = ".button__stop"
const hoursInputSelector = "#hours"
const minutesInputSelector = "#minutes"
const secondsInputSelector = "#seconds"

const button__start = document.querySelector(startButtonSelector)
const button__stop = document.querySelector(stopButtomSelector)
const hoursInput = document.querySelector(hoursInputSelector)
const minutesInput = document.querySelector(minutesInputSelector)
const secondsInput = document.querySelector(secondsInputSelector)

let remainigTime;

let hours;
let minutes;
let seconds;

function startTimer() {
    // Event.preventDefault
    hours = parseInt(hoursInput.value)
    minutes = parseInt(minutesInput.value)
    seconds = parseInt(secondsInput.value)

    remainigTime = hours * 3600 + minutes * 60 + seconds;

    intervalID = setInterval(updateTimer, 1000);  // выполняет другую функцию с интервалом 

    hideElement(button__start)
    showElement(button__stop)

    document.documentElement.requestFullscreen();
}

function updateTimer() {
    if(remainigTime > 0){
        remainigTime = remainigTime - 1

        hours = Math.floor(remainigTime/ 3600);
        minutes = Math.floor(remainigTime/ 60);
        seconds = remainigTime % 60;

        hoursInput.value = hours.toString().padStart(2, "0");
        minutesInput.value = minutes.toString().padStart(2, "0");
        secondsInput.value = seconds.toString().padStart(2, "0");
    }
    else{
        stopTimer();
    }

}


function stopTimer() {
    clearInterval(intervalID)

    hideElement(button__stop);
    showElement(button__start);

    document.exitFullscreen();
}


function hideElement(element){
    element.classList.add('hide');
}

function showElement(element){
    element.classList.remove('hide');
}


button__start.addEventListener('click', startTimer) 
button__stop.addEventListener('click', stopTimer)