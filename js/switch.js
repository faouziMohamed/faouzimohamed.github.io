function changeImg(theme=""){
    let perceptron = document.querySelector("#perceptron>img");
    let monocouche = document.querySelector("#monocouche>img");
    let monoError  = document.querySelector("#perceptron-monocouche>img");
    let bias1      = document.querySelector("#bias-1>img");
    let bias2      = document.querySelector("#bias-2>img");
    let bias3      = document.querySelector("#bias-3>img");
    let bias4      = document.querySelector("#bias-4>img");
    let xor0       = document.querySelector("#xor0>img");
    let xor1       = document.querySelector("#xor1>img");
    let xor2       = document.querySelector("#xor2>img");
    let nt1        = document.querySelector("#NT1>img");
    let nt2        = document.querySelector("#NT2>img");
    let phaseAvant = document.querySelector("#forward-step>img");
    let phaseArr   = document.querySelector("#feedback-step>img");
    let lr         = document.querySelector("#min-grad>img");
    let ok = perceptron!==null;
    
    if(theme==="theme-light"){
        if(ok){
            perceptron.src="../img/perceptron-light.svg";
            monocouche.src="../img/monocouche-light.svg";
            monoError.src ="../img/perceptron-apprentissage-light.svg";
            bias1.src     ="../img/bias_1-light.svg";
            bias2.src     ="../img/bias_2-light.svg";
            bias3.src     ="../img/bias_3-light.svg";
            bias4.src     ="../img/bias_4-light.svg";
            xor0.src      ="../img/XOR-0-light.svg";
            xor1.src      ="../img/XOR-1-light.svg";
            xor2.src      ="../img/XOR-2-light.svg";
            nt1.src       ="../img/NT1-light.svg";
            nt2.src       ="../img/NT2-light.svg";
            phaseAvant.src="../img/phse_avant-light.svg";
            phaseArr.src  ="../img/phse_arr-light.svg";
            lr.src        ="../img/lr-light.svg";
        }
    }
    else{
        if(ok){
            perceptron.src ="../img/perceptron-dark.svg";
            monocouche.src ="../img/monocouche-dark.svg";
            monoError.src  ="../img/perceptron-apprentissage-dark.svg";
            bias1.src      ="../img/bias_1-dark.svg";
            bias2.src      ="../img/bias_2-dark.svg";
            bias3.src      ="../img/bias_3-dark.svg";
            bias4.src      ="../img/bias_4-dark.svg";
            xor0.src       ="../img/XOR-0-dark.svg";
            xor1.src       ="../img/XOR-1-dark.svg";
            xor2.src       ="../img/XOR-2-dark.svg";
            nt1.src        ="../img/NT1-dark.svg";
            nt2.src        ="../img/NT2-dark.svg";
            phaseAvant.src ="../img/phse_avant-dark.svg";
            phaseArr.src   ="../img/phse_arr-dark.svg";
            lr.src         ="../img/lr-dark.svg";
        }
        
    }
}
// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
    changeImg(themeName);
}
// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-light");
    } else {
        setTheme("theme-dark");
    }
    //alert(local Storage.getItem("theme"))
}
// Immediate invocation function to set the theme on initial load
void (function setThemeForWhenPageIsLoaded() {
    let slider = document.querySelector("#slider");
    if (localStorage.getItem("theme") === "theme-dark") {
        setTheme("theme-dark");
        if (slider){slider.checked = true;} 
    } else {
        setTheme("theme-light");
        if (slider){slider.checked = false;} 
    }
}());


//localStorage.clear()