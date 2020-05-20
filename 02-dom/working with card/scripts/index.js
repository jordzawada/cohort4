import functions from "./logic.js"

const CardEvents =() =>{
    let e = event.target;
    if (event.target.id==="addBefore") {
        functions.addCardBefore(e);
    } 
    else if (event.target.id==="addAfter"){
        functions.addCardAfter (e)
    } else if (event.target.id==="delBtn")
        functions.delCard (event.target);
}


leftSide.addEventListener("click", CardEvents)
