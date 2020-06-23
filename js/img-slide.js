let slideIndex = 1;
/*
function displaySlide(n, node="") {
    let i;
    let slides = document.querySelectorAll(".slide");
    let dots = document.querySelectorAll(".dot");
    //let slider=document.querySelectorAll(".slider-container");

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
*/
function changeImg(n) {
    //displaySlide(slideIndex += n);
}

function currentSlide(n) {
    //displaySlide(slideIndex = n);
}

function configureSlideShow() {
    let slideIndex;
    document.querySelectorAll("[data-id*='slide_']").forEach((slideShowParent) => {
        //console.log(newElement);
        slideIndex = Number(localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`));
        if (slideIndex) {
            //displaySlide(slideIndex, slideShowParent);
        } else {
            slideIndex = 1;
            localStorage.setItem(`slideIndex_${slideShowParent.dataset.id}`, 1);
            //displaySlide(slideIndex, slideShowParent);
        }
    });
}


export {
    configureSlideShow
};