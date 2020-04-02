import React from 'react';
import logo from '../bear.svg';
import './Bear.css'

function Bear() {
    return (
      <div class="Bear" >
          <img src={logo} className="Bear-logo" alt="logo" />
        
      </div>
    );
  }
  
  export default Bear;