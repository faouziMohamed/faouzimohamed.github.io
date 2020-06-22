let slideIndex = 1;

function displaySlide(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if (!slides.length) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((node) => {
        node.style.display = "none";
    });
    dots.forEach((dot) => {
        dot.classList.remove("active");
    });
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.toggle("active");
    localStorage.setItem("slideIndex", slideIndex);
}

function changeImg(n) {
    displaySlide(slideIndex += n);
}

function currentSlide(n) {
    displaySlide(slideIndex = n);
}

void(function configureSlideShow() {
    slideIndex = Number(localStorage.getItem("slideIndex"));
    if (slideIndex) {
        displaySlide(slideIndex);
    } else {
        slideIndex = 1;
        localStorage.setItem("slideIndex", 1);
        displaySlide(slideIndex);
    }
}());