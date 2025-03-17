document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".carousel img");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex = 0;
    let interval;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.opacity = i === index ? "1" : "0";
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    function startCarousel() {
        clearInterval(interval);
        interval = setInterval(nextImage, 5000); // Auto-rotate every 5 seconds
    }

    prevButton.addEventListener("click", function () {
        prevImage();
        startCarousel();
    });

    nextButton.addEventListener("click", function () {
        nextImage();
        startCarousel();
    });

    showImage(currentIndex);
    startCarousel();
});
