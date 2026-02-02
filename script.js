// MUSIC
const music = document.getElementById("bgMusic");
const bar = document.getElementById("musicBar");

bar.onclick = () => {
  music.play();
  bar.innerText = "🎶 Playing";
};

// PARTICLES
const container = document.querySelector(".particles");

setInterval(() => {
  const span = document.createElement("span");
  span.innerHTML = "✨";
  span.style.left = Math.random() * 100 + "vw";
  container.appendChild(span);

  setTimeout(() => span.remove(), 10000);
}, 400);
