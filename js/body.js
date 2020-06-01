var ul = document.querySelector("#ul-aside-nav")
var section = document.querySelectorAll("section")
var node = ''

for(var i = 0,c=section.length;i<c;i++)
{
    childs = section[i]
    for(var j=0, l=childs.childNodes.length;j < l;j++)
    {
        node = childs.childNodes[j]

        if(node.nodeName === 'H2')
            alert(node.nodeName + " : " +
                node.innerHTML)
        else if(node.nodeName === 'H3')
            alert(node.nodeName + " : " +
                node.innerHTML)

    }
        
}
//if(node = section[0])