import React from 'react';
import CityCtrl from "./CityCtrl.js";
import "./City.css";


class Cities extends React.Component{
    
    render(){    
        return(
            <div>
                 <h1>Cities</h1>
                    <CityCtrl />
            </div>
        );    
    
    }
        
    
}


export default Cities;