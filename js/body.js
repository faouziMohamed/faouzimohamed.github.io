function new_element(name,attributes={}, text=''){
    node = document.createElement(name);

    for(var o in attributes)
        node.setAttribute(o, attributes[o])

    if(text){
        node.innerHTML = text;
    }
    return node
}

function add_rli_to_ul(ul,node,id)
{
    node.id += id
    a  = new_element('a', {href:'#'+id},node.firstChild.data)
    var li = new_element('li')
    li.appendChild(a)
    ul.appendChild(li)
    return li
}


function create_list_left_nav()
{
    var ul = document.querySelector("#ul-aside-nav")
    var section = document.querySelectorAll("section")
    var node = null,  n=1, id=''
    var li = null, ul_ = null

    for(var i = 0,c=section.length;i<c;i++)
    {
        childs = section[i]
        for(var j=0, l=childs.childNodes.length;j < l;j++)
        {
            node = childs.childNodes[j]                
            if(node.nodeName === 'H2')
            {
                if(ul_)
                {
                    li.appendChild(ul_)
                    ul.appendChild(li)

                    id = 'titre'+ (n++)
                    li = add_rli_to_ul(ul,node,id)
                    ul_ = null
                }
                else{
                    id = 'titre'+ (n++)
                    li = add_rli_to_ul(ul,node,id)
                }
                
                h2_found = true
            }
            else if(node.nodeName === 'H3')
            {
                if(h2_found == true)
                {ul_ = new_element('ul')}
                else{
                    if(ul_ == null)
                        ul_ = new_element('ul')
                }
                id = 'titre'+(n++)
                add_rli_to_ul(ul_,node,id)
                h2_found = false
            }
        }       
    }
}

create_list_left_nav()