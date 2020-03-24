

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


}

