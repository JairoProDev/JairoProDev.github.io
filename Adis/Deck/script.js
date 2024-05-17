document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    document.getElementById('next').addEventListener('click', function() {
        changeSlide(1);
    });

    document.getElementById('prev').addEventListener('click', function() {
        changeSlide(-1);
    });

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Initialize the first slide as active
    slides[currentSlide].classList.add('active');
});
