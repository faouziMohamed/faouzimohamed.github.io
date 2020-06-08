/*GLOBAL VARIABLES */
var open = false;
var close = true;
var used = false;
function openMenu() {
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'block';
    var section = document.querySelectorAll(".main-section");
    for (var i = 0, c = section.length; i < c; ++i) {
        section[i].addEventListener('mouseover', closeMenu);
        section[i].addEventListener("click", closeMenu);
    }
    open = true;
    close = false;
}
function closeMenu() {
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'none';
    open = false;
    close = true;
}
(function () {
    function open_close_Menu() {
        used = true;
        var x = window.matchMedia("(max-width: 536px)");
        if (x.matches) {
            if (open) closeMenu();
            else openMenu();
        }
        x.addListener(open_close_Menu);
    }
    menu = document.querySelector("#menu>svg");
    menu.addEventListener('click', open_close_Menu);
})();
/*This part of code ensures that the menu is displayed in the 
two responsive modes*/
(function () {
    var ul = document.querySelector("ul#main-list");
    var x = window.matchMedia("(min-width: 538px)");
    function display_menu(x) {
        if (x.matches) {
            ul.style.display = 'block';
            var section = document.querySelectorAll(".main-section");
            for (var i = 0, c = section.length; i < c; ++i) {
                section[i].removeEventListener('mouseover', closeMenu);
                section[i].removeEventListener("click", closeMenu);
            }
        } else {
            ul.style.display = 'none';
        }
        x.addListener(display_menu);
    }
    display_menu(x);
})();

function new_element(name,attributes={}, text=''){
    node = document.createElement(name);

    for(var o in attributes)
        node.setAttribute(o, attributes[o]);

    if(text){
        node.innerHTML = text;
    }
    return node;
}
(function () {
    var ul = document.querySelectorAll(".submenu");
    var y = window.matchMedia("(max-width: 536px)");
    var parent;
    var c = ul.length;
    /*Displaying or hidden submenus */
    for (var i = 0; i < c; i++) {
        parent = ul[i].parentElement;
        parent.querySelector("a")
              .appendChild(new_element("i",{class:'fas fa-angle-down'}));
        parent.addEventListener('click', function (e) {
            var angle = this.querySelector('a i');
            if (this.lastElementChild.style.display !== 'block'){
                this.querySelector("a")
                .replaceChild(new_element("i",{class:'fas fa-angle-up'}), angle);
                this.lastElementChild.style.display = 'block';
            }else{
                this.querySelector("a")
                    .replaceChild(new_element("i",{class:'fas fa-angle-down'}), angle);
                    this.lastElementChild.style.display = 'none';
                }
        });
        /*Hide submenu is it not hovered*/
        parent.addEventListener('mouseout', function (e) {
            var related_target = e.relatedTarget;
            while (related_target != this && related_target.nodeName != 'BODY' && related_target != document) {
                related_target = related_target.parentNode;
            }
            if (related_target != this)
                this.lastElementChild.style.display = 'none';
        });
    }
    /** Tweaking submenus (adding class on its parents)**/
    function tune_submenu(y) {
        if (y.matches) {
            for (var i = 0; i < c; ++i) {
                parent = ul[i].parentElement;
                parent.classList.add('subMenuParent');
            }
        } else {
            for (var i = 0; i < c; ++i) {
                parent = ul[i].parentElement;
                parent.classList.remove('subMenuParent');
            }
        }
    }
    tune_submenu(y);
    y.addListener(tune_submenu);
})();
(function () {
    var a = document.querySelectorAll("a[href='#']");
    for (var i = 0, c = a.length; i < c; ++i) {
        a[i].addEventListener('click', function (e) {
            e.preventDefault();
        });
    }
    document.querySelector("#github")
    .href = "https://github.com/faouziMohamed/faouzimohamed.github.io";
})();

if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');
}

