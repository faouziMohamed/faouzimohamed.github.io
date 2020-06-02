
var open = false
var close = true
function openMenu(){
    var ul = document.querySelector("ul#main-list");
    ul.style.display = 'block'
    
    var section = document.querySelectorAll(".main-section>*")
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
    if(open) closeMenu()
    else     openMenu()
}