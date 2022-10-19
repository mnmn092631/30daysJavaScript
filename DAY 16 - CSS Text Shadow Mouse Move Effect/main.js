const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 800;

hero.addEventListener("mousemove", shadow);

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(238, 5, 242, 0.8),
  ${xWalk * -1}px ${yWalk}px 0 rgba(5, 17, 242, 0.8),
  ${yWalk}px ${xWalk * -1}px 0 rgba(13, 242, 5, 0.8),
  ${yWalk * -1}px ${xWalk}px 0 rgba(242, 120, 12, 0.8)`;
}
