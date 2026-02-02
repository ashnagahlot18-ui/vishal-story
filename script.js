/* ===============================
   MUSIC CONTROLLER
================================ */

const music = document.getElementById("bgMusic");
const musicBar = document.getElementById("musicBar");

let isPlaying = false;

musicBar.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().then(() => {
      isPlaying = true;
      musicBar.innerText = "🎶 Playing our story";
    }).catch(err => {
      console.log("Music play blocked:", err);
    });
  } else {
    music.pause();
    isPlaying = false;
    musicBar.innerText = "🎵 Tap to play our story";
  }
});

/* ===============================
   FADE-IN ON SCROLL
================================ */

const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

scenes.forEach(scene => observer.observe(scene));

/* ===============================
   FLOATING PARTICLES
================================ */

const particleContainer = document.querySelector(".particles");

function createParticle() {
  const particle = document.createElement("span");
  particle.innerText = "✨";
  particle.style.left = Math.random() * 100 + "vw";
  particle.style.fontSize = Math.random() * 10 + 12 + "px";
  particle.style.animationDuration = Math.random() * 5 + 6 + "s";

  particleContainer.appendChild(particle);

  setTimeout(() => {
    particle.remove();
  }, 12000);
}

setInterval(createParticle, 500);

