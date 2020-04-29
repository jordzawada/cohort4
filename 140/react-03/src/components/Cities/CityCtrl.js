import React from "react";
import NewCityForm from "./NewCityForm";
import CityCard from "./CityCard";


let counter1 = 1;
//oncomponeentdidmount do your fetch stuff

// this should be the component that displays the buttons and population.

class Community {
  constructor(data = []) {
    this.data = data;
  }
  getMostNorthern() {
    let mostNorth = 0;
    let mostNorthName = "";
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Latitude > mostNorth) {
        mostNorth = this.data[i].Latitude;
        mostNorthName = this.data[i].Name;
        
      }
    }
    return mostNorthName;
  }
  getMostSouthern() {
    let mostSouth = 90;
    let mostSouthName = "";
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].Latitude < mostSouth) {
        mostSouth = this.data[i].Latitude;
        mostSouthName = this.data[i].Name;
      }
    }
    return mostSouthName;
  }
  getPopulation() {
    let population = 0;
    for (let i = 0; i < this.data.length; i++) {
      population = population + Number(this.data[i].Population);
    }
    return population;
  }
  createCity(Name, Latitude = 0, Longitude = 0, Population = 0) {
    let newCity = new City(Name, Latitude, Longitude, Population);
    this.data.push(newCity);
  }
  deleteCity(selected) {
    //find the data arrays position of the clicked on card, cards should be set up in order. Clicking delete on a card will delete it in the data array, and thus in the broswer.
    this.data.splice(selected, 1);
  }
  // objectification() {
  //   this.data = Object.assign({}, this.data);
}

export class City {
  constructor(Name, Latitude, Longitude, Population) {
    this.Name = Name;
    this.Latitude = Latitude;
    this.Longitude = Longitude;
    this.Population = Population;
    this.key = counter1;
    counter1 = counter1 + 1;
  }
  show() {
    let str =
      this.Name +
      ", " +
      this.Latitude +
      ", " +
      this.Longitude +
      ", " +
      this.Population;
    console.log(str);
  }
  movedIn(num) {
    this.Population = Number(this.Population) + num;
  }
  movedOut(num) {
    this.Population = Number(this.Population) - num;
  }
  howBig() {
    if (this.Population > 100000) {
      return "City";
    } else if (this.Population > 20000 && this.Population <= 100000) {
      return "Large Town";
    } else if (this.Population >= 1000 && this.Population <= 20000) {
      return "Town";
    } else if (this.Population > 100 && this.Population < 20000) {
      return "Village";
    } else {
      return "Hamlet";
    }
  }
  whichSphere() {
    if (this.Latitude >= 0) {
      return "City is in Northern Hemisphere";
    } else {
      return "City is in Southern Hemisphere";
    }
  }
}

let Community1 = new Community();
let url = "http://127.0.0.1:5000/";

class CityCtrl extends React.Component {
  constructor(props) {
    super(props);
    this.postData = this.postData.bind(this);
    this.handleNewCityClick = this.handleNewCityClick.bind(this);
    this.handleNewCitySumbit = this.handleNewCitySumbit.bind(this);
    this.handleNewCityClose = this.handleNewCityClose.bind(this);
    this.makeCards = this.makeCards.bind(this);

    this.state = {
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
      newCityForm: false,
      Communities: {},
      cards: [],
      loading: false,
    };
  }


