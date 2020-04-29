import React from 'react';


function ListCard(props) {
    
        return(
           
            <div id="idListCard"> a card
                " "{props.subject}" "
                {props.amount}
            </div>
        );
    }

export default ListCard;