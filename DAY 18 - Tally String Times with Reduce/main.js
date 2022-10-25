const videos = Array.from(document.querySelectorAll("[data-time]"));

const totalSec = videos.reduce((sum, video) => {
  const [min, sec] = video.dataset.time.split(":").map(Number);
  return sum + min * 60 + sec;
}, 0);

let secondsLeft = totalSec;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;

const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;

console.log(`${hours}:${minutes}:${secondsLeft}`);
