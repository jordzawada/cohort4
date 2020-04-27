import React from "react";
import TextField from '@material-ui/core/TextField';

class CityCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addValue:"",
      subValue:'',
    };
  }

  handleAddPop=(e)=>{
    this.setState({addValue: e.target.value})
  }
  addPopulation=()=>{
    this.props.addPopulation(this.props.keys,this.state.addValue);
    this.setState({addValue: ""})
  }
  handleSubtractPop=(e)=>{
    this.setState({subValue: e.target.value})
  }
  subtractPopulation=()=>{
    this.props.subtractPopulation(this.props.keys,this.state.subValue);
    this.setState({subValue: ""})
  }

  handleDelete=()=>{
    this.props.delete(this.props.keys-1)
  }

  render() {
    return (
      <div className="clCityCard">
        <div >
          <div>
        <div id="idCityName"><h2>{this.props.cityName}</h2></div>
            <div>Population: {this.props.cityPop}, a {this.props.cityType}</div>
            <div>Lat:{this.props.cityLat}, Long:{this.props.cityLong},  </div>
          </div>
          <div>
            <button onClick={this.addPopulation}>Add Population</button><TextField onChange={this.handleAddPop} value={this.state.addValue} type="number" />
          </div>
          <div>
            <button onClick={this.subtractPopulation}>Remove Population</button><TextField type="number"onChange={this.handleSubtractPop} value={this.state.subValue} />
          </div>
          <div> <br/></div>
          <div>
          <button onClick={this.handleDelete} >Delete City</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CityCard;
