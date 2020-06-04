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

function open_close_Menu() {
    used = true;
    var x = window.matchMedia("(max-width: 536px)");
    if (x.matches) {
        if (open) closeMenu();
        else openMenu();
    }
    x.addListener(open_close_Menu);

}


(function () {
    var ul = document.querySelector("ul#main-list");

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
    }
    var x = window.matchMedia("(min-width: 538px)");
    display_menu(x);
    x.addListener(display_menu);
})();


(function () {
    var ul = document.querySelectorAll(".submenu");
    var parent;
    var c = ul.length
    var display;
    for (var i = 0; i < c; i++) {
        parent = ul[i].parentElement;
        parent.addEventListener('click',function (e){
            if(this.lastElementChild.style.display !== 'block')
                this.lastElementChild.style.display = 'block'
            else
                this.lastElementChild.style.display = 'none'
        });
    }

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

    var y = window.matchMedia("(max-width: 536px)");
    tune_submenu(y);
    y.addListener(tune_submenu);

    
})();

/*
(function (){
    
})();*/