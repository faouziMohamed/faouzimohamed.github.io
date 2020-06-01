// function to set a given theme/color-scheme
function setTheme(themeName)
{
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
// function to toggle between light and dark theme
function toggleTheme()
{
    if (localStorage.getItem('theme') === 'theme-dark')
    {setTheme('theme-light');} else 
    { setTheme('theme-dark');}
}
// Immediately invoked function to set the theme on initial load
(function () 
{
    if (localStorage.getItem('theme') === 'theme-dark')
    { setTheme('theme-dark'); } else
    { setTheme('theme-light'); }
})();

function openMenu()
{
    var li = document.querySelectorAll("ul#main-list>li");

    for (var i=1, c=li.length; i<c;i++){
        li[i].setAttribute("style","display:block;");
        li[i].setAttribute("onmouseout","closeMenu()");
        li[i].setAttribute("onmouseover","openMenu()");
    }
    
    var section = document.querySelectorAll(".main-section>p")
    
    for (var i=0, c=section.length; i < c;++i){
        section[i].setAttribute("onmouseover","closeMenu()")
        section[i].setAttribute("onclick","closeMenu()")
    }
}

function closeMenu()
{
    var li = document.querySelectorAll("ul#main-list>li:first-child~li");
    for (var i=0, c=li.length; i<c;i++){
        li[i].setAttribute("style","disp lay:none");
    }
}  