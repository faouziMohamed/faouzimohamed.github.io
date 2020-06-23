function newTxtNode(text) {
    return document.createTextNode(text);
}

function newElement(name, attributes = {}, text = "") {
    let node = document.createElement(name);
    const keys = Object.getOwnPropertyNames(attributes);
    keys.forEach((key) => {
        node.setAttribute(`${key}`, attributes[`${key}`]);
    });

    if (text) {
        node.appendChild(newTxtNode(text));
    }
    return node;
}

function displaySlide(n, slideShowParent) {
    let slides = slideShowParent.querySelectorAll(".slide");
    let dots = slideShowParent.querySelectorAll(".dot");
    let slideIndex = localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`);

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
    localStorage.setItem(`slideIndex_${slideShowParent.dataset.id}`, slideIndex);
}

function changeImg(n, slideShowParent) {
    let currentIndex = localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`);
    localStorage.setItem(`slideIndex_${slideShowParent.dataset.id}`, currentIndex + n);
    displaySlide(n, slideShowParent);
}

function currentSlide(n, parent) {
    localStorage.setItem(`slideIndex_${parent.parentNode.dataset.id}`, n);
    displaySlide(n, parent.parentNode);
}


function sliderDots(n) {
    let dotsParent = newElement("div", {
        class: "dot-wrapper"
    });

    for (let i = 1; i <= n; ++i) {
        dotsParent.appendChild(newElement("span", {
            class: "dot",
            onclick: `currentSlide(${i},this.parentNode)`
        }));
    }

    return dotsParent;
}

void(function configureSlideShow() {
    let i = 0;
    document.querySelectorAll("[data-id*='slide_']").forEach((slideShowParent) => {
        let figures = slideShowParent.querySelectorAll("figure");
        let slideIndex = localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`);
        slideShowParent.appendChild(sliderDots(figures.length));
        if (slideIndex) {
            if(i===2) slideIndex=1;
            displaySlide(slideIndex, slideShowParent);
        } else {
            slideIndex = 1;
            localStorage.setItem(`slideIndex_${slideShowParent.dataset.id}`, 1);
            displaySlide(slideIndex, slideShowParent);
        }
    });
}());