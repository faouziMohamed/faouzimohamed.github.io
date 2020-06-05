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
    //alert(local Storage.getItem('theme'))
}
// Immediately invoked function to set the theme on initial load
(function () 
{
    var slider = document.querySelector("#slider")
    if (localStorage.getItem('theme') === 'theme-dark')
    { 
        setTheme('theme-dark'); 
        slider.checked = true;
    } else
    { 
        setTheme('theme-light');
        slider.checked = false;
    }
})();

//localStorage.clear()