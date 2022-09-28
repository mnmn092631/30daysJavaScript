function removeTransition(e) {
  if (e.propertyName !== "transform") {
    return;
  }
  this.classList.remove("playing");
}

function playing(e) {
  const audio = document.querySelector(
    `audio[data-key="${
      e.type === "keydown" ? e.keyCode : e.currentTarget.dataset.key
    }"]`
  );
  const key = document.querySelector(
    `div[data-key="${
      e.type === "keydown" ? e.keyCode : e.currentTarget.dataset.key
    }"]`
  );

  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
keys.forEach((key) => key.addEventListener("click", playing));
window.addEventListener("keydown", playing);
