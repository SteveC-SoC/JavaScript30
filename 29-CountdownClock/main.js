let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");

function timer(seconds) {
  //clear any existing timers
  clearInterval(countdown);

  const now = Date.now(); //this is in milliseconds
  const then = now + seconds * 1000; //times to make seconds
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    //reduce by one second
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //check if we should stop!
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    //display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Be back at ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`; //this will display in a 24 hour format
  // endTime.textContent = `Be back at ${adjustedHour}:${minutes< 10 ? '0' : '' }${minutes}`; //this will display in a 12 hour format
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
})
