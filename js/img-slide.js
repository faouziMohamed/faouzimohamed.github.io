let slideIndex = 1;

function changeImg(n) {
    displaySlide(slideIndex += parseInt(n));
}

function currentSlide(n) {
    displaySlide(slideIndex = n);
}

function displaySlide(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if ((!slides.length) || (!n)) {
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[parseInt(i)].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[parseInt(i)].classList.remove("active");
    }

    i = slideIndex - 1;
    slides[i].style.display = "block";
    dots[i].classList.toggle("active");
    localStorage.setItem("slideIndex", slideIndex);
}


if ((slideIndex = localStorage.getItem("slideIndex"))) {
    displaySlide(slideIndex);
} else {
    slideIndex = 1;
    localStorage.setItem("slideIndex", 1);
    displaySlide(slideIndex);
}