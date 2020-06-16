function openMenu() {
    document.querySelector("ul#main-list").style.display = "block";
}

function closeMenu() {
    document.querySelector("ul#main-list").style.display = "none";
}

function handle_oppenedMenu() {
    var article = document.querySelector("article.main-article");
    article.addEventListener("touchstart", closeMenu);
    article.addEventListener("click", closeMenu);
}

function displayMenuAnyway() {
    var article = document.querySelector("article.main-article");
    article.removeEventListener("touchstart", closeMenu);
    article.removeEventListener("click", closeMenu);
    document.querySelector("ul#main-list").style.display = "block";
}


(void function toogleOpenAndCloseMenu() {
    document.querySelector("#menu-icon-wrapper>svg")
        .addEventListener("click", function open_close_Menu() {
            /*Use of media query to control responsive layout for the menubar"s layout*/
            var x = window.matchMedia("(max-width: 536px)"); //width<=536px 
            if (x.matches) {
                handle_oppenedMenu(); //some events to handle the closing of menu
                if (document.querySelector("ul#main-list").style.display === "block")
                    closeMenu();
                else openMenu();
            } else { //width >536px
                displayMenuAnyway(); //remove for some events to handle the closing of menu
            }
            x.addListener(open_close_Menu);
        });
}());
/*This part of code ensures that the menu is displayed in the 
two responsive modes*/

function newElement(name, attributes = {}, text = "") {
    node = document.createElement(name);
    for (var o in attributes) node.setAttribute(o, attributes[o]);
    if (text) node.innerHTML = text;
    return node;
}
(void function displayOrHideSubmenu() {
    var ul = document.querySelectorAll(".submenu");
    var y = window.matchMedia("(max-width: 536px)");
    var parent;
    var c = ul.length;
    /*Displaying or hidden submenus */
    for (var i = 0; i < c; i++) {
        parent = ul[i].parentElement;
        parent.querySelector("a").appendChild(newElement("i", {class: "fas fa-angle-down"}));
        parent.addEventListener("click", function (e) {
            var angle = this.querySelector("a i");
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
            var related_target = e.relatedTarget;
            if (this.lastElementChild.style.display !== "block") return;

            while ((related_target != this) &&
                (related_target.nodeName != "BODY") &&
                (related_target != document)) {
                related_target = related_target.parentNode;
            }
            if (related_target != this) {
                this.lastElementChild.style.display = "none";
                this.querySelector("a")
                    .replaceChild(newElement("i", {class: "fa fa-angle-down"}),
                        this.querySelector("a i"));
            }
        });
    }
    /** Tweaking submenus (adding class on its parents)**/
    function tuneSubmenu(y) {
        if (y.matches) {
            for (var i = 0; i < c; ++i) {
                ul[i].parentElement.classList.add("subMenuParent");
            }
        } else {
            for (var i = 0; i < c; ++i) {
                ul[i].parentElement.classList.remove("subMenuParent");
            }
        }
    }
    tuneSubmenu(y);
    y.addListener(tuneSubmenu);
}());


(void function makeVoidNullLink() {
    var a = document.querySelectorAll("a[href='#']:not(#github)");
    for (var i = 0, c = a.length; i < c; ++i) {
        a[i].addEventListener("click", function (e) {
            //if(this.id !== "github")
            this.href = "javascript:void(0)";
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