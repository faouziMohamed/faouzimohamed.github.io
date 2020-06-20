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

function modalContent(img){
    let modal        = newElement("section",{class: "modal"});
    let modalContent = newElement("div",{class:"modal-content"});
    let imgClone     = img.cloneNode(true);
    let close        = newElement("span",{class:"close"},"&times;");

    console.log(imgClone);
    modalContent.appendChild(close);
    modalContent.appendChild(imgClone);
    modal.appendChild(modalContent);
    return modalContent;
}


let fig = document.querySelectorAll("figure img, figure svg");
let c=fig.length;

function modalWin(e){
    let modal = modalContent(this);
    this.appendChild(modal);
}

for(let ii=0; ii<c; ++ii){
    fig[ii].addEventListener('click', modalWin);
}