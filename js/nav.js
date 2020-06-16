/*GLOBAL VARIABLES */
var open = false;
var close = true;
var used = false;

function openMenu() {
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'block';
    open = true;
    close = false;
}

function closeMenu() {
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'none';
    open = false;
    close = true;
}

function handle_oppenedMenu() {
    var article = document.querySelector("article.main-article");
    article.addEventListener('touchstart', closeMenu);
    article.addEventListener('click', closeMenu);
    article.addEventListener('mouseover', closeMenu);
}

function display_menu() {
    var article = document.querySelector("article.main-article");
    article.removeEventListener('touchstart', closeMenu);
    article.removeEventListener('click', closeMenu);
    article.removeEventListener('mouseover', closeMenu);
    document.querySelector("ul#main-list").style.display = 'block';

}


void

function toogle_openAndClose_menu() {
    function open_close_Menu() {
        used = true;
        var x = window.matchMedia("(max-width: 536px)");
        if (x.matches) {
            handle_oppenedMenu();
            if (open) closeMenu();
            else openMenu();
        }
        else{display_menu()}
        x.addListener(open_close_Menu);
    }
    menu = document.querySelector("#menu-icon-wrapper>svg");
    menu.addEventListener('click', open_close_Menu);
}();
/*This part of code ensures that the menu is displayed in the 
two responsive modes*/

function new_element(name, attributes = {}, text = '') {
    node = document.createElement(name);

    for (var o in attributes)
        node.setAttribute(o, attributes[o]);

    if (text) {
        node.innerHTML = text;
    }
    return node;
}
void

function display_or_hide_submenu() {
    var ul = document.querySelectorAll(".submenu");
    var y = window.matchMedia("(max-width: 536px)");
    var parent;
    var c = ul.length;
    /*Displaying or hidden submenus */
    for (var i = 0; i < c; i++) {
        parent = ul[i].parentElement;
        parent.querySelector("a")
            .appendChild(new_element("i", {
                class: 'fas fa-angle-down'
            }));
        parent.addEventListener('click', function (e) {
            var angle = this.querySelector('a i');
            if (this.lastElementChild.style.display !== 'block') {
                this.querySelector("a")
                    .replaceChild(new_element("i", {
                        class: 'fas fa-angle-up'
                    }), angle);
                this.lastElementChild.style.display = 'block';
            } else {
                this.querySelector("a")
                    .replaceChild(new_element("i", {
                        class: 'fas fa-angle-down'
                    }), angle);
                this.lastElementChild.style.display = 'none';
            }
        });
        /*Hide submenu is it not hovered*/
        parent.addEventListener('mouseout', function (e) {
            var related_target = e.relatedTarget;
            if ((!this.lastElementChild.style.display) ||
                this.lastElementChild.style.display === 'none') {
                return;
            }

            while (related_target != this &&
                related_target.nodeName != 'BODY' &&
                related_target != document) {
                related_target = related_target.parentNode;
            }
            if (related_target != this) {
                this.lastElementChild.style.display = 'none';
                this.querySelector("a")
                    .replaceChild(new_element("i", {
                            class: 'fa fa-angle-down'
                        }),
                        this.querySelector('a i'));
            }
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
}();


void
function makeVoid_null_link() {
    var a = document.querySelectorAll("a[href='#']:not(#github)");
    for (var i = 0, c = a.length; i < c; ++i) {
        a[i].addEventListener('click', function (e) {
            //if(this.id !== 'github')
            this.href = 'javascript:void(0)';
        });
    }
    document.querySelector("#github")
        .href = "https://github.com/faouziMohamed/faouzimohamed.github.io";
}();





























/*
if (window.matchMedia('(prefers-color-scheme)').media !== 'not all') {
    console.log('🎉 Dark mode is supported');
}
*/