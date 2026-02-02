// Fade-in animation
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.style.opacity = 0;
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'all 1s ease';
  observer.observe(section);
});

// Music control
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.onclick = () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = '🔊';
  } else {
    music.pause();
    musicBtn.textContent = '🔈';
  }
};

// Secret message
document.getElementById('secretBtn').onclick = () => {
  const pass = prompt("Enter password");
  if (pass === "always") {
    document.getElementById('secretMsg').style.display = "block";
  }
};

// Floating hearts
const hearts = document.querySelector('.hearts');
setInterval(() => {
  const heart = document.createElement('span');
  heart.innerHTML = '🤍';
  heart.style.left = Math.random() * 100 + 'vw';
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 600);
