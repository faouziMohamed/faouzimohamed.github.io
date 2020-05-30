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

    for (var i=0, c=li.length; i<c;i++){
        li[i].setAttribute("style","display:block");
    }
}

function closeMenu()
{
    var li = document.querySelectorAll("ul#main-list>li");
    var ul = document.querySelectorAll("ul#main-list");
    for (var i=0, c=li.length; i<c;i++){
    //   li[i].setAttribute("style","display:none");
    }
}