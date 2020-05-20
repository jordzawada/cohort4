const functions = {

    counter:1,

    counterUp : ()=>{
        let current= functions.counter;
        current++;
        functions.counter= current;
    },

    makeNewCard :(node) => {
        // let node= document.getElementById(id);
        let clone= node.cloneNode(true);
        functions.counterUp();
        return clone;
        
    },

    addCardBefore :(event) =>{    
        let e = event;
        let cardDivNode = e.parentElement;
        let node = functions.makeNewCard(cardDivNode);
        node.getElementsByTagName('h3')[0].textContent=`This is Card ${functions.counter}`;
        cardDivNode.parentElement.insertBefore(node,cardDivNode);
    },

    addCardAfter :(event) =>{
        let e = event;
        console.log(e);
        let cardDivNode = e.parentElement;  
        let node = functions.makeNewCard(cardDivNode);
        node.getElementsByTagName('h3')[0].textContent=`This is Card ${functions.counter}`;
        // let targetPosition =1;
        // console.log(targetPosition);
        
        cardDivNode.parentElement.insertBefore(node,cardDivNode.nextSibling);
        
        
        

        // cardDivNode.parentElement.appendChild(node);
    },
    
    delCard :(target) =>{
        target.parentElement.remove();
        
    },

}



export default functions;