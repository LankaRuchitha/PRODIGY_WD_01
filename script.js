document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", function() {
        navLinks.classList.toggle("show");
    });

    window.addEventListener("scroll", function() {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "#222";
        } else {
            navbar.style.backgroundColor = "#333";
        }
    });

    // Carousel functionality
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    let currentIndex = 0;

    function showCarouselItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle("active", i === index);
        });
    }

    prev.addEventListener("click", function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
        showCarouselItem(currentIndex);
    });

    next.addEventListener("click", function() {
        currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
        showCarouselItem(currentIndex);
    });

    showCarouselItem(currentIndex);
});
