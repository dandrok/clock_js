let handSec = document.querySelector(".hand-sec");
let handMin = document.querySelector(".hand-min");
let handHour = document.querySelector(".hand-hour");

function setData() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  const houDeg = (hours / 12) * 360 + 90;
  const minDeg = (minutes / 60) * 360 + 90;
  const secondsDeg = (seconds / 60) * 360 + 90;

  handMin.style.transform = `rotate(${houDeg}deg)`;
  handMin.style.transform = `rotate(${minDeg}deg)`;
  handSec.style.transform = `rotate(${secondsDeg}deg)`;
}

setInterval(setData, 1000);
