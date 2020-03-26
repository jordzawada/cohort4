
const fetch = require("node-fetch");

const functions ={
    async getCities(url){
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        } catch (error){
            console.error('Error',error);
            throw (error);
        }
    }, 

}

export class City {
    constructor(Name,Latitude,Longitude,Population) {
        this.Name = Name;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.Population = Population;
    }
    show (){
        let str= this.Name +", "+this.Latitude+", "+this.Longitude+", "+this.Population;
        console.log(str);
    }
    movedIn(num){
        this.Population=this.Population+num;
    }
    movedOut(num){
        this.Population=this.Population-num;
    }
    howBig(){
        if (this.Population>100000){
            return "City";
        } else if (this.Population>20000 && this.Population<= 100000){
            return "Large Town";
        } else if (this.Population>=1000 && this.Population<= 20000){
            return "Town";
        } else if (this.Population>100 && this.Population< 20000){
            return "Village";
        } else {
            return "Hamlet";
        }
    }
    whichSphere(){
        if (this.Latitude>=0){
            return "City is in Northern Hemisphere";
        } else {
            return "City is in Southern Hemisphere";
        }
    }
}

export class Community {
    constructor(data){
        this.data=data;
    }
    getMostNorthern(){
        let mostNorth=0;
        let mostNorthName='';      
        for (let i=0;i<this.data.length;i++){
            if (this.data[i].lat>mostNorth){
                mostNorth=this.data[i].lat;
                mostNorthName=this.data[i].city;
            }
        }
        return mostNorthName;    
    }
    getMostSouthern(){
        let mostSouth=90;
        let mostSouthName='';      
        for (let i=0;i<this.data.length;i++){
            if (this.data[i].lat<mostSouth){
                mostSouth=this.data[i].lat;
                mostSouthName=this.data[i].city;
            }
        }
        return mostSouthName;    
    }
    getPopulation(){
        let population = 0;
        for (let i=0;i<this.data.length;i++){
            population = population + this.data[i].Population; 
        }
        return population;
    }
    createCity(Name,Latitude=0,Longitude=0,Population=0){
        let newCity= new City (Name,Latitude,Longitude,Population);
        this.data.push(newCity);
    }
    deleteCity(selected){
        //find the data arrays position of the clicked on card, cards should be set up in order. Clicking delete on a card will delete it in the data array, and thus in the broswer.
        this.data.splice(selected,1)
    }

}

export default functions;