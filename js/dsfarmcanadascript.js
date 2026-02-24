document.addEventListener('DOMContentLoaded', () => {
    attachClickableImages();
    showSection('home');

    const contactTrigger = document.querySelector('.contact-trigger');
    const modal = document.getElementById('contact-modal');
    const closeBtn = document.querySelector('.close-btn');

    contactTrigger.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      modal.classList.remove('hidden');
    });

    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      modal.classList.add('hidden');
    });

    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        modal.classList.add('hidden');
      }
    });
  });


  const images = [
  "images/dsfarm_canada/dsfc1.jpg",
  "images/dsfarm_canada/dsfc2.jpg",
  "images/dsfarm_canada/dsfc3.jpg",
  "images/dsfarm_canada/dsfc4.jpg",
  "images/dsfarm_canada/dsfc5.jpg",
  "images/dsfarm_canada/dsfc6.jpg",
  "images/dsfarm_canada/dsfc7.jpg"
];

let current = 0;
const img = document.querySelector(".slide-img");
const leftBtn = document.querySelector(".slide-btn.left");
const rightBtn = document.querySelector(".slide-btn.right");

function updateImage() {
  img.style.opacity = 0;
  setTimeout(() => {
    img.src = images[current];
    img.style.opacity = 1;
  }, 250);
}

leftBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  updateImage();
});

rightBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  updateImage();
});

// Swipe support for touch devices
let startX = 0;
img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
}, { passive: true });

img.addEventListener("touchend", e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 50) {
    if (dx < 0) {
      current = (current + 1) % images.length;
    } else {
      current = (current - 1 + images.length) % images.length;
    }
    updateImage();
  }
});