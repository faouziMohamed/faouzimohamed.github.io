import {
    setThemeAfterPageLoaded,
} from "./switch.js";

import {
    displayModalContent,
} from "./modal-things.js";
import {
    executeBody,
} from "./body.js";

import {
    executeMainNavMenu,
} from "./nav.js";

import {
    configureSlideShow
} from "./img-slide.js";
void(function main() {
    setThemeAfterPageLoaded();
    displayModalContent();
    executeMainNavMenu();
    executeBody();
    configureSlideShow();
}());

/*function newTxtNode(text) {
    return document.createTextNode(text);
}

function newElement(name, attributes = {}, text = "") {
    let node = document.createElement(name);
    const keys = Object.getOwnPropertyNames(attributes);
    keys.forEach((key) => {
        node.setAttribute(`${key}`, attributes[`${key}`]);
    });

    if (text) {
        node.appendChild(newTxtNode(text));
    }
    return node;
}
*/




















/*
function include(fileName) {
    let prefix;
    if(document.title!=="La classification automatique"){
        prefix = "../js/";
    }
    else{
        prefix = "js/";
    }
    document.head.appendChild(newElement("script", {
        src: `${prefix}${fileName}`,
        type: 'text/javascript',
        defer: 'true',
        //async:true
    }));
    console.log(this.document.title);
}
*/