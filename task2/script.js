let startTime, updateTime, elapsedTime = 0;
let running = false;

const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');

document.getElementById('start').addEventListener('click', function() {
    if (!running) {
        startTime = Date.now() - elapsedTime;
        updateTime = setInterval(updateDisplay, 10);
        running = true;
    }
});

document.getElementById('stop').addEventListener('click', function() {
    if (running) {
        clearInterval(updateTime);
        elapsedTime = Date.now() - startTime;
        running = false;
    }
});

document.getElementById('reset').addEventListener('click', function() {
    clearInterval(updateTime);
    running = false;
    elapsedTime = 0;
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
});

function updateDisplay() {
    elapsedTime = Date.now() - startTime;

    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);

    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
    millisecondsElement.textContent = String(milliseconds).padStart(2, '0');
}
