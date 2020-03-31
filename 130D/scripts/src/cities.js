
// const fetch = require("node-fetch");
let counter1=1;
const functions ={  
    async getCities(url){
        try {
            const response = await fetch(url);
            const data = await response.json();
            return await data;
        } catch (error){
            console.error('Error',error);
            throw (error);
        }
    }, 
    async onLoad(url){
        let data = await functions.getCities(url);
        const Community1= new Community(data);
        Community1.createCity('test1');
        Community1.createCity('test2');
        Community1.objectification();
        console.log(Community1.data);
        return Community1;
    },

    async postToServer (url='http://127.0.0.1:5000/add',data){
        // console.log("saved");
        console.log(await data);    
        let size = Object.keys(data).length;
        console.log(size);
        for (let i=1;i<=size;i++) {
            const response = await fetch(url, {
                method: 'POST',  
                mode: 'cors',       
                cache: 'no-cache',  
                redentials: 'same-origin', 
                headers: {
                    'Content-Type': 'application/json'
                },
                redirect: 'follow',         
                referrer: 'no-referrer',    
                body: JSON.stringify(await data[i-1]),
            });
            
            await response.json();   // parses JSON response into native JavaScript objects
        }
    },
    createCard(cardDiv){
        let targetDiv= document.getElementById(cardDiv)
        let node = document.createElement('div');
        node.classList.add("testCard");
        // let newCard = document.createElement('div');
        // newCard.classList.add("cardDiv");
        node.textContent="Here is some card text";
        let newUpper=document.createElement('div');
        newUpper.classList.add("cardUpperDiv");
        let upperText =document.createElement('p');
        upperText.textContent="some upper text";
        newUpper.appendChild(upperText);
        let newLower= document.createElement('div');
        newLower.classList.add("cardLowerDiv");
        let lowerTextInfo =document.createElement('p');
        let lowerText =document.createElement('p');
        let newButtonDiv = document.createElement('div');
        let newInfo= document.createElement('div');
        let newSettings= document.createElement('div');
        newButtonDiv.classList.add("w3-bar","w3-black");
        newInfo.classList.add("cardTabinfo");
        newInfo.id="info";
        lowerTextInfo.textContent="info tab";
        newInfo.appendChild(lowerTextInfo);
        newSettings.classList.add("cardTabsettings");
        newSettings.id="settings";
        lowerText.textContent="settings tab";
        newSettings.appendChild(lowerText);
        newSettings.style.display="none";
        let newInfoButton= document.createElement('button');
        newInfoButton.classList.add("w3-bar-item","w3-button");
        newInfoButton.textContent="Info";
        newInfoButton.setAttribute('onclick',"openCity('info')");
        let newSettingsButton= document.createElement('button');
        newSettingsButton.classList.add("w3-bar-item","w3-button");
        newSettingsButton.textContent="Settings";
        newSettingsButton.setAttribute('onclick',"openCity('settings')");

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
    updateCards(controller){
        console.log(Object.keys(controller));
        
        
        //this function will auto run and fill in data into the cards based on the controller object
        // if (){

        // }
    }


}

export class City {
    constructor(Name,Latitude,Longitude,Population) {
        this.Name = Name;
        this.Latitude = Latitude;
        this.Longitude = Longitude;
        this.Population = Population;
        this.key=counter1; 
        counter1=counter1+1;    
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
    constructor(data=[]){
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
    objectification(){
        this.data= Object.assign({},this.data)
    }


}

export default functions;