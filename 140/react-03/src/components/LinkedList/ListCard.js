import React from 'react';


function ListCard(props) {


     const getPosition=()=>{
        props.getPosition(props.keys)
     }

        return(
           <div id="idLL">
            <div id="idListCard" onClick={getPosition}>
                Subject: {props.subject}, 
                Amount: {props.amount},
                Position: {props.keys}
            </div>
            <h2 id="idArrow">→</h2>
            </div>
        );
    }

export default ListCard;