const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');

let currentIndex = 0;
const intervalTime = 3000; // Tempo entre as transições
let slideInterval;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function startSlide() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

startSlide();
