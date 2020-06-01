
var open = false
var close = true
function openMenu(){
    var li = document.querySelectorAll("ul#main-list>li");

    for (var i=1, c=li.length; i<c;i++){
        li[i].setAttribute("style","display:block;");
        li[i].setAttribute("onmouseout","closeMenu()");
        li[i].setAttribute("onmouseover","openMenu()");
    }
    
    var section = document.querySelectorAll(".main-section>*")
    
    for (var i=0, c=section.length; i < c;++i){
        section[i].setAttribute("onmouseover","closeMenu()")
        section[i].setAttribute("onclick","closeMenu()")
    }
    open  = true
    close = false
}

function closeMenu(){
    var li = document.querySelectorAll("ul#main-list>li:first-child~li");
    for (var i=0, c=li.length; i<c;i++){
        li[i].setAttribute("style","disp lay:none");
    }
    open  = false
    close = true    
}  

function open_close_Menu(){
    if(open) closeMenu()
    else     openMenu()
}