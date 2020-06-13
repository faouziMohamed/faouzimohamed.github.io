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
    var ul_=null,li_=null,_ul=null, c=title.length;
    console.log(title)
    /*For H1*/
    var H1 = document.querySelector(".main-article H1");
    H1.id = "top-h1";

    var h2 = new_element('h2',{style:'text-align:left; font-size:110%; margin-left:0px'});
    h2.appendChild(new_element('a',{style:"text-decoration:none; color:lightgreen;", href:"#top-h1"},
                                document.querySelector(".main-article H1").firstChild.data));
    ul.parentNode.insertBefore(h2,ul);
    
    /*Main loop to create the list of title in the left side of the webpage*/
    for(var i=0; i<c;++i)
    {   /*For H2*/
        if(title[i].nodeName === 'H2'){
            li  = add_li_to_ul(ul,title[i],'titre'+ (n++));
            ul_ = new_element('ul');
        }
        /*For H3*/
        while(++i<c && (title[i].nodeName === 'H3')){
            li_ = add_li_to_ul(ul_,title[i],'titre'+ (n++));
        }
        /*For H4*/
        console.log(title[i] + " " + title[i].firstChild.data);
        if(i<c && title[i].nodeName === 'H4'){
            _ul = new_element('ul');
            while(i<c && title[i].nodeName === 'H4'){
                add_li_to_ul(_ul,title[i++],'titre'+ (n++));
            }
            li_.appendChild(_ul);
            --i;
        }
        else i--;
        li.appendChild(ul_);
    }
}

create_list_left_nav();
