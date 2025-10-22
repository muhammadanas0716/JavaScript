console.log("Hello");

hoursHTML = document.getElementById("hours");
minutesHTML = document.getElementById("minutes");
secondsHTML = document.getElementById("seconds");

const pad = (n) => String(n).padStart(2, "0");

const getClock = () => {
  const date = new Date();
  hours = pad(date.getHours());
  minutes = pad(date.getMinutes());
  seconds = pad(date.getSeconds());

  hoursHTML.innerHTML = hours;
  minutesHTML.innerHTML = minutes;
  secondsHTML.innerHTML = seconds;
};

let hourInterval = setInterval(getClock, 1000);
