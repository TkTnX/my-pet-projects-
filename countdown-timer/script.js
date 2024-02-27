const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const endDate = new Date("Mar, 18, 2024, 23:59:59");
let interval;

const timerFunc = () => {
  const now = new Date();
  const timeDiff = endDate - now;

  if (timeDiff < 0) {
    daysEl.innerText = "0";
    hoursEl.innerText = "0";
    minutesEl.innerText = "0";
    secondsEl.innerText = "0";
    clearInterval(interval);
    alert("С Днём Рождения!");
    return;
  }

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  daysEl.innerText = days;
  hoursEl.innerText = hours;
  minutesEl.innerText = minutes;
  secondsEl.innerText = seconds;
};

interval = setInterval(() => {
  timerFunc();
}, 1000);
