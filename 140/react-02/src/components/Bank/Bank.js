import React from 'react';
import AcctCtrl from './AcctCtrl.js';


// this should be the component that displays the buttons and highest/lowest accounts. Just a top bar that says "Highest account is blah with $xx", etc. There needs to be a add account button, but the delete button should be per account. Use the cards layout from before as it loos quite snappy.
class Bank extends React.Component{
    constructor(){
        super()
       
        this.state={
            
        }
    }
    
    render(){   
        
        
        return(
            <div>
                <div>
                <h1><u>Bank</u></h1>
                </div>
                <div>
                
                <AcctCtrl /> 
                </div>
                
                
            </div>    
        );    
    
    }  
}


export default Bank;