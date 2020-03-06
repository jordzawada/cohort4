import functions from "./logic.js"

const CardEvents =() =>{
    if (event.target.id==="addBefore") {
        functions.addCardBefore ("leftSide");
    } 
    else if (event.target.id==="addAfter"){
        functions.addCardAfter ("leftSide")
    } else if (event.target.id==="delBtn")
        functions.delCard (event.target);
}


leftSide.addEventListener("click", CardEvents)
