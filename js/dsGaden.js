document.addEventListener('DOMContentLoaded', () => {
  const images = [
    'images/dsGarden/soon.jpg',
    'images/dsGarden/soon2.png',
    'images/dsGarden/soon3.png'
  ];
  let current = 0;

  const slideImg = document.getElementById('garden-slide');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  function showSlide(index) {
    current = (index + images.length) % images.length;
    slideImg.src = images[current];
  }

  //prevBtn.addEventListener('click', () => showSlide(current - 1)); 
  //nextBtn.addEventListener('click', () => showSlide(current + 1)); 

  // Auto slide every 4 seconds
  setInterval(() => showSlide(current + 1), 4000);
});