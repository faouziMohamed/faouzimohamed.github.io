
var open = false
var close = true
var used = false
function openMenu(){
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'block'
    
    var section = document.querySelectorAll(".main-section")
    for (var i=0, c=section.length; i < c;++i){
        section[i].setAttribute("onmouseover","closeMenu()")
        section[i].setAttribute("onclick","closeMenu()")
    }
    open  = true
    close = false
}

function closeMenu(){
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'none'

    open  = false
    close = true    
}  

function open_close_Menu(){
    used = true
    var x = window.matchMedia("(max-width: 536px)")
    if(x.matches){
        if(open) closeMenu()
        else     openMenu()
    }
    x.addListener(open_close_Menu)
    
}


/*var ul = document.querySelectorAll(".submenu")

for (var i=0, c=ul.length;i < c;++i){
    var parent = ul[i].parentElement
    parent.style.position = 'relative'
}*/

var funct = (function (x){
    if(x.matches){
        alert(used)
    }
})();

var x = window.matchMedia("(min-width: 538px)")

    x.addListener(funct)