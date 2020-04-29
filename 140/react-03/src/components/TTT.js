import React from 'react';
import logo from '../TTT.svg';
import './TTT.css'

//svg tag inline to get fill
function TTT() {
    return (
      <div className="TTT" >
          <img src={logo} className="TTT-logo" alt="logo" />
        
      </div>
    );
  }
  
  export default TTT;