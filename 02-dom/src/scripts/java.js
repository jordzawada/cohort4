

const onDivClick = () => {
    console.log(event.target);
}

const onShowClick = () => {
    console.log(document.getElementById("orderList1").children);

}

const addToList = ()=>{
    let listLength= document.getElementById("orderList1").children.length;
    let node= document.createElement("li")
    var textnode = document.createTextNode("item "+ String(listLength +1) );
    node.appendChild(textnode); 
    document.getElementById("orderList1").appendChild(node);

}

export default onShowClick;

addBtn.addEventListener("click", addToList)

document.body.addEventListener("click", onDivClick)

showBtn.addEventListener("click", onShowClick)
