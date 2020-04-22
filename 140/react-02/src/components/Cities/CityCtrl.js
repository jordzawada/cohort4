import React from "react";


//oncomponeentdidmount do your fetch stuff

// this should be the component that displays the buttons and population.
class CityCtrl extends React.Component{

    constructor(props) {
        super(props);

        this.state ={
            highest: "highest",
            northern: "northern",
            southern: "southern",
            total:"total",
        }
    }
    render(){
        return(
            <div>
            <div></div>
            <div id="idHeaderInfo">Highest Population City: {this.state.highest} </div>
            <div id="idHeaderInfo">Most Northern City: {this.state.northern}</div>
            <div id="idHeaderInfo">Most Southern City: {this.state.southern}</div>
            <div id="idHeaderInfo">Total Population of All: {this.state.total}</div>
            <div>
              <div>
                <button id="idNewCity">
                  New City
                </button>
              </div>
              {/* <div>{cards}</div> */}
            </div>
    
          </div>
        )
    }

}



export default CityCtrl;