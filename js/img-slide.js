function randomId(size) {
    var randHash = "";
    var characters = "ABCD45678EFGHITUhijklVWXYZabcdefgmnopqrJKLMNOPQRSstuvwxyz01239_";
    for (var i = 0; i < size; i++) {
        randHash += characters.charAt(Math.floor(Math.random() * 50));
    }
    return randHash;
}

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
    let slideIndex = Number(localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`));
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

function changeImg(n, parent) {
    let currentIndex = Number(localStorage.getItem(`slideIndex_${parent.dataset.id}`)) + n;
    localStorage.setItem(`slideIndex_${parent.dataset.id}`, currentIndex);
    displaySlide(currentIndex, parent);
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

function arrow(direction) {
    let a;
    if (direction === "left") {
        a = newElement("a", {
            class: "prev",
            onclick: "changeImg(-1,this.parentNode)"
        });
        a.appendChild(newElement("i", {
            class: "fas fa-angle-left fa-3x"
        }));
    } else if (direction === "right") {
        a = newElement("a", {
            class: "next",
            onclick: "changeImg(1,this.parentNode)"
        });
        a.appendChild(newElement("i", {
            class: "fas fa-angle-right fa-3x"
        }));
    }
    return a;
}

void(function main() {
    document.querySelectorAll(".slide-container").forEach((slideShowParent) => {
        slideShowParent.dataset.id = randomId(35);
        let figures = slideShowParent.querySelectorAll("figure");
        let slideIndex = Number(localStorage.getItem(`slideIndex_${slideShowParent.dataset.id}`));

        let i = 1;
        figures.forEach((slide) => {
            slide.classList.add("slide");
            slide.insertBefore(newElement("span", {
                class: "number-text"
            }, `${i++}/${figures.length}`), slide.querySelector("img"));
        });
        slideShowParent.querySelectorAll("figcaption").forEach((figcaption) => {
            figcaption.classList.add("caption-text");
        });
        slideShowParent.appendChild(arrow("left"));
        slideShowParent.appendChild(arrow("right"));
        slideShowParent.appendChild(sliderDots(figures.length));

        if (slideIndex) {
            displaySlide(slideIndex, slideShowParent);
        } else {
            slideIndex = 1;
            localStorage.setItem(`slideIndex_${slideShowParent.dataset.id}`, 1);
            displaySlide(slideIndex, slideShowParent);
        }
    });
}());