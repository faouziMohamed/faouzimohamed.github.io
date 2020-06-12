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
    var mono_error = document.querySelector("#perceptron-monocouche>img");
    var bias_1     = document.querySelector("#bias-1>img");
    var bias_2     = document.querySelector("#bias-2>img");
    var bias_3     = document.querySelector("#bias-3>img");
    var bias_4     = document.querySelector("#bias-4>img");
    var xor_0      = document.querySelector("#xor0>img");
    var xor_1      = document.querySelector("#xor1>img");
    var xor_2      = document.querySelector("#xor2>img");
    var nt1        = document.querySelector("#NT1>img");
    
    var ok = perceptron!=null;
    
    if(theme=='theme-dark'){
        if(ok){
            perceptron.src='../img/perceptron-dark.svg';
            monocouche.src="../img/monocouche-dark.svg";
            mono_error.src="../img/perceptron-apprentissage-dark.svg";
            bias_1.src    ="../img/bias_1-dark.svg";
            bias_2.src    ="../img/bias_2-dark.svg";
            bias_3.src    ="../img/bias_3-dark.svg";
            bias_4.src    ="../img/bias_4-dark.svg";
            xor_0.src     ="../img/XOR-0-dark.svg";
            xor_1.src     ="../img/XOR-1-dark.svg";
            xor_2.src     ="../img/XOR-2-dark.svg";
            nt1.src       ="../img/NT1-dark.svg";
        }
    }
    else{
        if(ok){
            perceptron.src='../img/perceptron-light.svg';
            monocouche.src="../img/monocouche-light.svg";
            mono_error.src="../img/perceptron-apprentissage-light.svg";
            bias_1.src    ="../img/bias_1-light.svg";
            bias_2.src    ="../img/bias_2-light.svg";
            bias_3.src    ="../img/bias_3-light.svg";
            bias_4.src    ="../img/bias_4-light.svg";
            xor_0.src     ="../img/XOR-0-light.svg";
            xor_1.src     ="../img/XOR-1-light.svg";
            xor_2.src     ="../img/XOR-2-light.svg";
            nt1.src       ="../img/NT1-light.svg";
        }
    }
}
//localStorage.clear()