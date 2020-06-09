// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    change_img(themeName);
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
    //alert(local Storage.getItem('theme'))
}
// Immediately invoked function to set the theme on initial load
(function () {

    var slider = document.querySelector("#slider")
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        if (slider) slider.checked = true;
    } else {
        setTheme('theme-light');
        if (slider) slider.checked = false;
    }
})();

function change_img(theme=''){
    var perceptron = document.querySelector("#perceptron>img");
    var monocouche = document.querySelector("#monocouche>img");
    if(theme=='theme-dark'){
        perceptron.src='../img/perceptron-dark.svg';
        monocouche.src="../img/monocouche-dark.svg"
    }
    else{
        perceptron.src='../img/perceptron-light.svg';
        monocouche.src="../img/monocouche-light.svg"
    }
}
//localStorage.clear()