  async postData(inputurl, data = {}) {
    const response = await fetch(inputurl, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      redentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(data),
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    json.status = response.status;
    json.statusText = response.statusText;
    // console.log(json, typeof(json));
    return json;
  }

  async makeCommunity() {
    let data = await this.postData(url + "all");
    let size = data.length;
    for (let i = 0; i < size; i++) {
      Community1.createCity(data[i].Name,data[i].Latitude,data[i].Longitude,data[i].Population);
    }
    this.setState({
      Communities: Community1,
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
    })
  }

  handleNewCityClick() {
    // console.log("clicked");
    this.setState({newCityForm:true})
    //   this.postData(url+"add",{key:2, name: "Jordan"})
    //   console.log("added");
  }

  handleNewCitySumbit(name,lat,long,pop){
    Community1.createCity(name,lat,long,pop);
    let size = Community1.data.length;
    for (let i=0;i<size;i++){
      this.postData(url+"add",Community1.data[i])
    }
    this.setState({newCityForm:false,
      Communities: Community1,
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
    })
  }
   handleNewCityClose(){
    this.setState({newCityForm:false})
   }

  handleAddPopulationClick=(key,amount)=>{
    
    let size = Community1.data.length;
    for (let i=0;i<size;i++){
      if (Community1.data[i].key===key){
        Community1.data[i].movedIn(Number(amount));
      }
    }
    this.setState({newCityForm:false,
      Communities: Community1,
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
    })
  }


  handleSubtractPopulationClick=(key,amount)=>{
    let size = Community1.data.length;
    for (let i=0;i<size;i++){
      if (Community1.data[i].key===key){
        Community1.data[i].movedOut(Number(amount));
      }
    }
    this.setState({newCityForm:false,
      Communities: Community1,
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
    })
  }

 componentDidMount() {
    this.makeCommunity();
  }
  componentWillUnmount() {
    this.postData(url+"clear");
    let size = Community1.data.length;
    for (let i=0;i<size;i++){
      this.postData(url+"add",Community1.data[i])
    }
    counter1=1;
    Community1 = new Community();
  }

  componentDidUpdate(prevProps,prevState,SS){
    if (prevState.cards === this.state.cards){ 
      this.makeCards();  
    }
  }

  handleDelete=(key)=>{
    Community1.deleteCity(key);
    this.setState({newCityForm:false,
      Communities: Community1,
      northern: Community1.getMostNorthern(),
      southern: Community1.getMostSouthern() ,
      total: Community1.getPopulation(),
    })
  }

  afterTime =() =>{
    this.setState({loading: false});
  }
  handleSave=()=>{
    let size = Community1.data.length;
    this.postData(url+"clear");
    for (let i=0;i<size;i++){
      this.postData(url+"add",Community1.data[i])
    }
    this.setState({loading: true})
    setTimeout(this.afterTime ,800)
  }

  async makeCards (){
    let length = Community1.data.length;
    let newCards=[];
    for (let i=0;i<length;i++){
      newCards.push(
        <CityCard
        cityName={Community1.data[i].Name}
        cityLat={Community1.data[i].Latitude}
        cityLong={Community1.data[i].Longitude}
        cityPop={Community1.data[i].Population}
        cityType={Community1.data[i].howBig()}

        addPopulation={this.handleAddPopulationClick}
        subtractPopulation={this.handleSubtractPopulationClick}

        key={Community1.data[i].key}
        keys={Community1.data[i].key}

        delete={this.handleDelete}
        />
      );
    }
    await this.setState({cards: newCards})
  } 



 render() {
    let newCityButton;
    if (this.state.newCityForm===true){
        newCityButton=<NewCityForm 
        newCitySumbit={this.handleNewCitySumbit}
        newCityClose={this.handleNewCityClose}
        />
    } else {
    newCityButton=<button id="idNewCity" onClick={this.handleNewCityClick}>
    New City
  </button>  
    }


    if (this.state.loading===false) {
    return (
      <div>
        <div id="idHeaderInfo">Most Northern City: {this.state.northern}</div>
        <div id="idHeaderInfo">Most Southern City: {this.state.southern}</div>
        <div id="idHeaderInfo">Total Population of All: {this.state.total}</div>
        <div>
          
         
          <div >
            <div id="idSave"><button id="idSaveBtn" onClick={this.handleSave} >Save</button></div>  {newCityButton}
          </div>
          <div> <br/></div>
          <div> <hr/></div>
          <div id="idCardDiv">{this.state.cards}</div>
        </div>
      </div>
    );
    } else {
      return(
      <div> Saving...</div>
      )
    }
  }
}

export default CityCtrl;
