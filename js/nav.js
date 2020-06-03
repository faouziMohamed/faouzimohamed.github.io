/*GLOBAL VARIABLES */
var open = false;
var close = true;
var used = false;

function openMenu(){
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'block';
    
    var section = document.querySelectorAll(".main-section");
    for (var i=0, c=section.length; i < c;++i){
        section[i].setAttribute("onmouseover","closeMenu()");
        section[i].setAttribute("onclick","closeMenu()");
    }
    open  = true;
    close = false;
}

function closeMenu(){
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'none';

    open  = false;
    close = true;    
}  

function open_close_Menu(){
    used = true;
    var x = window.matchMedia("(max-width: 536px)");
    if(x.matches){
        if(open) closeMenu();
        else     openMenu();
    }
    x.addListener(open_close_Menu);
    
}


(function(){
    var ul = document.querySelector("ul#main-list");
    function display_menu(x){
        if(x.matches){
            ul.style.display = 'block';
            var section = document.querySelectorAll(".main-section");
            for (var i=0, c=section.length; i < c;++i){
                section[i].setAttribute("onmouseover","");
                section[i].setAttribute("onclick","");
            }
        }
        else {
            ul.style.display = 'none';
        }
    }
    var x = window.matchMedia("(min-width: 538px)");
    display_menu(x);
    x.addListener(display_menu);
})();


(function () {
    function tune_submenu(y)
    {
        var ul = document.querySelectorAll(".submenu");
        var parent;
        if(y.matches)
        {
            
            for (var i=0, c=ul.length;i < c;++i){
                parent = ul[i].parentElement;
                parent.className += ' subMenuParent'
            }
        }else{
            for (var i=0, c=ul.length;i < c;++i){
                parent = ul[i].parentElement;
                parent.className.replace(' subMenuParent','')
            }
        }
    }

    var y = window.matchMedia("(max-width: 536px)");
    tune_submenu(y);
    y.addListener(display_menu);
})();








/*
(
function () {
        function tune_submenu(y)
        {
            if(y.matches)
            {
                var ul = document.querySelectorAll(".submenu");
                var parent;
                for (var i=0, c=ul.length;i < c;++i){
                    parent = ul[i].parentElement;
                    parent.style.position = 'relative';
                }
            }else{
                var ul = document.querySelectorAll(".submenu");
                var parent;
                for (var i=0, c=ul.length;i < c;++i){
                    parent = ul[i].parentElement;
                }
            }
        }

        var y = window.matchMedia("(max-width: 536px)");
        tune_submenu(y);
        y.addListener(display_menu);
    }
)();
*/
