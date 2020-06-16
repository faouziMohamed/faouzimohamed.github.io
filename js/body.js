function newTxtNode(text){return document.createTextNode(text);}
function newElement(name, attributes = {}, text = "") {
    var node = document.createElement(name);
    for (var o in attributes) {
        node.setAttribute(o, attributes[o]);
    }
    if (text) 
    {
        node.appendChild(newTxtNode(text));
    }
    return node;
}

function insertAfter(el, ref) {
    ref.parentNode.insertBefore(el, ref.nextSibling);
}

function addLiToUl(ul, node, id) {
    node.id = id;
    var a = newElement("a", {
        href: "#" + id
    }, node.firstChild.data);
    var li = newElement("li");
    li.appendChild(a);
    ul.appendChild(li);
    return li;
}


void (function createListLeftNav() {
    var ul = document.querySelector("#ul-aside-nav");
    var title = document.querySelectorAll("section h2, section h3, section h4");
    var node = null,
        n = 1,
        id = null,
        li = null;
    var ul_ = null,
        li_ = null,
        _ul = null,
        c = title.length;
    /*For H1*/
    var H1 = document.querySelector(".main-article H1");
    H1.id = "top-h1";

    var h2 = newElement("h2", {style: "text-align:left; font-size:110%; margin-left:0px"});
    h2.appendChild(newElement("a", {
            style: "text-decoration:none; color:lightgreen;",
            href: "#top-h1"
        },
        document.querySelector(".main-article H1").firstChild.data));
    ul.parentNode.insertBefore(h2, ul);

    /*Main loop to create the list of title in the left side of the webpage*/
    for (var i = 0; i < c; ++i) {
        /*For H2*/
        if (title[i].nodeName === "H2") {
            li = addLiToUl(ul, title[i++], "titre" + (n++));
            ul_ = newElement("ul");
        }
        /*For H3*/
        while (i < c && (title[i].nodeName === "H3")) {
            li_ = addLiToUl(ul_, title[i++], "titre" + (n++));
        }
        /*For H4*/
        if (i < c && title[i].nodeName === "H4") {
            _ul = newElement("ul");
            while (i < c && title[i].nodeName === "H4") {
                addLiToUl(_ul, title[i++], "titre" + (n++));
            }
            li_.appendChild(_ul);
            --i;
        } else {i--;}
        li.appendChild(ul_);
    }
}());


void (function clickOnInternalLinkCSSTransition() {
    var link = document.querySelectorAll("main a[href*='#']:not(#top)");
    var nav = document.querySelector("#header-nav");
    var c = link.length;

    for (var i = 0; i < c; ++i) {
        link[i].addEventListener("click", function () {
            nav.style.visibility = "hidden";
            nav.style.opacity = 0;
        });
    }

    function makeVisible() {
        var nodeStyle = nav.style;
        if (nodeStyle.visibility === "hidden") {
            nodeStyle.visibility = "visible";
            nodeStyle.opacity = 1;
        }
    }

    document.body.addEventListener("touchstart", makeVisible, true); //For tactil 
    document.body.addEventListener("wheel", makeVisible,true); //for touchpad or mouse wheel
}());