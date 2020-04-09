// const fetch = require("node-fetch");

export class Community {
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
    let population =0;
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
  // }
}
let counter1 = 1;
export const Community1 = new Community();
const functions = {
   
    async getCities(url) {
        try {
          const response = await fetch(url);
          // console.log(await response.json());
          const data = await response.json();
          // console.log("log from page load get cities, json from community class");
          // console.log(data);
          return await data;
        } catch (error) {
          console.error("Error", error);
          throw error;
        }
      },
   async onLoad(url) {
    try {
      let data = await functions.getCities(url);
      // console.log("make a new community from server data");
      // const Community1 = new Community();
      // need to make the data from server a City class
      let size = data.length;
      for (let i = 0; i < size; i++) {
        Community1.createCity(
          data[i].Name,
          data[i].Latitude,
          data[i].Longitude,
          data[i].Population,
        );
        let currentData =  data;
        let Name = currentData[i].Name;
        functions.createCard(
          "cardDiv",
          Name,
          currentData[i].Latitude,
          currentData[i].Longitude,
          currentData[i].Population,
          Community1.data[i].howBig(),
          Community1.data[i].whichSphere(),
        );
      }
      functions.updateUI(Community1);
      return Community1;
    } catch (error) {
      console.error("Error", error);
      throw error;
    }
  },
  async postData(url = "http://127.0.0.1:5000/add", data = {}) {
  
    const response = await fetch(url, {
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
  },
  createCard(cardDiv, name, lat, long, pop,howbig,size) {
    let targetDiv = document.getElementById(cardDiv);
    let node = document.createElement("div");
    node.classList.add("testCard");
    // let newCard = document.createElement('div');
    // newCard.classList.add("cardDiv");
    node.textContent = `${name}`;
    let newUpper = document.createElement("div");
    newUpper.classList.add("cardUpperDiv");
    let upperText = document.createElement("p");
    upperText.textContent = "photo";
    newUpper.appendChild(upperText);
    let newLower = document.createElement("div");
    newLower.classList.add("cardLowerDiv");
    let lowerTextInfo = document.createElement("p");
    let lowerText = document.createElement("p");
    let newButtonDiv = document.createElement("div");
    let newInfo = document.createElement("div");
    let newSettings = document.createElement("div");
    newButtonDiv.classList.add("w3-bar", "w3-black");
    newInfo.classList.add("cardTabinfo");
    newInfo.id = "info";
    lowerTextInfo.textContent = `Lat: ${lat}, Long: ${long}, Population: ${pop}, How big: ${howbig}, Hemisphere: ${size}`;
    newInfo.appendChild(lowerTextInfo);
    newSettings.classList.add("cardTabsettings");
    newSettings.id = "settings";
    lowerText.textContent = "Settings";
    let deleteButton = document.createElement("button");
    deleteButton.id = "deleteCity";
    deleteButton.textContent= "Delete";
    let moveInButton =document.createElement("button");
    moveInButton.id = "moveIn";
    moveInButton.textContent= "Move In";
    let moveOutButton =document.createElement("button");
    moveOutButton.id = "moveOut";
    moveOutButton.textContent= "Move Out";

    newSettings.appendChild(lowerText);
    newSettings.appendChild(deleteButton);
    newSettings.appendChild(moveInButton);
    newSettings.appendChild(moveOutButton);
    newSettings.style.display = "none";
    let newInfoButton = document.createElement("button");
    newInfoButton.classList.add("w3-bar-item", "w3-button");
    newInfoButton.textContent = "Info";
    newInfoButton.setAttribute("onclick", "openCity('info')");
    let newSettingsButton = document.createElement("button");
    newSettingsButton.classList.add("w3-bar-item", "w3-button");
    newSettingsButton.textContent = "Settings";
    newSettingsButton.setAttribute("onclick", "openCity('settings')");

    newButtonDiv.appendChild(newInfoButton);
    newButtonDiv.appendChild(newSettingsButton);
    newLower.appendChild(newButtonDiv);
    newLower.appendChild(newInfo);
    newLower.appendChild(newSettings);
    node.appendChild(newUpper);
    node.appendChild(newLower);

    // node.appendChild(newCard);
    targetDiv.appendChild(node);
  },
  newCity(urlAdd,Community1){
    let name =document.getElementsByName('name')[0].value;
    let lat =document.getElementsByName('lat')[0].value;
    let long =document.getElementsByName('long')[0].value;
    let pop =document.getElementsByName('pop')[0].value;
    Community1.createCity(name,lat,long,pop); 
    let size=Community1.data[0].howBig();
    let sphere= Community1.data[0].whichSphere();
    functions.postData(urlAdd,Community1.data[0]);
    functions.createCard(
      "cardDiv", name,lat,long,pop,size, sphere)
    Community1.data=[];
  },
  
  async deleteCity(keyNum) {
    //delete the city based on key
    let resp = await functions.postData("http://127.0.0.1:5000/delete",{key:keyNum});
    console.log(await resp.status);
    
  },
  
  updateUI(community) {
    topBar.textContent = `Most Northern: ${community.getMostNorthern()}, Most Southern: ${community.getMostSouthern()}, Total Population: ${community.getPopulation()} `;
  },
};

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
    this.Population = this.Population + num;
  }
  movedOut(num) {
    this.Population = this.Population - num;
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



export default functions;
