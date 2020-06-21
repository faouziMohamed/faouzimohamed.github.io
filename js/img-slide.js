let slideIndex;
void(function intialiseSlideShow() {
    if ((slideIndex = parseInt(localStorage.getItem("slideIndex")))) {
        showSlides(slideIndex);
    } else {
        slideIndex = 1;
        localStorage.setItem("slideIndex", 1);
        showSlides(1);
    }
}());



function changeImg(n) {
    showSlides(slideIndex += parseInt(n));
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");

    if(!slides.length) {return;}

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

    slideIndex = parseInt(slideIndex);
    if(slides[slideIndex - 1]){
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.toggle("active");
    }
    localStorage.setItem("slideIndex", slideIndex);
}