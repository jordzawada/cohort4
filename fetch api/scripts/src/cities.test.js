import functions from './cities.js';
import {City,Community} from './cities.js';

test('test the basics', async () => {
   // test async and server ability to hand out data
   let url= 'http://127.0.0.1:5000/all';
   let data = await functions.getCities(url);
   
// initiate a new City class
    let newCity = new City ("test1",45.6,75.4,90000);
        expect(newCity.Name).toBe("test1");
// test the movedIn
    newCity.movedIn(500);
        expect(newCity.Population).toBe(90500);
        //test moved out
    newCity.movedOut(1000);    
    expect(newCity.Population).toBe(89500);
    // test howBig()
    let City1= new City ("City1",45.6,75.4,200000)       
       expect(City1.howBig()).toBe("City") 
    let LargeTown1= new City ("LargeTown1",45.6,75.4,30000)       
       expect(LargeTown1.howBig()).toBe("Large Town")
    let Town1= new City ("Town1",45.6,75.4,20000)       
       expect(Town1.howBig()).toBe("Town") 
    let Village1= new City ("Village1",45.6,75.4,525)       
       expect(Village1.howBig()).toBe("Village")  
    let Hamlet1= new City ("Hamlet1",45.6,75.4,56)       
       expect(Hamlet1.howBig()).toBe("Hamlet")
       expect(Hamlet1.whichSphere()).toBe("City is in Northern Hemisphere")
});
    
test('test the community controller', async () => {
   let url= 'http://127.0.0.1:5000/all';
   let data = await functions.getCities(url);
   const Community1 = new Community(data);
   expect(Community1.data[0].city).toBe('Calgary');
   expect(Community1.data[1].city).toBe('Edmonton');
    });