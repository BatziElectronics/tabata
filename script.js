var timerId;
var repetitions;
var timerDuration;
var restDuration;
var timerName;
var currentTime;
var isResting;
var audio;
function startTimer() {
repetitions = parseInt(document.getElementById("repetitions-input").value);
timerDuration = parseInt(document.getElementById("timer-input").value);
restDuration = parseInt(document.getElementById("rest-input").value);
timerName = document.getElementById("name-input").value;
currentTime = timerDuration;
isResting = false;
if (timerId) {
clearInterval(timerId);
}
updateTimerDisplay();
timerId = setInterval(updateTimer, 1000);
}
function updateTimer() {
if (currentTime > 0) {
currentTime--;
updateTimerDisplay();
} else {
clearInterval(timerId);
if (isResting) {
repetitions--;
if (repetitions > 0) {
currentTime = timerDuration;
isResting = false;
updateTimerDisplay();
timerId = setInterval(updateTimer, 1000);
} else {
document.getElementById("message").innerHTML = "¡Felicidades, has terminado!";
playSound();
}
} else {
currentTime = restDuration;
isResting = true;
updateTimerDisplay();
timerId = setInterval(updateTimer, 1000);
playSound();
}
}
}
function updateTimerDisplay() {
var minutes = Math.floor(currentTime / 60);
var seconds = currentTime % 60;
document.getElementById("timer").innerHTML = formatTime(minutes) + ":" + formatTime(seconds);
}
function formatTime(time) {
return time < 10 ? "0" + time : time;
}
function playSound() {
audio = new Audio("sound.mp3");
audio.play();
}
