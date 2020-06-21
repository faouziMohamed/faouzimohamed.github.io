// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    //data-theme="switch"
    if(themeName === 'theme-light'){
    document.querySelectorAll("figure img[data-theme='switch']").forEach((element)=>{
        element.src = element.src.replace("dark","light");});
    }
    else {
        document.querySelectorAll("figure img[src*='light']").forEach((element)=>{
            element.src = element.src.replace("light","dark");});
    }
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
}
// Immediate invocation function to set the theme on initial load
void(function setThemeWhenPageIsLoaded() {
    let slider = document.querySelector("#slider");
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
        slider.checked = true;
    } else {
        setTheme("theme-light");
        slider.checked = false;
        
    }
}());


//localStorage.clear()