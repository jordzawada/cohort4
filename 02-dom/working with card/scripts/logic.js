const functions = {

    makeNewCard :(x) => {
        let node= document.getElementById(x);
        let clone= node.cloneNode(true)
        return clone;
        
    },

    addCardBefore :(leftSide) =>{    
        let x = document.getElementById(leftSide).children[1];
        x=x.getAttribute('id');
        let node = functions.makeNewCard(x);
        let getEle = document.getElementById(leftSide);
        let getPos = getEle.children.length;
        getEle.insertBefore(node,getEle.childNodes[getPos]);
    },

    addCardAfter :(leftSide) =>{
        let x = document.getElementById(leftSide).children[1];
        x=x.getAttribute('id');
        let node = functions.makeNewCard(x); 
        let getEle = document.getElementById(leftSide);
        let getPos = getEle.children.length;
        node.children[0].textContent= "Card "+ getPos;
        

        getEle.appendChild(node);
    },
    
    delCard :(target) =>{
        target.parentElement.remove();
        
    },

}



export default functions;