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

function toggleOpenAndCloseMenu() {
    document.querySelector("#menu-icon-wrapper>svg").addEventListener("click", function openCloseMenu() {
        /*Use of media query to control responsive layout for the menubar"s layout*/
        let x = window.matchMedia("(max-width: 536px)"); //width<=536px 
        if (x.matches) {
            handleOppenedMenu(); //some events to handle the closing of menu
            if (document.querySelector("ul#main-list").style.display === "block") {
                closeMenu();
            } else {
                openMenu();
            }
        } else { //width >536px
            displayMenuAnyway(); //remove for some events to handle the closing of menu
        }
        x.addListener(openCloseMenu);
    });
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

function showSubmenuEvent(parent) {
    parent.addEventListener("click", function (e) {
        let angle = this.querySelector("a i");
        if (this.lastElementChild.style.display !== "block") {
            this.querySelector("a").replaceChild(newElement("i", {
                class: "fas fa-angle-up"
            }), angle);
            this.lastElementChild.style.display = "block";
        } else {
            this.querySelector("a").replaceChild(newElement("i", {
                class: "fas fa-angle-down"
            }), angle);
            this.lastElementChild.style.display = "none";
        }
    });
}

function hideSubmenuEvent(parent) {
    parent.addEventListener("mouseout", function (e) {
        let relatedTarget = e.relatedTarget;
        if (this.lastElementChild.style.display !== "block") {
            return;
        }

        while (relatedTarget && (relatedTarget !== this)) {
            relatedTarget = relatedTarget.parentNode;
        }
        if (relatedTarget !== this) {
            this.lastElementChild.style.display = "none";
            this.querySelector("a").replaceChild(newElement("i", {
                class: "fa fa-angle-down"
            }), this.querySelector("a i"));
        }
    });
}

function togglingSubMenuClass(y) {
    if (y.matches) {
        document.querySelectorAll(".submenu").forEach((node) => {
            node.parentElement.classList.add("subMenuParent");
        });
    } else {
        document.querySelectorAll(".submenu").forEach((node) => {
            node.parentElement.classList.remove("subMenuParent");
        });
    }
}

function makeVoidNullLink() {
    document.querySelectorAll("a[href='#']:not(#github)").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
    document.querySelector("#github").href = "https://github.com/faouziMohamed/faouzimohamed.github.io";
}

function executeMainNavMenu() {
    let ul = document.querySelectorAll(".submenu");
    let y = window.matchMedia("(max-width: 536px)");

    /*Displaying or hidden submenus */
    toggleOpenAndCloseMenu();

    ul.forEach((submenu) => {
        let subMenuParent = submenu.parentElement;
        subMenuParent.querySelector("a").appendChild(newElement("i", {
            class: "fas fa-angle-down"
        }));
        showSubmenuEvent(subMenuParent);
        hideSubmenuEvent(subMenuParent);
    });
    togglingSubMenuClass(y);
    makeVoidNullLink();
    y.addListener(togglingSubMenuClass);
}

export {
    newTxtNode,
    newElement,
    executeMainNavMenu
};

/*
if (window.matchMedia("(prefers-color-scheme)").media !== "not all") {
    console.log("🎉 Dark mode is supported");
}
*/