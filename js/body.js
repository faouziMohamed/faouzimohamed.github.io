function new_element(name,attributes={}, text=''){
    node = document.createElement(name);

    for(var o in attributes)
        node.setAttribute(o, attributes[o])

    if(text){
        node.innerHTML = text;
    }
    return node
}

function create_list_left_nav(){
    var ul = document.querySelector("#ul-aside-nav")
    var section = document.querySelectorAll("section")
    var node = '', a = '',  li = '',content=''
    
    for(var i = 0,c=section.length;i<c;i++)
    {
        childs = section[i]
        for(var j=0, l=childs.childNodes.length;j < l;j++)
        {
            node = childs.childNodes[j]
            id = 'titre'+i

                
            if(node.nodeName === 'H2')
            {
                node.id += id
                a  = new_element('a', {href:'#'+id},node.firstChild.data)
                li = new_element('li')
                li.appendChild(a)
                ul.appendChild(li)
            }
            else if(node.nodeName === 'H3')
            {

            }
        }
            
    }


    console.log(li.innerHTML)


}

create_list_left_nav()