import React from 'react';

function Larrycomp (props) {
    // const [count, setCount] = React.useState(1000);
    // console.log(props);
        
    function myOnClick(e){
        // count++;
      
        console.log("clicked Larry count ");
        props.countFunc();
      } 
    return(
        <div>
        <h1>Hello world from Larrycomp</h1>
        <h1 onClick={myOnClick}>  count {props.countxx}</h1>
        </div>
    )
}

export default Larrycomp;