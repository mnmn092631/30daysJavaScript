const time = document.querySelector(".time");
const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

function setDate() {
  const now = new Date();

  const second = now.getSeconds();
  const secondDegree = (360 / 60) * second + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  if (second === 0) {
    secondHand.style.transition = "none";
  } else {
    secondHand.style.transition = "all 50ms cubic-bezier(0.1, 2, 0.8, 1);";
  }

  const minite = now.getMinutes();
  const miniteDegree = (360 / 60) * minite + (6 / 60) * second + 90;
  minHand.style.transform = `rotate(${miniteDegree}deg)`;
  if (minite === 0) {
    minHand.style.transition = "none";
  } else {
    minHand.style.transition = "all 50ms cubic-bezier(0.1, 2, 0.8, 1);";
  }

  const hour = now.getHours();
  const hourDegree = (360 / 12) * hour + (30 / 60) * minite + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
  if (hour === 0) {
    hourHand.style.transition = "none";
  } else {
    hourHand.style.transition = "all 50ms cubic-bezier(0.1, 2, 0.8, 1);";
  }

  time.innerHTML = `${hour} : ${minite} : ${second}`;
}

setInterval(setDate, 1000);

setDate();
