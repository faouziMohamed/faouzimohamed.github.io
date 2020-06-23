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
    newElement,
    executeMainNavMenu,
} from "./nav.js";

function include(fileName, isModule = false) {
    let prefix, type;
    if (document.title !== "La classification automatique") {
        prefix = "../js/";
    } else {
        prefix = "js/";
    }

    (isModule === true) ? type = "module": type = "text/javascript";

    document.body.appendChild(newElement("script", {
        src: `${prefix}${fileName}`,
        type: `${type}`,
        defer: "true",
    }));
}

void(function main() {
    setThemeAfterPageLoaded();
    displayModalContent();
    executeMainNavMenu();
    executeBody();
    include("img-slide.js",false);
}());