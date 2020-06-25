// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    //data-theme="switch"
    if (themeName === "theme-light") {
        document.querySelectorAll("img[data-theme='switch']").forEach((element) => {
            element.src = element.src.replace("dark", "light");
        });
    } else {
        document.querySelectorAll("img[data-theme='switch']").forEach((element) => {
            element.src = element.src.replace("light", "dark");
        });
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
function setThemeAfterPageLoaded() {
    if (localStorage.getItem("theme") === "theme-dark") {
        document.querySelector("#slider").checked = true;
        setTheme("theme-dark");
    } else {
        document.querySelector("#slider").checked = false;
        setTheme("theme-light");
    }

    document.querySelector("#slider").addEventListener("change",toggleTheme);
}

export {
    setThemeAfterPageLoaded,
    toggleTheme
};