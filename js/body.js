function new_element(name,attributes={}, text=''){
    node = document.createElement(name);

    for(var o in attributes)
        node.setAttribute(o, attributes[o]);

    if(text){
        node.innerHTML = text;
    }
    return node;
}

function insertAfter(el, ref) {
    ref.parentNode
       .insertBefore(el, ref.nextSibling);
}

function add_li_to_ul(ul,node,id)
{
    node.id = id;
    a  = new_element('a', {href:'#'+id},node.firstChild.data);
    var li = new_element('li');
    li.appendChild(a);
    ul.appendChild(li);
    return li;
}


function create_list_left_nav()
{
    var ul = document.querySelector("#ul-aside-nav");
    var title = document.querySelectorAll("section h2, section h3, section h4");
    var node = null,  n=1, id=null, li=null;
    
    var H1 = document.querySelector(".main-article H1");
    H1.id = "top-h1";

    var link_in_h2 = new_element('a',{style:"text-decoration:none;\
                                              color:lightgreen;",
                                      href:"#top-h1 "},
                        document.querySelector(".main-article H1")
                                .firstChild.data) ;
    var h2 = new_element('h2',{style:'text-align:left;\
                                       font-size:110%;\
                                       margin-left:0px'});
    h2.appendChild(link_in_h2);
    ul.parentNode.insertBefore(h2,ul);
    
    for(var i=0, c=title.length; i<c;++i)
    {
        id  = 'titre'+ (n++);
        li  = add_li_to_ul(ul,title[i],id);
        ul_ = new_element('ul');
        while(++i<c && (title[i].nodeName === 'H3' || title[i].nodeName === 'H4')){
            id  = 'titre'+ (n++);
            add_li_to_ul(ul_,title[i],id);
            if(title[i].nodeName === 'H4'){
                console.log(title[i].firstChild.data);
            }
        }
       
        li.appendChild(ul_);
        --i;
    }
}

create_list_left_nav()
