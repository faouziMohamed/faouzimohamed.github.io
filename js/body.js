function new_element(name,attributes={}, text=''){
    node = document.createElement(name);

    for(var o in attributes)
        node.setAttribute(o, attributes[o]);

    if(text){
        node.innerHTML = text;
    }
    return node;
}

function add_li_to_ul(ul,node,id)
{
    node.id += id;
    a  = new_element('a', {href:'#'+id},node.firstChild.data);
    var li = new_element('li');
    li.appendChild(a);
    ul.appendChild(li);
    return li;
}


function create_list_left_nav()
{
    var ul = document.querySelector("#ul-aside-nav");
    var title = document.querySelectorAll("section h2, section h3");
    var node = null,  n=1, id=null, li=null;
    
    for(var i=0, c=title.length; i<c;++i)
    {
        id  = ' titre'+ (n++);
        li  = add_li_to_ul(ul,title[i],id);
        ul_ = new_element('ul');
        while(++i<c && title[i].nodeName === 'H3'){
            id  = ' titre'+ (n++);
            add_li_to_ul(ul_,title[i],id);
        }
        li.appendChild(ul_);
        --i;
    }
}

create_list_left_nav()
