// Typewriter animation
 
const typewriter = document.querySelector(".typewriter");
const titles = ["Full-Stack Developer", "Frontend Designer", "Backend Coder"];
let titleIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < titles[titleIndex].length) {
    typewriter.textContent += titles[titleIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 2000);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typewriter.textContent = titles[titleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(typeEffect, 500);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (titles.length) setTimeout(typeEffect, 500);
});

// Dark mode toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
