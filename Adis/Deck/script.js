document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');

    nextButton.addEventListener('click', function() {
        changeSlide(1);
    });

    prevButton.addEventListener('click', function() {
        changeSlide(-1);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            changeSlide(1);
        } else if (event.key === 'ArrowLeft') {
            changeSlide(-1);
        }
    });

    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(event) {
        touchStartX = event.touches[0].clientX;
    });

    document.addEventListener('touchend', function(event) {
        touchEndX = event.changedTouches[0].clientX;
        handleGesture();
    });

    function handleGesture() {
        if (touchEndX < touchStartX) {
            changeSlide(1); // Deslizar hacia la izquierda
        }

        if (touchEndX > touchStartX) {
            changeSlide(-1); // Deslizar hacia la derecha
        }
    }

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Initialize the first slide as active
    slides[currentSlide].classList.add('active');
});
