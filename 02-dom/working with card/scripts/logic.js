const functions = {

    addCardBefore :(rightPanel) =>{
        let rightLength=document.getElementById(rightPanel).children.length;
        var node = document.createElement("div");
        var textnode = document.createTextNode("test");
        node.appendChild(textnode); 
        let getEle = document.getElementById(x);
        if (rightLength === 0) {
                   
            getEle.appendChild(node);
        } else {
                 
            getEle.insertBefore(node,getEle.childNodes[0]);
            
        }
        



    },


}



export default functions;