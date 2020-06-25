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
    document.querySelector("#menu-icon-wrapper>i").addEventListener("click", function openCloseMenu() {
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
        let angle = this.querySelector("button i[class*='angle']");
        if (this.lastElementChild.style.display !== "block") {
            this.querySelector("button").replaceChild(newElement("i", {
                class: "fas fa-angle-up"
            }), angle);
            this.lastElementChild.style.display = "block";
        } else {
            this.querySelector("button").replaceChild(newElement("i", {
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
            this.querySelector("button").replaceChild(newElement("i", {
                class: "fa fa-angle-down"
            }), this.querySelector("button i[class*='angle']"));
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
    document.querySelector("#github").href = "https://github.com/faouziMohamed/faouzimohamed.github.io";
    document.querySelectorAll("a[href='#']").forEach((a) => {
        a.addEventListener("click", (e) => {
            e.preventDefault();
        });
    });
}

function tweakTableOfCOntent(){
    let toc = newElement("i", {
        class: "fas fa-stream fa-chevron-right",
        id: "open-toc",
        title: "Appuyez pour ouvrir le sommaire"
    });
    document.body.insertBefore(toc, document.querySelector("main"));
    sessionStorage.setItem("asideLeftOpen", "closed");
    toc.addEventListener("click", function (e) {
        if (sessionStorage.getItem("asideLeftOpen") === "oppened") {
            document.querySelector("aside#left-aside").style.transform = "translateX(0)";
            sessionStorage.setItem("asideLeftOpen", "closed");
        } else {
            document.querySelector("aside#left-aside").style.transform = "translateX(-200%)";
            sessionStorage.setItem("asideLeftOpen", "oppened");
        }
    });
}

function executeMainNavMenu() {
    let ul = document.querySelectorAll(".submenu");
    let y = window.matchMedia("(max-width: 536px)");

    /*Displaying or hidden submenus */
    toggleOpenAndCloseMenu();

    ul.forEach((submenu) => {
        let subMenuParent = submenu.parentElement;
        subMenuParent.querySelector("button").appendChild(newElement("i", {
            class: "fas fa-angle-down"
        }));
        showSubmenuEvent(subMenuParent);
        hideSubmenuEvent(subMenuParent);
    });
    togglingSubMenuClass(y);
    makeVoidNullLink();
    tweakTableOfCOntent();
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