import {City} from './cities.js'

test('test the basics', () => {
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
});
    
test('test the hemispheres () => {
    
    });