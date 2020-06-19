function newTxtNode(text) {
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

function insertAfter(el, ref) {
    ref.parentNode.insertBefore(el, ref.nextSibling);
}

function addLiToUl(ul, node, id) {
    node.id = id;
    let a = newElement("a", {
        href: "#" + id
    }, node.innerText);
    let li = newElement("li");
    li.appendChild(a);
    ul.appendChild(li);
    return li;
}


void(function createListLeftNav() {
    let ul = document.querySelector("#ul-aside-nav");
    let title = document.querySelectorAll("section h2, section h3, section h4");
    let node = null,
        n = 1,
        id = null,
        li = null;
    let ul_ = null,
        li_ = null,
        _ul = null,
        c = title.length;
    /*For H1*/
    let H1 = document.querySelector(".main-article H1");
    H1.id = "top-h1";

    let h2 = newElement("h2", {
        style: "text-align:left; font-size:110%; margin-left:0px"
    });
    h2.appendChild(newElement("a", {
            style: "text-decoration:none; color:lightgreen;",
            href: "#top-h1"
        },
        document.querySelector(".main-article H1").firstChild.data));
    ul.parentNode.insertBefore(h2, ul);

    /*Main loop to create the list of title in the left side of the webpage*/
    for (var i = 0; i < c; ++i) {
        /*For H2*/
        if (title[parseInt(i)].nodeName === "H2") {
            li = addLiToUl(ul, title[i++], "titre" + (n++));
            ul_ = newElement("ul");
        }
        /*For H3*/
        while (i < c && (title[parseInt(i)].nodeName === "H3")) {
            li_ = addLiToUl(ul_, title[i++], "titre" + (n++));
        }
        /*For H4*/
        if (i < c && title[parseInt(i)].nodeName === "H4") {
            _ul = newElement("ul");
            while (i < c && title[parseInt(i)].nodeName === "H4") {
                addLiToUl(_ul, title[i++], "titre" + (n++));
            }
            li_.appendChild(_ul);
            --i;
        } else {
            i--;
        }
        li.appendChild(ul_);
    }
}());


void(function clickOnInternalLinkCSSTransition() {
    let link = document.querySelectorAll("main a[href*='#']:not(#top)");
    let nav = document.querySelector("#header-nav");
    let c = link.length;

    for (var i = 0; i < c; ++i) {
        link[parseInt(i)].addEventListener("click", function () {
            nav.style.visibility = "hidden";
            nav.style.opacity = 0;
        });
    }

    function makeVisible() {
        let nodeStyle = nav.style;
        if (nodeStyle.visibility === "hidden") {
            nodeStyle.visibility = "visible";
            nodeStyle.opacity = 1;
        }
    }

    document.body.addEventListener("touchstart", makeVisible, true); //For tactil 
    document.body.addEventListener("wheel", makeVisible, true); //for touchpad or mouse wheel
}());