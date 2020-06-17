function openMenu() {
    document.querySelector("ul#main-list").style.display = "block";
}

function closeMenu() {
    document.querySelector("ul#main-list").style.display = "none";
}

function handleOppenedMenu() {
    let article = document.querySelector("article.main-article");
    article.addEventListener("touchstart", closeMenu);
    article.addEventListener("click", closeMenu);
}

function displayMenuAnyway() {
    let article = document.querySelector("article.main-article");
    article.removeEventListener("touchstart", closeMenu);
    article.removeEventListener("click", closeMenu);
    document.querySelector("ul#main-list").style.display = "block";
}


void (function toogleOpenAndCloseMenu() {
    document.querySelector("#menu-icon-wrapper>svg").addEventListener("click", function openCloseMenu() {
            /*Use of media query to control responsive layout for the menubar"s layout*/
            let x = window.matchMedia("(max-width: 536px)"); //width<=536px 
            if (x.matches) {
                handleOppenedMenu(); //some events to handle the closing of menu
                if (document.querySelector("ul#main-list").style.display === "block")
                    {closeMenu();}
                else {openMenu();}
            } else { //width >536px
                displayMenuAnyway(); //remove for some events to handle the closing of menu
            }
            x.addListener(openCloseMenu);
        });
}());

function newTxtNode(text){return document.createTextNode(text);}
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
void (function displayOrHideSubmenu() {
    let ul = document.querySelectorAll(".submenu");
    let y = window.matchMedia("(max-width: 536px)");
    let parent;
    let c = parseInt(ul.length);
    /*Displaying or hidden submenus */
    for (let i = 0; i < c; i++) {
        parent = ul[parseInt(i)].parentElement;
        parent.querySelector("a").appendChild(newElement("i", {class: "fas fa-angle-down"}));
        parent.addEventListener("click", function (e) {
            let angle = this.querySelector("a i");
            if (this.lastElementChild.style.display !== "block") {
                this.querySelector("a").replaceChild(newElement("i", {class: "fas fa-angle-up"}), angle);
                this.lastElementChild.style.display = "block";
            } else {
                this.querySelector("a").replaceChild(newElement("i", {class: "fas fa-angle-down"}), angle);
                this.lastElementChild.style.display = "none";
            }
        });
        /*Hide submenu if is it not hovered*/
        parent.addEventListener("mouseout", function (e) {
            let relatedTarget = e.relatedTarget;
            if (this.lastElementChild.style.display !== "block") {return;}

            while ((relatedTarget !== this) &&
                (relatedTarget.nodeName !== "BODY") &&
                (relatedTarget !== document)) {
                relatedTarget = relatedTarget.parentNode;
            }
            if (relatedTarget !== this) {
                this.lastElementChild.style.display = "none";
                this.querySelector("a")
                    .replaceChild(newElement("i", {class: "fa fa-angle-down"}),
                        this.querySelector("a i"));
            }
        });
    }
    /** Tweaking submenus (adding class on its parents)**/
    function tuneSubmenu(y) {
        let i;
        if (y.matches) {
            for (i = 0; i < c; ++i) {
                ul[parseInt(i)].parentElement.classList.add("subMenuParent");
            }
        } else {
            for (i = 0; i < c; ++i) {
                ul[parseInt(i)].parentElement.classList.remove("subMenuParent");
            }
        }
    }
    tuneSubmenu(y);
    y.addListener(tuneSubmenu);
}());


void (function makeVoidNullLink() {
    let a = document.querySelectorAll("a[href='#']:not(#github)");
    for (let i = 0, c = a.length; i < c; ++i) {
        a[parseInt(i)].addEventListener("click", function (e) {
            e.preventDefault();
        });
    }
    document.querySelector("#github")
        .href = "https://github.com/faouziMohamed/faouzimohamed.github.io";
}());




























/*
if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
    console.log("🎉 Dark mode is supported");
}
*/