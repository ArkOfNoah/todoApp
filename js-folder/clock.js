const clockScreen = document.querySelector(".clock");
const secondsScreen = document.querySelector(".seconds");
const DAY_OF_WEEK = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const greetScreen = document.querySelector(".nameForm h2:first-child");

const clock = function () {
  const date = new Date();

  // const dayOfWeekNum = date.getDay();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const padHours = (hours + "").padStart(2, 0);
  const padMinutes = (minutes + "").padStart(2, 0);
  const padSeconds = (seconds + "").padStart(2, 0);

  clockScreen.innerHTML = `${padHours}:${padMinutes}`;
  secondsScreen.innerHTML = `.${padSeconds}`;

  // greeting

  if (hours >= 6 && hours < 12) {
    greetScreen.innerHTML = `Good morning, `;
  } else if (hours >= 12 && hours < 18) {
    greetScreen.innerHTML = `Good afternoon, `;
  } else {
    greetScreen.innerHTML = `Good evening, `;
  }
};

setInterval(clock, 1000);
