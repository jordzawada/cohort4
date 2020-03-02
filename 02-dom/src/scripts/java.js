
import addToList from "./addToList.js"

const onDivClick = () => {
    console.log(event.target);
}

const onShowClick = () => {
    console.log(document.getElementById("orderList1").children);

}

const addToList1 = ()=>{
    let listLength= document.getElementById("orderList1").children.length;
    let node= document.createElement("li")
    var textnode = document.createTextNode("item "+ String(listLength +1) );
    node.appendChild(textnode); 
    document.getElementById("orderList1").appendChild(node);

}

const delFromList =()=>{
    let list = document.getElementById('orderList1');
    var last=document.getElementById('orderList1').childElementCount-1;
    list.removeChild(list.childNodes[last]);
   
}


addBtn.addEventListener("click", addToList1)

document.body.addEventListener("click", onDivClick)

showBtn.addEventListener("click", onShowClick)

delBtn.addEventListener("click", delFromList)